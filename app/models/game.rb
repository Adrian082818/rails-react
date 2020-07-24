class Game < ApplicationRecord
    has_many :reviews, dependent: :destroy
    validates :title, presence: true 
    validates :genre, presence: true 
    validates :rating, presence: true 
end
