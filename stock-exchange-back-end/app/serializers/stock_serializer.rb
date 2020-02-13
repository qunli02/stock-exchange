class StockSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :userstocks
  has_many :users, through: :userstocks
end
