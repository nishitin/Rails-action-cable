class Message < ApplicationRecord
  belongs_to :user
  validates :user_id, presence: true
  validates :content, presence: true, length: { maximum: 500 }

  def template
    ApplicationController.renderer.render partial: 'message/message', locals: { message: self }
  end
end
