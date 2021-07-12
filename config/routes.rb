Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'rooms#show'
  resources :messages, only: :create
end
