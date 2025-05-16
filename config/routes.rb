Rails.application.routes.draw do
  # Landing page will be our root route
  root "landing#index"
  
  # Routes for potential signup, login, etc.
  get "signup", to: "users#new"
  post "signup", to: "users#create"
  
  # Route for form submission
  post "subscribe", to: "subscriptions#create"
  
  # Health check for containerized deployments
  get "up", to: "rails/health#show", as: :rails_health_check
end