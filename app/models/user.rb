class User < ApplicationRecord
  has_secure_password
  has_many :history_items
  validates :username, presence: true
  validates :username, uniqueness: {case_sensitive: false}
end
