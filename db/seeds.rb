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
Post.destroy_all

u1 = User.create(username: "xXD34D5H0TXx", email: "coolkillah@gmail.com", avatar: "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Deadshot_5c48a31e72ebe7.86143384.jpg?itok=YqFvmdxM", bio: "I'm a real gamer with an attitude.", contact: "deaddyboy#0000", password: "imreallycool")
u2 = User.create(username: "freddy2fingers", email: "fingers@gmail.com", avatar: "https://pbs.twimg.com/profile_images/1227575480947179526/39CoNBxx_400x400.jpg", bio: "I have more than 2 fingers, I promise.", contact: "freddyfings#0000", password: "fingthing")
u3 = User.create(username: "AnnieGunner", email: "gamergirl@gmail.com", avatar: "https://www.nydailynews.com/resizer/VCtxCOo4fnNO8GrABSGGYi15i88=/630x630/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/JYDVEPUFRAC3K6ZZBAJZNGVWVQ.jpg", bio: "I'm always the Imposter. Every time.", contact: "AnnieSMG#0000", password: "gaming11girl")
u4 = User.create(username: "gingerSNAP", email: "redhead@gmail.com", avatar: "https://vintagekitchennotes.com/wp-content/uploads/2020/10/Gingersnaps-6.1.jpg", bio: "Here for a good time, not a long time.", contact: "gingyS#0000", password: "rednotdead")
u5 = User.create(username: "PringlCaanz", email: "potatochip@gmail.com", avatar: "https://seeklogo.com/images/P/pringles-logo-62748614CC-seeklogo.com.png", bio: "I love Pringles, they keep me energized in the game.", contact: "pCaanz#0000", password: "snack4life")

g1 = Game.create(title: "Destiny 2", image: "https://cdn-ascope-prod.global.ssl.fastly.net/static/images/boxart_destiny_2_300x400.jpg", genre: "FPS", description: "Bungie's genre bending looter-shooter-mmo hybrid. Group up to take down raids, dungeons, PvP, or just run around in the various zones.")
g2 = Game.create(title: "Among Us", image: "https://cdn-www.gamerevolution.com/assets/uploads/2020/10/among-us-box.jpg", genre: "Party/Social", description: "In this huge hit, you take turns playing as Crewmates and Imposters. As a Crewmate you must find out who the Imposters are while also doing your tasks. As an Imposter you must use stealth and acting skills to kill everyone without being caught and voted out.")
g3 = Game.create(title: "League of Legends", image: "https://cdn-ascope-prod.global.ssl.fastly.net/static/images/boxart_league_of_legends_300x400.jpg", genre: "MOBA", description: "Riot's evergreen esport provides a tactical experience that has often been imitated but not quite replicated. Form a team and skip the pre-game stress of figuring out the team composition.")
g4 = Game.create(title: "Final Fantasy XIV", image: "https://howlongtobeat.com/games/Final_Fantasy_XIV,_A_Realm_Reborn_box_cover.jpg", genre: "MMO", description: "This critically acclaimed MMO sees you group up with 3-7 other players to tackle dungeons and raids together. Find your Tanks, Healers, and DPS here and ship the queue times.")

r1 = Role.create(name: "Warlock", game_id: g1.id)
r2 = Role.create(name: "Titan", game_id: g1.id)
r3 = Role.create(name: "Hunter", game_id: g1.id)
r4 = Role.create(name: "Player", game_id: g2.id)
r5 = Role.create(name: "Top", game_id: g3.id)
r6 = Role.create(name: "Mid", game_id: g3.id)
r7 = Role.create(name: "Bottom/ADC", game_id: g3.id)
r8 = Role.create(name: "Bottom/Support", game_id: g3.id)
r9 = Role.create(name: "Jungle", game_id: g3.id)
r10 = Role.create(name: "Tank", game_id: g4.id)
r11 = Role.create(name: "Healer", game_id: g4.id)
r12 = Role.create(name: "DPS", game_id: g4.id)

# Favorited.create(role_id: r1.id)
# Favorited.create(role_id: r2.id)
# Favorited.create(role_id: r3.id)
# Favorited.create(role_id: r4.id)
# Favorited.create(role_id: r5.id)
# Favorited.create(role_id: r6.id)
# Favorited.create(role_id: r7.id)
# Favorited.create(role_id: r8.id)
# Favorited.create(role_id: r9.id)
# Favorited.create(role_id: r10.id)
# Favorited.create(role_id: r11.id)
# Favorited.create(role_id: r12.id)

Join.create(game_id: g1.id, user_id: u1.id)
Join.create(game_id: g1.id, user_id: u2.id)
Join.create(game_id: g2.id, user_id: u3.id)
Join.create(game_id: g3.id, user_id: u4.id)
Join.create(game_id: g4.id, user_id: u5.id)

Post.create(title: "Please Help Me!", description: "I need a group to carry me in Iron Banner.", user_limit: 2, poster_id: u1.id, game_id: g1.id)
Post.create(title: "Need a Duo Partner", description: "I'm a support main and I need an ADC to help me out in the bot lane in ranked.", user_limit: 1, poster_id: u4.id, game_id: g3.id)