class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :user_limit, :poster_id

  belongs_to :poster, class_name: "User"
  has_many :members, class_name: "User"
end
