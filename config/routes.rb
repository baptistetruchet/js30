Rails.application.routes.draw do
  root to: 'challenges#index'
  resources :challenges, only: [:show]
end
