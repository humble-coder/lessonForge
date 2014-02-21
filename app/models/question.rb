class Question < ActiveRecord::Base
  validates :content, presence: true
  belongs_to :lesson
  has_many :answers, dependent: :destroy
end
