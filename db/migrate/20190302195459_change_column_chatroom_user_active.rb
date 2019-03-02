class ChangeColumnChatroomUserActive < ActiveRecord::Migration[5.2]
  def change
    rename_column :chatroom_users, :active, :status
    change_column :chatroom_users, :status, :string, default: "invited"
  end
end
