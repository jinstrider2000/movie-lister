class UsersController < ApplicationController

  def create
    user = User.new(user_params)
    if user.valid?
      user.save
      render json: user, status: 201
    elsif user.errors[:username].include?("has already been taken")
      head :forbidden
    else
      head :bad_request
    end
  end

  def get
    user = User.find_by(username: params[:username])
    if user
      render json: user, status: 200
    else
      head :not_found
    end
  end

  private

  def user_params
    params.require(:user).permit(:username)
  end

end