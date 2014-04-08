class ResponseSerializer < ActiveModel::Serializer
	attributes :id, :content, :user_id, :lesson_id
end