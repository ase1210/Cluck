# == Schema Information
#
# Table name: chatroom_users
#
#  id          :bigint(8)        not null, primary key
#  chatroom_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  status      :string           default("pending"), not null
#

class ChatroomUser < ApplicationRecord
  validates_uniqueness_of :chatroom_id, scope: [:user_id], message: "already contains that user"
  validates :status, inclusion: {in: ["active", "inactive", "viewing", "pending", "invited"]}

  belongs_to :chatroom
  belongs_to :user
end
