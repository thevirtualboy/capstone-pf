class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :avatar, :bio, :contact

  has_many :games
  has_many :roles
end
