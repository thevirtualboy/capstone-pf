class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :avatar
  validates :username, :email, presence: true

  has_many :games
  has_many :roles
end
