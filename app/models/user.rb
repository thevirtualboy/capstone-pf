class User < ApplicationRecord
    has_many :joins
    has_many :games, through: :joins
    has_many :roles, through: :games

    has_secure_password
end
