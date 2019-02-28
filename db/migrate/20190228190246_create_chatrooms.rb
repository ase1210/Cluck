class CreateChatrooms < ActiveRecord::Migration[5.2]
  def change
    create_table :chatrooms do |t|
      t.string :name, null: false
      t.boolean :channel, null: false
      t.integer :admin_id, null: false
      t.timestamps
    end
    add_index :chatrooms, :name, unique: true
    add_index :chatrooms, :admin_id
    add_index :chatrooms, :channel
  end
end
