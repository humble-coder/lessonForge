class LessonSerializer < ActiveModel::Serializer
	embed :ids, include: true
	
	attributes :id, :name
	has_many :questions
	has_many :responses
end