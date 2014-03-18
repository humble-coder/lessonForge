class Course < ActiveRecord::Base
	validates :name, presence: true
	has_many :lessons, dependent: :destroy, order: 'created_at DESC'
	belongs_to :user
end
