json.users do
  @users.each do |user|
    json.partial! "show", user: user
  end
end
