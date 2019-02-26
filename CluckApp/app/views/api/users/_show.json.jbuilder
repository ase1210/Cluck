json.set! user.id do
  json.extract! user, :id, :username
  json.avatarURL "https://cluckscholars.files.wordpress.com/2018/07/cropped-chick-with-cluck-color3.png?w=100"
end
