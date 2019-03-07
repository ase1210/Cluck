class Api::UsersController < ApplicationController
  before_action :require_logout

  def create
    @user = User.new(user_params)
    generalChat = Chatroom.find_by(name: "general")

    if @user.save
      if generalChat
        ChatroomUser.create(user_id: @user.id, chatroom_id: generalChat.id, status: "active")
      end
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
