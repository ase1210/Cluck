# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :session_token, uniqueness: true
  validates_uniqueness_of :username, case_sensitive: false
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  has_many :user_chatrooms, class_name: :ChatroomUser

  has_many :admin_chatrooms,
    primary_key: :id,
    foreign_key: :admin_id,
    class_name: :Chatroom

  has_many :chatrooms, through: :user_chatrooms, source: :chatroom do
    # def active
    #   where("chatroom_users.active = ?", true)
    # endq
  end

  def self.find_by_credentials(un, pw)
    user = User.find_by(username: un)
    (user && user.is_password?(pw)) ? user : nil
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end
end
