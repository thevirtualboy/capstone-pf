class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :genre, :description

  has_many :users
  has_many :roles
end
