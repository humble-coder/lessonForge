class ResponseSerializer < ActiveModel::Serializer
	attributes :id, :content, :user_id, :lesson_id, :question_id
end