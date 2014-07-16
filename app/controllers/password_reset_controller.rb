class PasswordResetController < ApplicationController
	respond_to :json

	def create
		user = User.where("username = ? OR email = ?", params[:username_or_email], params[:username_or_email]).first
		if user
			new_password = Array.new(10){[*'0'..'9', *'a'..'z', *'A'..'Z'].sample}.join
			user.update_attribute(:password, new_password)
			user.update_attribute(:password_confirmation, new_password)
			UserMailer.password_reset(user).deliver
			render json: "Password Reset. Check your inbox at #{user.email}.", status: 200
		else
			render json: "Unable to find that user. Please try again.", status: 404
		end
	end

end