# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)

# Users Seeds

Message.destroy_all
ChatroomUser.destroy_all
Chatroom.destroy_all
User.destroy_all

# Initial Setup - create! cluckbot and general chatroom

cluckbot = User.create!(username: "cluckbot", password: "tester")
general = Chatroom.create!(name: "general", channel: true, admin_id: cluckbot.id)

# ChatroomUser.create!(user_id: cluckbot.id, chatroom_id: general.id, status: "active")
# Message.create!(body: "Welcome to Cluck! Use this channel to chat with everyone!")

# User Creation
drew = User.create!(username: "Drew", password: "tester")

# Nights Watch
jon_snow = User.create!(username: "Jon Snow", password: "tester")
alliser = User.create!(username: "Alliser Thorne", password: "tester")
sam = User.create!(username: "Samwell Tarly", password: "tester")
aemon = User.create!(username: "Maester Aemon", password: "tester")
mormont = User.create!(username: "Lord Commander Mormont", password: "tester")
benjen = User.create!(username: "Benjen Stark", password: "tester")
grenn = User.create!(username: "Grenn", password: "tester")
edd = User.create!(username: "Edd", password: "tester")
qhorin = User.create!(username: "Qhorin Halfhand", password: "tester")
janos = User.create!(username: "Janos Slynt", password: "tester")
olly = User.create!(username: "Olly", password: "tester")
pypar = User.create!(username: "Pypar", password: "tester")
rast = User.create!(username: "Rast", password: "tester")
chett = User.create!(username: "Chett", password: "tester")

# Winterfell / Starks
eddard = User.create!(username: "Eddard Stark", password: "tester")
catelyn = User.create!(username: "Catelyn Stark", password: "tester")
robb = User.create!(username: "Robb Stark", password: "tester")
theon = User.create!(username: "Theon Greyjoy", password: "tester")
sansa = User.create!(username: "Sansa", password: "tester")
arya = User.create!(username: "Arya", password: "tester")
hodor = User.create!(username: "Hodor", password: "tester")
bran = User.create!(username: "Bran", password: "tester")
rickon = User.create!(username: "Rickon", password: "tester")
osha = User.create!(username: "Osha", password: "tester")
maester_luwin = User.create!(username: "Maester Luwin", password: "tester")

# Targaryens /  Daenerys
daenerys = User.create!(username: "Daenerys Targaryen", password: "tester")
rhaegar = User.create!(username: "Rhaegar Targaryen", password: "tester")
viserys = User.create!(username: "Viserys Targaryen", password: "tester")
tyrion = User.create!(username: "Tyrion", password: "tester")
jorah = User.create!(username: "Jorah Mormont", password: "tester")

mance = User.create!(username: "Mance Rayder", password: "tester")
ygritte = User.create!(username: "Ygritte", password: "tester")

robert = User.create!(username: "Robert Baratheon", password: "tester")
cercei = User.create!(username: "Cersei Lannister", password: "tester")
jaime = User.create!(username: "Jaime Lannister", password: "tester")
joffrey = User.create!(username: "Joffrey Baratheon", password: "tester")

melisandre = User.create!(username: "Melisandre", password: "tester")
stannis = User.create!(username: "Stannis Baratheon", password: "tester")

# Channel Creation

wall = Chatroom.create!(name: "the-wall", channel: true, admin_id: mormont.id)
kings_landing = Chatroom.create!(name: "kings-landing", channel: true, admin_id: cercei.id)
winterfell = Chatroom.create!(name: "winterfell", channel: true, admin_id: eddard.id)
meereen = Chatroom.create!(name: "meereen", channel: true, admin_id: daenerys.id)
north = Chatroom.create!(name: "the-north", channel: true, admin_id: robb.id)
northwall = Chatroom.create!(name: "north-of-the-wall", channel: true, admin_id: ygritte.id)

# Chatroom Users Creation

# General - add everyone
User.all.each do |user|
  ChatroomUser.create!(user_id: user.id, chatroom_id: general.id, status: "active")
end
Message.create!(author_id: cluckbot.id, chatroom_id: general.id, body: "Welcome to Cluck!")
Message.create!(author_id: daenerys.id, chatroom_id: general.id, body: "Hey Everyone!")
Message.create!(author_id: jon_snow.id, chatroom_id: general.id, body: "Do I really know nothing?")
Message.create!(author_id: ygritte.id, chatroom_id: general.id, body: "You know nothing Jon Snow!")
Message.create!(author_id: drew.id, chatroom_id: general.id, body: "I definitely know more than Jon Snow")
Message.create!(author_id: tyrion.id, chatroom_id: general.id, body: "I have a tender spot in my heart for cripples and bastards and broken things.")
Message.create!(author_id: sam.id, chatroom_id: general.id, body: "Hello!")
Message.create!(author_id: bran.id, chatroom_id: general.id, body: "I am the 3 eye'd raven. I'll never walk again but I will fly.")
Message.create!(author_id: hodor.id, chatroom_id: general.id, body: "Hodor.  Hodor!")

# Wall
users = [jon_snow, alliser, sam, aemon, mormont, benjen, grenn, edd, qhorin, janos, olly, pypar, rast, chett, tyrion]
users.each do |user|
  ChatroomUser.create!(user_id: user.id, chatroom_id: wall.id, status: "active")
end

Message.create!(author_id: mormont.id, chatroom_id: wall.id, body: "All who would pledge their service to the Night's Watch, recite these words:")
Message.create!(author_id: mormont.id, chatroom_id: wall.id, body: "Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post. I am the sword in the darkness. I am the watcher on the walls. I am the shield that guards the realms of men. I pledge my life and honor to the Night's Watch, for this night and all the nights to come.")
Message.create!(author_id: jon_snow.id, chatroom_id: wall.id, body: "Night gathers, and now my watch begins.")
Message.create!(author_id: sam.id, chatroom_id: wall.id, body: "It shall not end until my death.")
Message.create!(author_id: grenn.id, chatroom_id: wall.id, body: "I shall take no wife, hold no lands, father no children.")
Message.create!(author_id: edd.id, chatroom_id: wall.id, body: "I shall wear no crowns and win no glory.")
Message.create!(author_id: olly.id, chatroom_id: wall.id, body: "I shall live and die at my post.")
Message.create!(author_id: pypar.id, chatroom_id: wall.id, body: "I am the sword in the darkness.")
Message.create!(author_id: rast.id, chatroom_id: wall.id, body: "I am the watcher on the walls.")
Message.create!(author_id: chett.id, chatroom_id: wall.id, body: "I am the shield that guards the realms of men.")
Message.create!(author_id: jon_snow.id, chatroom_id: wall.id, body: "I pledge my life and honor to the Night's Watch, for this night and all the nights to come.")
Message.create!(author_id: benjen.id, chatroom_id: wall.id, body: "Well said lads!")
Message.create!(author_id: tyrion.id, chatroom_id: wall.id, body: "Well done!")
Message.create!(author_id: tyrion.id, chatroom_id: wall.id, body: "The wall is not for me.  I just wanted to piss off the top of it!!")

# Kings Landing
users = [joffrey, cercei, robert, eddard, tyrion, arya, jaime]
users.each do |user|
  ChatroomUser.create!(user_id: user.id, chatroom_id: kings_landing.id, status: "active")
end

# Winterfell
users = [jon_snow, arya, robb, eddard, theon, hodor, bran]
users.each do |user|
  ChatroomUser.create!(user_id: user.id, chatroom_id: winterfell.id, status: "active")
end
