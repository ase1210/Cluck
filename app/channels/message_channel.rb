class MessageChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "messages_channel"
    stream_from "room-#{params["room"]}:messages"
  end

  def unsubscribed; end
end
