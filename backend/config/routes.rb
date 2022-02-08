Rails.application.routes.draw do
  resources :users
  resources :posts
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#wristband"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
