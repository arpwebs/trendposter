class DashboardController < ApplicationController
  layout "dashboard"
  before_action :authenticate_user!

  def index
    # You'll later load AI-generated posts here
  end
end