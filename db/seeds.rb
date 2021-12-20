# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Game.destroy_all
Role.destroy_all
Join.destroy_all

u1 = User.create(username: "xXD34D5H0TXx", email: "coolkillah@gmail.com", avatar: "", password: "imreallycool")
u2 = User.create(username: "freddy2fingers", email: "fingers@gmail.com", avatar: "", password: "fingthing")
u3 = User.create(username: "AnnieGunner", email: "gamergirl@gmail.com", avatar: "", password: "gaming11girl")
u4 = User.create(username: "gingerSNAP", email: "redhead@gmail.com", avatar: "", password: "rednotdead")
u5 = User.create(username: "PringlCaanz", email: "potatochip@gmail.com", avatar: "", password: "snack4life")

g1 = Game.create(title: "Destiny 2", image: "https://cdn-ascope-prod.global.ssl.fastly.net/static/images/boxart_destiny_2_300x400.jpg", genre: "FPS", description: "Bungie's genre bending looter-shooter-mmo hybrid. Group up to take down raids, dungeons, PvP, or just run around in the various zones.")
g2 = Game.create(title: "Among Us", image: "https://cdn-www.gamerevolution.com/assets/uploads/2020/10/among-us-box.jpg", genre: "Party/Social", description: "In this huge hit, you take turns playing as Crewmates and Imposters. As a Crewmate you must find out who the Imposters are while also doing your tasks. As an Imposter you must use stealth and acting skills to kill everyone without being caught and voted out.")
g3 = Game.create(title: "League of Legends", image: "https://cdn-ascope-prod.global.ssl.fastly.net/static/images/boxart_league_of_legends_300x400.jpg", genre: "MOBA", description: "Riot's evergreen esport provides a tactical experience that has often been imitated but not quite replicated. Form a team and skip the pre-game stress of figuring out the team composition.")
g4 = Game.create(title: "Final Fantasy XIV", image: "https://howlongtobeat.com/games/Final_Fantasy_XIV,_A_Realm_Reborn_box_cover.jpg", genre: "MMO", description: "This critically acclaimed MMO sees you group up with 3-7 other players to tackle dungeons and raids together. Find your Tanks, Healers, and DPS here and ship the queue times.")

Role.create(name: "Warlock", game_id: g1.id)
Role.create(name: "Titan", game_id: g1.id)
Role.create(name: "Hunter", game_id: g1.id)
Role.create(name: "Player", game_id: g2.id)
Role.create(name: "Top", game_id: g3.id)
Role.create(name: "Mid", game_id: g3.id)
Role.create(name: "Bottom/ADC", game_id: g3.id)
Role.create(name: "Bottom/Support", game_id: g3.id)
Role.create(name: "Jungle", game_id: g3.id)
Role.create(name: "Tank", game_id: g4.id)
Role.create(name: "Healer", game_id: g4.id)
Role.create(name: "DPS", game_id: g4.id)

Join.create(game_id: g1.id, user_id: u1.id)
Join.create(game_id: g1.id, user_id: u2.id)
Join.create(game_id: g2.id, user_id: u3.id)
Join.create(game_id: g3.id, user_id: u4.id)
Join.create(game_id: g4.id, user_id: u5.id)
