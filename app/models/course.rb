class Course < ActiveRecord::Base
	validates :name, presence: true
	has_many :lessons, -> { order(created_at: :asc) }, dependent: :destroy
	belongs_to :user
end
