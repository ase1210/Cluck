json.chatroooms do
  @chatrooms.each do |chatroom|
    json.partial! "show", chatroom: chatroom
  end
end
