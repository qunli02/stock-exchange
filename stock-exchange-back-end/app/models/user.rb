class User < ApplicationRecord
  has_many :userstocks
  has_many :stocks, through: :userstocks
end
