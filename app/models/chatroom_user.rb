# == Schema Information
#
# Table name: chatroom_users
#
#  id          :bigint(8)        not null, primary key
#  chatroom_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  active      :boolean          default(TRUE), not null
#

class ChatroomUser < ApplicationRecord
  validates_uniqueness_of :chatroom_id, scope: [:user_id], message: "That user ia already in the chatroom"
  validates :active, inclusion: {in: [true, false]}

  belongs_to :chatroom
  belongs_to :user
end
