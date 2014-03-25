class QuestionSerializer < ActiveModel::Serializer
	embed :ids, include: true
	
	attributes :id, :content
	has_many :answers
end