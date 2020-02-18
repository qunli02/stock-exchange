class Api::V1::StocksController < ApplicationController
  before_action :find_stock, only: [:update]
  def index
    @stocks = Stock.all
    render json: @stocks
  end

  def update
    @stock.update(stock_params)
    if @stock.save
      render json: @stock, status: :accepted
    else
      render json: { errors: @stock.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def stock_params
    params.permit(:id, :name)
  end

  def find_stock
    @stock = Stock.find(params[:id])
  end
end
