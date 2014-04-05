require "spec_helper"

describe "User routing" do

	describe "GET /users" do
		it "routes to users#index" do
			expect(:get => "/users").to route_to(
				:controller => "users",
				:action => "index"
			)
		end
	end
	
	describe "POST /users" do
		it "routes to users#create" do
			expect(:post => "/users").to route_to(
	      :controller => "users",
	      :action => "create"
	    )
		end
	end

	describe "GET /users/:id" do
		it "routes to users#show" do
			FactoryGirl.create :user
			expect(:get => "/users/#{User.first.id}").to route_to(
				:controller => "users",
				:action => "show",
				:id => User.first.id.to_s
			)
		end
	end

	# describe "PATCH /users/:id" do
	# 	it "routes to users#update" do
	# 		FactoryGirl.create :User
	# 		expect(:patch => "/users/#{User.first.id}").to route_to(
	# 			:controller => "users",
	# 			:action => "update",
	# 			:id => User.first.id.to_s
	# 		)
	# 	end
	# end

	# describe "PUT /users/:id" do
	# 	it "routes to users#update" do
	# 		FactoryGirl.create :User
	# 		expect(:put => "/users/#{User.first.id}").to route_to(
	# 			:controller => "users",
	# 			:action => "update",
	# 			:id => User.first.id.to_s
	# 		)
	# 	end
	# end

	# describe "DELETE /users/:id" do
	# 	it "routes to users#destroy" do
	# 		FactoryGirl.create :User
	# 		expect(:delete => "/users/#{User.first.id}").to route_to(
	# 			:controller => "users",
	# 			:action => "destroy",
	# 			:id => User.first.id.to_s
	# 		)
	# 	end
	# end
end