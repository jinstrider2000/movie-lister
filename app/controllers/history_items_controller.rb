class HistoryItemsController < ApplicationController

  def create
    user = User.find_by(id: params[:user_id])
    if user && !user.history_items.find_by(imdbid: params[:imdbid])
      history_item = user.history_items.create(history_params)
      render json: history_item, status: 201
    elsif user
      head :ok
    else
      head :not_found
    end
  end

  def destroy
    user = User.find_by(id: params[:user_id])
    history_item = user ? user.history_items.find_by(imdbid: params[:imdbid]) : nil
    if user && history_item
      history_item.destroy
      head :ok
    else
      head :not_found
    end
  end

  def index
    user = User.find_by(id: params[:user_id])
    if user
      render json: user.history_items, each_serializer: HistoryItemSerializer
    else
      head :not_found
    end
    
  end

  private

  def history_params
      params.permit(:id, :title, :imdbid, :poster, :year)
  end
  
end
