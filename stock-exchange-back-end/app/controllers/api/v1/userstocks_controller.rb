class Api::V1::UserstocksController < ApplicationController
  before_action :find_userstock, only: [:update]
  def index
    @userstocks = Userstock.all
    render json: @userstocks
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
    params.permit(:id, :name)
  end

  def find_userstock
    @userstock = Userstock.find(params[:id])
  end
end
