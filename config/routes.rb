Rails.application.routes.draw do
  devise_for :users
  get 'list/index'
   root to: "lists#index"
  resources :list, only: [:index]
end
