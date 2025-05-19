class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
  
  # Prevent CSRF attacks by raising an exception
  protect_from_forgery with: :exception

  # Devise: Redirect to home after logout
  def after_sign_out_path_for(resource_or_scope)
    root_path
  end

  # Devise: Permit extra params like :name (optional)
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
    devise_parameter_sanitizer.permit(:account_update, keys: [:name])
  end
end
