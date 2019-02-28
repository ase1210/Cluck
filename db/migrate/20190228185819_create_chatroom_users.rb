class CreateChatroomUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :chatroom_users do |t|
      t.integer :chatroom_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :chatroom_users, :user_id
    add_index :chatroom_users, [:user_id, :chatroom_id], unique: true
  end
end
