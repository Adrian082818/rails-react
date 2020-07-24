class Review < ApplicationRecord
  belongs_to :game
  validates :content, presence: true 
  validates :commenter, presence: true 
  validates :game_id, presence: true 
end
