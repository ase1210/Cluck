class ChangeColumnActiveChatroomUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :chatroom_users, :active, :boolean, null: false
  end
end
