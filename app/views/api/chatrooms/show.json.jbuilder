json.chatroom do
  json.partial! "show", chatroom: @chatroom
end

json.chatroom_user do
  @chatroom.chatroom_users.each do |chatroom_user|
    json.set! chatroom_user.id do
      json.extract! chatroom_user, :user_id, :chatroom_id, :status
    end
  end
end
