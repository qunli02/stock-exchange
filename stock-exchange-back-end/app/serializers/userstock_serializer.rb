class UserstockSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :stock_id, :amount, :price
  belongs_to :user
  belongs_to :stock
end
