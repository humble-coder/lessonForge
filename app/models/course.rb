class Course < ActiveRecord::Base
	validates :name, presence: true
	has_many :lessons, dependent: :destroy
	belongs_to :user
end
