class UserSerializer < ActiveModel::Serializer
	embed :ids, include: true
	
  attributes :id, :name, :username, :email, :teacher
  has_many :courses
  has_many :responses
end