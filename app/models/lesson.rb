class Lesson < ActiveRecord::Base
	validates :name, presence: true
	belongs_to :course
	has_many :questions, dependent: :destroy
end
