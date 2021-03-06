class Api::ChatroomUsersController < ApplicationController
  def create
    @chatroom_user = ChatroomUser.new(chatroom_user_params)

    if @chatroom_user.save
      render :show
    else
      render json: @chatroom_user.errors.full_messages, status: 422
    end
  end

  def update
    @chatroom_user = ChatroomUser.find_by(user_id: params[:chatroom_user][:user_id], chatroom_id: params[:chatroom_user][:chatroom_id])

    if @chatroom_user && @chatroom_user.update(chatroom_user_params)
      render :show
    else
      render json: @chatroom_user.errors.full_messages, status: 422
    end
  end

  private

  def chatroom_user_params
    params.require(:chatroom_user).permit(:user_id, :chatroom_id, :status)
  end
end
