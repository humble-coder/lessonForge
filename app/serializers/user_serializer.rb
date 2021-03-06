class UserSerializer < ActiveModel::Serializer
	embed :ids, include: true
	
  attributes :id, :name, :username, :email, :teacher
  has_many :responses
  has_many :courses
end