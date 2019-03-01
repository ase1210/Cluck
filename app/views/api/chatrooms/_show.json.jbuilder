json.set! chatroom.id do
  json.extract! chatroom, :id, :name, :channel, :admin_id, :created_at
  json.admin chatroom.admin.username
end
