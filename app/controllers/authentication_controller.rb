class AuthenticationController < ApplicationController

  def authenticate
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      render json: {user_id: @user.id}, status: 200
    else
      head :unauthorized
    end
  end

end
