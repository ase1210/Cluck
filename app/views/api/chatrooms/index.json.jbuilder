json.channels do
  @channels.each do |channel|
    json.partial! "show", chatroom: channel
  end
end

json.chatrooms do
  @subscribed_chatrooms.each do |chatroom|
    json.set! chatroom.id do
      json.extract! chatroom, :id, :name, :channel
    end
  end
end

json.chatroom_users do
  current_user.user_chatrooms.each do |user_chatroom|
    json.set! user_chatroom.id do
      json.extract! user_chatroom, :user_id, :chatroom_id, :status, :id
    end
  end
end

json.messages do
  @subscribed_chatrooms.each do |subscribed_chatroom|
    subscribed_chatroom.messages.each do |message|
      json.partial! "/api/messages/show", message: message
    end
  end
end

json.users do
  @subscribed_chatrooms.each do |subscribed_chatroom|
    subscribed_chatroom.message_authors.each do |author|
      json.partial! "/api/users/show", user: author
    end
  end
end
