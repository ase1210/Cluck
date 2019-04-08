json.chatroom do
  json.partial! "show", chatroom: @chatroom
end

json.chatroom_users do
  @chatroom.chatroom_users.each do |chatroom_user|
    json.set! chatroom_user.id do
      json.extract! chatroom_user, :user_id, :chatroom_id, :status
    end
  end
end

json.users do
  @chatroom.users.each do |user|
    json.partial! "/api/users/show", user: user
  end
end

json.messages do
  @chatroom.messages.each do |message|
    json.set! message.id do
      json.partial! "/api/messages/show", message: message
    end
  end
end
