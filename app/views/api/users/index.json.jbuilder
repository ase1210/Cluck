@users.each do |user|
  json.partial! "show", user: user
end
