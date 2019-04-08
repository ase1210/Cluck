class Api::MessagesController < ApplicationController
  before_action :require_login

  def create
    @message = Message.new(message_params)

    @chatroom = Chatroom.find_by(id: params[:message][:chatroom_id])

    userIds = []

    if @message.save
      # if DM - check for non-active status for chatroom users and update back to active
      unless @chatroom.channel
        chatroom_users = @chatroom.chatroom_users.where.not("status = ?", "active")
        chatroom_users.each do |chatroom_user|
          chatroom_user.status = "active"
          chatroom_user.save
          userIds << chatroom_user.user_id
        end
        # if >= 1 chatroom_user records updated, send this broadcast to re-subscribe users to chatroom
        if chatroom_users.length > 0
          ActionCable.server.broadcast("room--1:messages",
                                       added: true,
                                       userIds: userIds,
                                       chatroomId: @message.chatroom_id)
        end
      end

      # General message broadcast
      ActionCable
        .server
        .broadcast("room-#{@message.chatroom_id}:messages",
                   message: {
                     id: @message.id,
                     body: @message.body,
                     authorId: @message.author_id,
                     chatroomId: @message.chatroom_id,
                     createdAt: @message.created_at,
                   },
                   user: {
                     id: current_user.id,
                     username: current_user.username,
                     avatarURL: "https://cluckscholars.files.wordpress.com/2018/07/cropped-chick-with-cluck-color3.png?w=100",
                   })
      # render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find_by(id: params[:id])
    @message.delete
    render json: ["That message does not exist"], status: 422 unless @message
  end

  private

  def message_params
    params.require(:message).permit(:body, :author_id, :chatroom_id)
  end
end
