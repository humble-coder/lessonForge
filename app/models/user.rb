class User < ActiveRecord::Base
	has_secure_password
  has_many :api_keys
  has_many :courses, -> { order(created_at: :asc) }, dependent: :destroy
  has_many :responses, dependent: :destroy
  
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  validates :name, presence: true

  def session_api_key
    api_keys.active.session.first_or_create
  end
end
