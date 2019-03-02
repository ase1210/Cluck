class AddColumnStatusToChatroomUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :chatroom_users, :status, :string, null: false, default: "pending"
  end
end
