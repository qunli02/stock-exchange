class User < ApplicationRecord
  has_many :userstocks
  has_many :stocks, through: :userstocks
  has_secure_password
  validates :email, uniqueness: { case_sensitive: false }
end
