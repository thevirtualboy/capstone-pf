class RoleSerializer < ActiveModel::Serializer
  attributes :id, :name, :game_id

  belongs_to :game
end
