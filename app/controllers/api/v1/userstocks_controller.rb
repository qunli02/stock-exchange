class Api::V1::UserstocksController < ApplicationController
  before_action :find_userstock, only: [:update]
  def index
    @userstocks = Userstock.all
    render json: @userstocks
  end

  def create

    stock_ticker = userstock_params["ticker"]
    amount = userstock_params["qty"]
    money = userstock_params["money"]
    stock_price = userstock_params["stock_price"]
    @stock = Stock.find_by(name: stock_ticker)
    if !@stock
      @stock = Stock.create(name: stock_ticker)
    end
    Userstock.create(user_id:cur_user.id, stock_id: @stock.id, amount: amount, money: stock_price )
    cur_user.update(money: money)
  end

  def update
    @userstock.update(userstock_params)
    if @userstock.save
      render json: @userstock, status: :accepted
    else
      render json: { errors: @userstock.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def userstock_params
    params.permit(:id, :name, :money, :ticker, :qty, :stock_price)
  end

  def find_userstock
    @userstock = Userstock.find(params[:id])
  end
end
