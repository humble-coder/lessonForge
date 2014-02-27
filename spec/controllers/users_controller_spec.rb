require 'spec_helper'

describe UsersController do
  describe "#create" do
    it "creates a user successfully" do
      post 'create', {
      	user: {
      		username: 'billy',
      		name: 'Billy Blowers',
      		email: 'billy_blowers@example.com',
      		password: 'secret',
      		password_confirmation: 'secret'
      	}
      }
      results = JSON.parse(response.body)

      expect(results['api_key']['access_token']).to match(/\S{32}/)
      expect(results['api_key']['user_id']).to be > 0
    end

    it "doesn't create a user with invalid data" do
    	post 'create', {
    		user: {
    			username: '',
    			name: '',
    			email: 'foo',
    			password: 'secret',
    			password_confirmation: 'something_else'
    		}
    	}
    	results = JSON.parse(response.body)

    	expect(results['errors'].size).to eq(3)
    end
  end

end
