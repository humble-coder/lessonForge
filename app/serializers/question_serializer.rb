class QuestionSerializer < ActiveModel::Serializer
	embed :ids, include: true
	
	attributes :id, :content, :category
	has_many :answers
end