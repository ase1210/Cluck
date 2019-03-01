json.set! chatroom.id do
  json.extract! chatroom, :id, :name, :channel, :admin_id
end
