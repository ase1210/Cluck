# == Schema Information
#
# Table name: chatrooms
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  channel    :boolean          not null
#  admin_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Chatroom < ApplicationRecord
  validates :name, presence: true
  validates :channel, inclusion: {in: [true, false]}

  belongs_to :admin,
    primary_key: :id,
    foreign_key: :admin_id,
    class_name: :User

  has_many :chatroom_users
  has_many :users, through: :chatroom_users, source: :user
end
