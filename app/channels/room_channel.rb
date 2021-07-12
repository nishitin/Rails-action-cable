class RoomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel
    # 配信する部署名を決定する
    stream_from 'room_channel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
