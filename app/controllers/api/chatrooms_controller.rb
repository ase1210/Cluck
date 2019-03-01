class Api::ChatroomsController < ApplicationController
  def index
    @chatrooms = Chatroom.all
  end

  def show
    @chatroom = Chatroom.find_by(id: params[:id])
  end

  def create
    @chatroom = Chatroom.new(chatroom_params)
    @chatroom.admin_id = current_user.id unless @chatroom.admin_id

    if @chatroom.save
      render :show
    else
      render json: @chatroom.errors.full_messages
    end
  end

  private

  def chatroom_params
    params.require(:chatroom).permit(:name, :channel, :admin_id)
  end
end
