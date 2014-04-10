class Response < ActiveRecord::Base
	validates :content, presence: true
  belongs_to :user
  belongs_to :lesson
  belongs_to :question
end
