Rails.application.routes.draw do
  resources :accounts
  resources :clients
  root :to => 'clients#index'
end
