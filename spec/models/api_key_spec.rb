require 'spec_helper'

describe ApiKey do
  describe "#create" do
  	it "generates access token" do
  		key = create(:api_key)

  		expect(key.new_record?).to eq(false)
  		expect(key.access_token).to match(/\S{32}/)
  	end

  	it "sets the expired_at properly for 'session' scope" do
  		key = create(:api_key)

  		key.expired_at.should be_within(0.1).of(4.hours.from_now)
  	end

  	it "sets the expired_at properly for 'api' scope" do
  		key = create(:api_key, :with_api_scope)

  		key.expired_at.should be_within(0.1).of(30.days.from_now)
  	end
  end
end
