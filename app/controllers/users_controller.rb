class UsersController < ApplicationController

  def create
    @user = User.create(user_params)
    if @user.persisted?
      render json: {user_id: @user.id}, status: 201
    else
      head :bad_request
    end
  end

  private

  def user_params
      params.permit(:username, :password)
  end

end