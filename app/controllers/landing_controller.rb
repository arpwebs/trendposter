class LandingController < ApplicationController
    def index
      # You could initialize any data needed for the landing page here
      # For example, plan options or testimonials
      @plans = [
        { 
          name: 'Basic', 
          price: 9.99, 
          features: ['Daily content suggestions', 'Basic topic customization', 'Up to 3 social platforms'] 
        },
        { 
          name: 'Pro', 
          price: 19.99, 
          features: ['Unlimited content generation', 'Advanced topic customization', 'All social platforms', 'Analytics dashboard'] 
        },
        { 
          name: 'Enterprise', 
          price: 49.99, 
          features: ['All Pro features', 'Dedicated account manager', 'Content calendar', 'Custom integrations', 'Priority support'] 
        }
      ]
    end
  end