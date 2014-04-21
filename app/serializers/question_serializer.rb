class QuestionSerializer < ActiveModel::Serializer
	embed :ids, include: true
	
	attributes :id, :content, :category, :feedback
	has_many :answers
	has_many :responses
end