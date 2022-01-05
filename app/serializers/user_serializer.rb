class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :avatar

  has_many :games
  has_many :roles
end
