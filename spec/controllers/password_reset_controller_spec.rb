require 'spec_helper'

describe PasswordResetController do
	describe "#create" do
		it "resets password if username is found" do
			user = create(:user)
			post 'create', { username_or_email: user.username }
			
			expect(response.status).to eq(200)
			expect(response.body).to eq("Password Reset. Check your inbox at joe_user@example.com.")
		end

		it "resets password if email is found" do
			user = create(:user)
			post 'create', { username_or_email: user.email, password: user.password }
			

			expect(response.status).to eq(200)
			expect(response.body).to eq("Password Reset. Check your inbox at joe_user@example.com.")
		end

		it "doesn't authenticate with invalid info" do
			user = create(:user)
			post 'create', { username_or_email: "dunno" }

			expect(response.status).to eq(404)
			expect(response.body).to eq("Unable to find that user. Please try again.")
		end
	end
end
