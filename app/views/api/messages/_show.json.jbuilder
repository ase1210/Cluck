json.set! message.id do
  json.extract! message, :id, :body, :author_id, :chatroom_id, :created_at
end
