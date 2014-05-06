class CourseSerializer < ActiveModel::Serializer
	embed :ids, include: true
	
	attributes :id, :name, :summary, :user_id
	has_many :lessons
end