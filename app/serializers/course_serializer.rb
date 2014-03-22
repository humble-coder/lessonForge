class CourseSerializer < ActiveModel::Serializer
	attributes :id, :name, :user_id
	has_many :lessons
end