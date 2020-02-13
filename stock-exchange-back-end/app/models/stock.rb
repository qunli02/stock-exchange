class Stock < ApplicationRecord
  has_many :userstocks
  has_many :users, through: :userstocks
end
