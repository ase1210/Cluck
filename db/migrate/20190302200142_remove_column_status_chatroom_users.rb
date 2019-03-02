class RemoveColumnStatusChatroomUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :chatroom_users, :status
  end
end
