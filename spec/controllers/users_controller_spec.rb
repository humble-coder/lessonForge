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

      expect(results["user"]["name"]).to eq("Billy Blowers")
      expect(results["user"]["username"]).to eq("billy")
      expect(results["user"]["email"]).to eq("billy_blowers@example.com")
      expect(results["user"]["teacher"]).to eq(false)
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

  describe "#update" do
    it "updates a user successfully" do
      user = create(:user)
      put :update, id: user.id, user: attributes_for(:user, name: "changed", username: "changed", email: "new@example.com", password: "new", password_confirmation: "new")
      user.reload

      expect(response.status).to eq(200)
      expect(user.name).to eq("changed")
      expect(user.username).to eq("changed")
      expect(user.email).to eq("new@example.com")
    end

    it "does not allow a user to update with invalid data" do
      user = create(:user)
      put :update, id: user.id, user: attributes_for(:user, name: "changed", username: "", email: "", password: "something", password: "something else")

      results = JSON.parse(response.body)

      expect(results['errors'].size).to eq(3)
    end
  end
end
