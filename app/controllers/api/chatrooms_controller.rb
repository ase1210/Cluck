class Api::ChatroomsController < ApplicationController
  def index
    @chatrooms = Chatroom.all.where("channel = ?", true).includes(:admin)
  end

  def show
    @chatroom = Chatroom.find_by(id: params[:id])
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

  private

  def chatroom_params
    params.require(:chatroom).permit(:name, :channel, :admin_id, user_ids: [])
  end
end
