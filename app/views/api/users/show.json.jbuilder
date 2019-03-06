json.user do
  json.partial! "/api/users/show", user: @user
end
