class AddActiveToChatroomUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :chatroom_users, :active, :boolean, default: true
    add_index :chatroom_users, :active
  end
end
