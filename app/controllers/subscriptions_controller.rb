class SubscriptionsController < ApplicationController
    def create
      # Simple implementation to handle email subscription
      email = params[:email]
      
      # Here you would typically save to database and/or send to email service
      # For now we'll just redirect with a flash message
      
      if email.present? && email.match?(/\A[^@\s]+@[^@\s]+\z/)
        # Success - in a real app you'd save the email
        flash[:success] = "Thanks for subscribing! We'll be in touch soon."
      else
        # Validation failed
        flash[:error] = "Please enter a valid email address."
      end
      
      redirect_to root_path
    end
  end