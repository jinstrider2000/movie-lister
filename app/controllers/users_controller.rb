class UsersController < ApplicationController

  def create
    @user = User.create(user_params)
    if @user.persisted?
      render json: {message: t(".success_msg"), user_id: @user.id}, status: 201
    else
      render json: {message: t(".failure_msg")}, status: 404
    end
  end

  private

  def user_params
      params.permit(:username, :password)
  end

end