class Api::MessagesController < ApplicationController
  before_action :require_login

  def create
    @message = Message.new(message_params)

    if @message.save
      render :show
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
