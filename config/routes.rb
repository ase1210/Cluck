Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :chatrooms, only: [:index, :show, :create]
    resources :chatroom_users, only: [:create, :update]
  end

  root to: "static_pages#root"
end
