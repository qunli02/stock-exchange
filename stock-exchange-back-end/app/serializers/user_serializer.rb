class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :money
  has_many :userstocks
  has_many :stocks, through: :userstocks
end
