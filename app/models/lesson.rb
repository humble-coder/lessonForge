class Lesson < ActiveRecord::Base
	validates :name, presence: true
	belongs_to :course
	has_many :questions, dependent: :destroy
	accepts_nested_attributes_for :questions
end
