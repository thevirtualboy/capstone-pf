class Post < ApplicationRecord
    belongs_to :poster, class_name: "User", foreign_key: 'poster_id'
    has_many :members, class_name: "User"
end
