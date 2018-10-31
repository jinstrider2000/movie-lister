class AuthenticationController < ApplicationController

  def authenticate
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      render json: {user_id: @user.id}, status: 200
    else
      render json: {user_id: nil}, status: 404
    end
  end

end
