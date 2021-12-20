class Game < ApplicationRecord
    has_many :joins
    has_many :users, through: :joins
    has_many :roles
end
