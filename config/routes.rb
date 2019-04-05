Rails.application.routes.draw do
  mount ActionCable.server => "/cable"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :chatrooms, only: [:index, :show, :create]
    resources :chatroom_users, only: [:create, :update]
    resources :messages, only: [:create, :destroy]
  end

  post "/api/dm", to: "api/chatrooms#dmcreate"

  root to: "static_pages#root"
end
