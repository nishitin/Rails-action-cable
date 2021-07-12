class ApplicationController < ActionController::Base
    #アプリケーションコントローラに以下を設定するとこのアプリケーション自体ログインしないと使えないようになる。
  before_action :authenticate_user!
end
