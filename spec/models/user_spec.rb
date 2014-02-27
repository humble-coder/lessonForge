require 'spec_helper'

describe User do
  describe "#session" do
  	it "gives the user's api key the correct attributes" do
  		user = create(:user)
  		api_key = user.session_api_key

  		expect(api_key.access_token).to match(/\S{32}/)
  		expect(api_key.user_id).to eq(user.id)
  	end
  end
end
