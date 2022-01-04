Rails.application.routes.draw do
  resources :posts
  resources :joins
  resources :roles
  resources :games
  resources :users

  get "/sessions", to: "sessions#index"
  post "/login", to: "sessions#create"
  get "/me", to: "users#showme"
  delete "/logout", to: "sessions#destroy"
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
