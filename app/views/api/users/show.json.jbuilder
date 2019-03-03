json.user do
  json.partial! "/api/users/show", user: @user
end

# json.chatrooms do
#   @user.chatrooms.subscribed.each do |chatroom|
#     json.set! chatroom.id do
#       json.extract! chatroom, :id, :name, :channel
#     end
#   end
# end

# json.chatroom_users do
#   @user.user_chatrooms.each do |user_chatroom|
#     json.set! user_chatroom.id do
#       json.extract! user_chatroom, :user_id, :chatroom_id, :status
#     end
#   end
# end
