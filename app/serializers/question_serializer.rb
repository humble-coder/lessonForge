class QuestionSerializer < ActiveModel::Serializer
	attributes :id, :content
	has_many :answers
end