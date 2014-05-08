class SessionController < ApplicationController
	respond_to :json
	
	def create
  	user = User.where("username = ? OR email = ?", params[:username_or_email], params[:username_or_email]).first
    if user && user.authenticate(params[:password])
      render json: [user, user.session_api_key], status: 201
    else
      render json: "Login failed. Please try again.", status: 401
    end
  end
end
