class Question < ActiveRecord::Base
  validates :content, presence: true
  belongs_to :lesson
  has_many :answers, -> { order(created_at: :asc) }, dependent: :destroy
end
