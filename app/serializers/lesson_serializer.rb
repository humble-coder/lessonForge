class LessonSerializer < ActiveModel::Serializer
	attributes :id, :name
	belongs_to :course
end