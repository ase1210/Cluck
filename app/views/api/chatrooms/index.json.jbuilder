@chatrooms.each do |chatroom|
  json.partial! "show", chatroom: chatroom
end
