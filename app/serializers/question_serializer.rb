class QuestionSerializer < ActiveModel::Serializer
	embed :ids, include: true
	
	attributes :id, :content, :category, :response
	has_many :answers
end