class User < ApplicationRecord
  has_many :history_items
  validates :username, presence: true
  validates :username, uniqueness: {case_sensitive: false}
end
