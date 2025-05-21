Rails.application.routes.draw do
  # Devise routes with clean path names
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    sign_up: 'signup'
  }

  # Public landing page for unauthenticated users
  unauthenticated do
    root to: "landing#index"
  end

  # Authenticated dashboard as root
  authenticated :user do
    root to: "dashboard#index", as: :authenticated_root
  end

  # Main navigation routes
  get "dashboard", to: "dashboard#index"
  get "post_of_the_day", to: "posts_of_the_day#show", as: :post_of_the_day
  get "create_post", to: "posts#new", as: :create_post
  get "stats", to: "stats#index", as: :stats
  get "preferences", to: "preferences#show", as: :preferences

  # Preferences (retain edit/create as needed)
  resource :preference, only: [:show, :edit, :update, :create]

  # AI-generated posts (underlying post records)
  resources :posts, only: [:index, :show, :edit, :update, :destroy] do
    member do
      patch :approve
      patch :reject
    end
  end

  # Subscription CTA form on landing page
  post "subscribe", to: "subscriptions#create"

  # Health check endpoint
  get "up", to: "rails/health#show", as: :rails_health_check
end
