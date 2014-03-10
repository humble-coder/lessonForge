class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :teacher
  has_many :courses
end