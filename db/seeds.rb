# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Game.where(title: "sekiro", genre: "rpg", rating: 5, price: 50).first_or_create
Game.where(title: "bloodborne", genre: "rpg", rating: 5, price: 50).first_or_create
Game.where(title: "mario", genre: "adventure", rating: 3, price: 30).first_or_create
Game.where(title: "cod", genre: "fps", rating: 3, price: 60).first_or_create

Review.where(commenter: "shlesma", content: "amazing", game_id: 1).first_or_create
Review.where(commenter: "tarric", content: "wonderful", game_id: 1).first_or_create
Review.where(commenter: "keesh", content: "fantastic", game_id: 2).first_or_create
Review.where(commenter: "mike", content: "fine", game_id: 3).first_or_create
Review.where(commenter: "haresh", content: "okay", game_id: 4).first_or_create