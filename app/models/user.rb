class User < ApplicationRecord
  has_many :history_items
  validates_presence_of :username
  validates_uniqueness_of :username, case_sensitive: false
  validates_length_of :username, within: 6..12
  validates_format_of :username, without: /[^A-Za-z0-9]/
end