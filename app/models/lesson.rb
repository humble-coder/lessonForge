class Lesson < ActiveRecord::Base
	validates :name, presence: true
	belongs_to :course
	has_many :questions, -> { order(created_at: :asc) }, dependent: :destroy
end
