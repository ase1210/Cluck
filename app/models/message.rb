# == Schema Information
#
# Table name: messages
#
#  id          :bigint(8)        not null, primary key
#  body        :text             not null
#  author_id   :integer          not null
#  chatroom_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Message < ApplicationRecord
  validates :body, presence: true

  belongs_to :chatroom

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end
