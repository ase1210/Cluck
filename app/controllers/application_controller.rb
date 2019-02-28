class ApplicationController < ActionController::Base
  helper_method :logged_in?, :current_user

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    session[:session_token] = nil
    @current_user.reset_session_token! if @current_user
  end

  def logged_in?
    !!current_user
  end

  def require_login
    render json: ["You must be logged in to perform this action"], status: 422 unless current_user
  end

  def require_logout
    render json: ["You cannot do this while logged in"], status: 422 if current_user
  end
end
