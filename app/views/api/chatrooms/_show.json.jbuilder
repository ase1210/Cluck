json.set! channel.id do
  json.extract! channel, :id, :name, :channel, :admin_id, :created_at
  json.admin channel.admin.username
end
