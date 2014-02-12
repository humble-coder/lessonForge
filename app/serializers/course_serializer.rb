class CourseSerializer < ActiveModel::Serializer
	attributes :id, :name
	embed :ids
	has_many :lessons
end