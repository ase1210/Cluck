# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users Seeds

Message.delete_all
ChatroomUser.delete_all
Chatroom.delete_all
User.delete_all

# Initial Setup - create cluckbot and general chatroom

cluckbot = User.create(username: "cluckbot", password: "tester")
general = Chatroom.create(name: "general", channel: true, admin_id: cluckbot.id)

users = [
  {username: "Drew", password: "tester"},
  {username: "Mike", password: "tester"},
  {username: "Sr. Clucks'alot", password: "tester"},
]
users.each { |user| User.create(user) }

# ChatroomUser.create(user_id: cluckbot.id, chatroom_id: general.id, status: "active")
# Message.create(body: "Welcome to Cluck! Use this channel to chat with everyone!")

# User Creation

jon_snow = User.create(username: "Jon Snow", password: "tester")
alliser = User.create(username: "Alliser Thorne", password: "tester")
sam = User.create(username: "Samwell Tarly", password: "tester")
eddard = User.create(username: "Eddard Stark", password: "tester")
rob = User.create(username: "Rob Stark", password: "tester")
theon = User.create(username: "Theon Greyjoy", password: "tester")
arya = User.create(username: "Arya", password: "tester")
hodor = User.create(username: "Hodor", password: "tester")
ygritte = User.create(username: "Ygritte", password: "tester")
bran = User.create(username: "Bran", password: "tester")
tyrion = User.create(username: "Tyrion", password: "tester")
daenerys = User.create(username: "Daenerys Targaryen", password: "tester")
jorah = User.create(username: "Jorah Mormont", password: "tester")
cercei = User.create(username: "Cersei Lannister", password: "tester")
jaime = User.create(username: "Jaime Lannister", password: "tester")
joffrey = User.create(username: "Joffrey Baratheon", password: "tester")
melisandre = User.create(username: "Melisandre", password: "tester")
stannis = User.create(username: "Stannis Baratheon", password: "tester")
robert = User.create(username: "Robert Baratheon", password: "tester")
aemon = User.create(username: "Maester Aemon", password: "tester")
mormont = User.create(username: "Lord Commander Mormont", password: "tester")
benjen = User.create(username: "Benjen Stark", password: "tester")
grenn = User.create(username: "Grenn", password: "tester")

# Channel Creation

wall = Chatroom.create(name: "the-wall", channel: true, admin_id: jon_snow.id)
kings_landing = Chatroom.create(name: "kings-landing", channel: true, admin_id: cercei.id)
winterfell = Chatroom.create(name: "winterfell", channel: true, admin_id: eddard.id)
meereen = Chatroom.create(name: "meereen", channel: true, admin_id: daenerys.id)
north = Chatroom.create(name: "the-north", channel: true, admin_id: rob.id)
northwall = Chatroom.create(name: "north-of-the-wall", channel: true, admin_id: ygritte.id)

# Chatroom Users Creation

# General - add everyone
User.all.each do |user|
  ChatroomUser.create(user_id: user.id, chatroom_id: general.id, status: "active")
end

# Wall
users = [jon_snow, sam, alliser, tyrion]
users.each do |user|
  ChatroomUser.create(user_id: user.id, chatroom_id: wall.id, status: "active")
end

# Kings Landing
users = [joffrey, cercei, robert, eddard, tyrion, arya, jaime]
users.each do |user|
  ChatroomUser.create(user_id: user.id, chatroom_id: kings_landing.id, status: "active")
end

# Winterfell
users = [jon_snow, arya, rob, eddard, theon, hodor, bran]
users.each do |user|
  ChatroomUser.create(user_id: user.id, chatroom_id: winterfell.id, status: "active")
end
