class User < ApplicationRecord
    has_many :games
    has_many :roles, through: :games

    has_secure_password
end
