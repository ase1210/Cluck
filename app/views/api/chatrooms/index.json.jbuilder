json.channels do
  @channels.each do |channel|
    json.partial! "show", chatroom: channel
  end
end

json.chatrooms do
  current_user.chatrooms.subscribed.each do |chatroom|
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
