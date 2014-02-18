class Question < ActiveRecord::Base
  validates :title, presence: true
  belongs_to :lesson
  has_many :answers
  accepts_nested_attributes_for :answers
end
