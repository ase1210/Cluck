json.set! @chatroom_user.id do
  json.extract! @chatroom_user, :user_id, :chatroom_id, :status
end
