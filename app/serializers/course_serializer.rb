class CourseSerializer < ActiveModel::Serializer
	embed :ids, include: true
	
	attributes :id, :name, :summary
	has_many :lessons
	has_many :users
end