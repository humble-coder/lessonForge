require "spec_helper"

describe "course routing" do

	describe "GET /courses" do
		it "routes to courses#index" do
			expect(:get => "/courses").to route_to(
				:controller => "courses",
				:action => "index"
			)
		end
	end
	
	describe "POST /courses" do
		it "routes to courses#create" do
			expect(:post => "/courses").to route_to(
	      :controller => "courses",
	      :action => "create"
	    )
		end
	end

	describe "GET /courses/:id" do
		it "routes to courses#show" do
			FactoryGirl.create :course
			expect(:get => "/courses/#{Course.first.id}").to route_to(
				:controller => "courses",
				:action => "show",
				:id => Course.first.id.to_s
			)
		end
	end

	describe "GET /courses/new" do
		it "routes to courses#new" do
			expect(:get => "/courses/new").to route_to(
				:controller => "courses",
				:action => "new",
			)
		end
	end

	describe "PATCH /courses/:id" do
		it "routes to courses#update" do
			FactoryGirl.create :course
			expect(:patch => "/courses/#{Course.first.id}").to route_to(
				:controller => "courses",
				:action => "update",
				:id => Course.first.id.to_s
			)
		end
	end

	describe "PUT /courses/:id" do
		it "routes to courses#update" do
			FactoryGirl.create :course
			expect(:put => "/courses/#{Course.first.id}").to route_to(
				:controller => "courses",
				:action => "update",
				:id => Course.first.id.to_s
			)
		end
	end

	describe "DELETE /courses/:id" do
		it "routes to courses#destroy" do
			FactoryGirl.create :course
			expect(:delete => "/courses/#{Course.first.id}").to route_to(
				:controller => "courses",
				:action => "destroy",
				:id => Course.first.id.to_s
			)
		end
	end
end