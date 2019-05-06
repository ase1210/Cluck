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
missandei = User.create!(username: "Missandei", password: "tester")

mance = User.create!(username: "Mance Rayder", password: "tester")
ygritte = User.create!(username: "Ygritte", password: "tester")

# Other Characters
robert = User.create!(username: "Robert Baratheon", password: "tester")
cercei = User.create!(username: "Cersei Lannister", password: "tester")
jaime = User.create!(username: "Jaime Lannister", password: "tester")
joffrey = User.create!(username: "Joffrey Baratheon", password: "tester")

melisandre = User.create!(username: "Melisandre", password: "tester")
stannis = User.create!(username: "Stannis Baratheon", password: "tester")
davos = User.create!(username: "Davos Seaworth", password: "tester")

# Channel Creation

wall = Chatroom.create!(name: "the-wall", channel: true, admin_id: mormont.id)

kings_landing = Chatroom.create!(name: "kings-landing", channel: true, admin_id: cercei.id)
winterfell = Chatroom.create!(name: "winterfell", channel: true, admin_id: eddard.id)
meereen = Chatroom.create!(name: "meereen", channel: true, admin_id: daenerys.id)
north = Chatroom.create!(name: "the-north", channel: true, admin_id: robb.id)
northwall = Chatroom.create!(name: "north-of-the-wall", channel: true, admin_id: ygritte.id)
dragonstone = Chatroom.create!(name: "dragonstone", channel: true, admin_id: daenerys.id)

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

# Dragonstone

users = [jon_snow, tyrion, davos, daenerys, missandei]
users.each do |user|
  ChatroomUser.create!(user_id: user.id, chatroom_id: dragonstone.id, status: "active")
end

Message.create!(author_id: missandei.id, chatroom_id: dragonstone.id, body: "You stand in the presence of Daenerys Stormborn of House Targaryen, rightful heir to the Iron Throne, rightful Queen of the Andals and the First Men, Protector of the Seven Kingdoms, the Mother of Dragons, the Khaleesi of the Great Grass Sea, The Unburnt, The Breaker of Chains.")
Message.create!(author_id: davos.id, chatroom_id: dragonstone.id, body: "This is Jon Snow.")
Message.create!(author_id: davos.id, chatroom_id: dragonstone.id, body: "He's King in the North.")
Message.create!(author_id: daenerys.id, chatroom_id: dragonstone.id, body: "Thank you for traveling so far, My Lords. I hope the seas weren't too rough.")
Message.create!(author_id: jon_snow.id, chatroom_id: dragonstone.id, body: "The winds were kind, Your Grace.")
Message.create!(author_id: davos.id, chatroom_id: dragonstone.id, body: "Apologies. I have a Flea Bottom accent, I know. But Jon Snow is King in the North, Your Grace. He's not a lord.")
Message.create!(author_id: daenerys.id, chatroom_id: dragonstone.id, body: "Forgive me --")
Message.create!(author_id: tyrion.id, chatroom_id: dragonstone.id, body: "Your Grace, this is Ser Davos Seaworth.")
Message.create!(author_id: daenerys.id, chatroom_id: dragonstone.id, body: "Forgive me, Ser Davos. I never did receive a formal education, but I could have sworn the last King in the North was Torren Stark who bent the knee to my ancestor Aegon Targaryen in exchange for his life and the lives of the northmen. Torren Stark swore fealty to House Targaryen in perpetuity. But do I have my facts wrong?")
Message.create!(author_id: davos.id, chatroom_id: dragonstone.id, body: "I wasn't there, My Grace.")
Message.create!(author_id: daenerys.id, chatroom_id: dragonstone.id, body: "No. Of course not. But still, an oath is an oath. In perpetuity means -- what does perpetuity mean, Lord Tyrion?")
Message.create!(author_id: tyrion.id, chatroom_id: dragonstone.id, body: "Forever.")
Message.create!(author_id: daenerys.id, chatroom_id: dragonstone.id, body: "Forever. So I assume, My Lord, that you're here to bend the knee.")
Message.create!(author_id: jon_snow.id, chatroom_id: dragonstone.id, body: "I am not.")
Message.create!(author_id: daenerys.id, chatroom_id: dragonstone.id, body: "Oh. Well, that is unfortunate. You've travelled all this way to break faith with House Targaryen?")
Message.create!(author_id: jon_snow.id, chatroom_id: dragonstone.id, body: "Break faith? Your father burned my grandfather alive. He burned my uncle alive. He would have burned the Seven Kingdoms.")
Message.create!(author_id: daenerys.id, chatroom_id: dragonstone.id, body: "My father was an evil man. On behalf of House Targaryen I ask your forgiveness for the crimes he committed against your family. And I ask you not to judge a daughter by the sins of her father. Our two houses were allies for centuries. Those were the best centuries the kingdom's ever known. Centuries of peace and prosperity with the Targaryens sitting on the Iron Throne and a Stark serving as Warden of the North. I am the last Targaryen, Jon Snow. Honor the pledge your ancestor made to mine. Bend the knee and I will name you Warden of the North. Together we will save this country from those who would destroy it.")
Message.create!(author_id: jon_snow.id, chatroom_id: dragonstone.id, body: "You're right. You're not guilty of your father's crime. And I'm not beholden to my ancestor's vows.")
Message.create!(author_id: daenerys.id, chatroom_id: dragonstone.id, body: "Then why are you here?")
Message.create!(author_id: jon_snow.id, chatroom_id: dragonstone.id, body: "Because I need your help and you need mine.")
Message.create!(author_id: daenerys.id, chatroom_id: dragonstone.id, body: "Did you see three dragons flying overhead when you arrived?")
Message.create!(author_id: jon_snow.id, chatroom_id: dragonstone.id, body: "I did.")
Message.create!(author_id: daenerys.id, chatroom_id: dragonstone.id, body: "And did you see the Dothraki, all of whom have sworn to kill for me?")
Message.create!(author_id: jon_snow.id, chatroom_id: dragonstone.id, body: "They're hard to miss.")
Message.create!(author_id: daenerys.id, chatroom_id: dragonstone.id, body: "But still, I need your help?")
Message.create!(author_id: davos.id, chatroom_id: dragonstone.id, body: "Not to defeat Cersei. You could storm King's Landing tomorrow and the city would fall. Hell, we almost took it and we didn't even have dragons.")
Message.create!(author_id: tyrion.id, chatroom_id: dragonstone.id, body: "Almost.")
Message.create!(author_id: jon_snow.id, chatroom_id: dragonstone.id, body: "But you haven't stormed King's Landing. Why not? The only reason I can see is you don't want to kill thousands of innocent people. It's the fastest way to win the war but you won't do it. Which means at the very least you're better than Cersei.")
Message.create!(author_id: daenerys.id, chatroom_id: dragonstone.id, body: "Still, that doesn't explain why I need your help.")
Message.create!(author_id: jon_snow.id, chatroom_id: dragonstone.id, body: "Because right now you and I and Cersei and everyone else, we're children playing at a game screaming that the rules aren't fair.")
Message.create!(author_id: daenerys.id, chatroom_id: dragonstone.id, body: "You told me you liked this man.")
Message.create!(author_id: tyrion.id, chatroom_id: dragonstone.id, body: "I do.")
Message.create!(author_id: daenerys.id, chatroom_id: dragonstone.id, body: "In the time since he's met me he's refused to call me queen, he's refused to bow and now he's calling me a child.")
Message.create!(author_id: tyrion.id, chatroom_id: dragonstone.id, body: "I believe he's calling all of us children. Figure of speech.")
Message.create!(author_id: jon_snow.id, chatroom_id: dragonstone.id, body: "Your Grace, everone you know will die before winter is over if we don't defeat the enemy to the north.")
Message.create!(author_id: daenerys.id, chatroom_id: dragonstone.id, body: "As far as I can see, you are the enemy to the north.")
Message.create!(author_id: jon_snow.id, chatroom_id: dragonstone.id, body: "I am not your enemy. The dead are the enemy.")
Message.create!(author_id: daenerys.id, chatroom_id: dragonstone.id, body: "The dead?")
Message.create!(author_id: daenerys.id, chatroom_id: dragonstone.id, body: "Is that another figure of speech?")

# Jon & Sam DM
# Jon & Daenerys DM
# Jon & Sansa DM
# Jon & Tyrion DM

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
