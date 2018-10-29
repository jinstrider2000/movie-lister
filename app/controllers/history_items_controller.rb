class HistoryItemsController < ApplicationController

  def create
    @user = User.find_by(id: params[:user_id])
    if @user && !@user.history_items.find_by(imdb_id: params[:imdb_id])
      @user.history_items.create(imdb_id: params[:imdb_id])
      head :created
    elsif @user
      head :ok
    else
      head :not_found
    end
  end

  def destroy
    @user = User.find_by(id: params[:user_id])
    @history_item = @user ? @user.history_items.find_by(imdb_id: params[:imdb_id]) : nil
    if @user && @history_item
      @history_item.destroy
      head :ok
    else
      head :not_found
    end
  end

  def index
    @user = User.find_by(id: params[:user_id])
    if @user
      render json: @user.history_items
    else
      head :not_found
    end
    
  end
  
end
