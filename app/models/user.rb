class User < ApplicationRecord
    validates :username, :email, presence: true
    
    has_many :joins
    has_many :games, through: :joins
    has_many :roles, through: :games

    has_secure_password
end
