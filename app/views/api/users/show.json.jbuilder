json.user do
  json.partial! "/api/users/show", user: @user
end

json.chatrooms do
  @user.chatrooms.subscribed.each do |chatroom|
    json.set! chatroom.id do
      json.extract! chatroom, :id, :name, :channel
    end
  end
end
