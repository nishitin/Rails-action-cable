class RoomsController < ApplicationController
  def show
    # 投稿一覧用に表示
    @messages = Message.includes(:user).order(:id)
    # メッセージ投稿用に利用
    @message = current_user.messages.build
  end
end
