class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
  
  # Prevent CSRF attacks by raising an exception
  protect_from_forgery with: :exception

  # For API-only portions of the application if needed
  # Skip this for HTML form submissions
  # skip_before_action :verify_authenticity_token, only: [:api_methods_here]
end
