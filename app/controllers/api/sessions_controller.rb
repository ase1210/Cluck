class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render "/api/users/show"
    else
      render json: ["Sorry, you entered an incorrect username or password"], status: 422
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}, status: 200
    else
      render json: {}, status: 404
    end
  end
end
