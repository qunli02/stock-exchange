Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :update, :create]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      resources :stocks, only: [:index, :update]
      resources :userstocks, only: [:index, :create, :update]
    end
  end
end
end
