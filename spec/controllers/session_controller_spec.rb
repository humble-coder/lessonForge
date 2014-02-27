require 'spec_helper'

describe SessionController do
	describe "#create" do
		it "authenticates with username" do
			user = create(:user)
			post 'create', { username_or_email: user.username, password: user.password }
			results = JSON.parse(response.body)

			expect(results['api_key']['access_token']).to match(/\S{32}/)
			expect(results['api_key']['user_id']).to eq(user.id)
		end

		it "authenticates with email" do
			user = create(:user)
			post 'create', { username_or_email: user.email, password: user.password }
			results = JSON.parse(response.body)

			expect(results['api_key']['access_token']).to match(/\S{32}/)
			expect(results['api_key']['user_id']).to eq(user.id)
		end

		it "doesn't authenticate with invalid info" do
			user = create(:user)
			post 'create', { username_or_email: user.email, password: 'huh' }

			expect(response.status).to eq(401)
		end
	end
end
