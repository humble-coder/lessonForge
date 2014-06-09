class Course < ActiveRecord::Base
	validates :name, presence: true
	has_many :lessons, -> { order(created_at: :asc) }, dependent: :destroy
	has_and_belongs_to_many :users
end
