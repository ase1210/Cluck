class Api::ChatroomsController < ApplicationController
  def index
    @channels = Chatroom.all.where("channel = ?", true).includes(:admin)
    @subscribed_chatrooms = current_user.chatrooms.subscribed.includes(:messages, :message_authors)
  end

  def show
    # @chatroom = Chatroom.find_by(id: params[:id])
    @chatroom = Chatroom.all.where("id = ?", params[:id]).includes(:admin, :messages, :users, :chatroom_users)[0]
  end

  def create
    @chatroom = Chatroom.new(chatroom_params)

    if @chatroom.save
      render :show
    else
      render json: @chatroom.errors.full_messages, status: 422
    end
  rescue ActiveRecord::RecordNotFound
    render json: ["At least one of those users no longer exists"], status: 422
  end

  def dmcreate
    @chatroom = Chatroom.find_by(name: params[:chatroom][:name])

    if @chatroom
      chatroom_user = ChatroomUser.find_by(user_id: current_user.id, chatroom_id: @chatroom.id)
      chatroom_user.update_attributes(status: "active")
      render :show
    else
      @chatroom = Chatroom.new(chatroom_params)

      if @chatroom.save
        chatroom_user = ChatroomUser.find_by(user_id: current_user.id, chatroom_id: @chatroom.id)
        chatroom_user.update_attributes(status: "active")
        render :show
      else
        render json: @chatroom.errors.full_messages, status: 422
      end
    end
  end

  private

  def chatroom_params
    params.require(:chatroom).permit(:name, :channel, :admin_id, user_ids: [])
  end
end
