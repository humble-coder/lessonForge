class LessonSerializer < ActiveModel::Serializer
	attributes :id, :name
	has_many :questions
end