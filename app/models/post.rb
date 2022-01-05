class Post < ApplicationRecord
    validates :title, :description, :game_id, presence: true
    belongs_to :poster, class_name: "User", foreign_key: 'poster_id'
    has_many :members, class_name: "User"
end
