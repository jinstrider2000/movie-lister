class AuthenticationController < ApplicationController

  def authenticate
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      render json: user, status: 200
    else
      head :not_found
    end
  end

end
