json.message do
  json.partial! "show", message: @message
end

json.user do
  json.id current_user.id
  json.username current_user.username
  json.avatarURL "https://cluckscholars.files.wordpress.com/2018/07/cropped-chick-with-cluck-color3.png?w=100"
end
