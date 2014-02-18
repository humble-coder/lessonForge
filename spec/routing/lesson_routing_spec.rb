require "spec_helper"

describe "Lesson routing" do
	describe "POST /lessons" do
		it "routes to lessons#create" do
			expect(:post => "/lessons").to route_to(
	      :controller => "lessons",
	      :action => "create"
	    )
		end
	end

	describe "GET /lessons/:id" do
		it "routes to lessons#show" do
			FactoryGirl.create :lesson
			expect(:get => "/lessons/#{Lesson.first.id}").to route_to(
				:controller => "lessons",
				:action => "show",
				:id => Lesson.first.id.to_s
			)
		end
	end

	describe "GET /lessons/new" do
		it "routes to lessons#new" do
			expect(:get => "/lessons/new").to route_to(
				:controller => "lessons",
				:action => "new",
			)
		end
	end

	describe "PATCH /lessons/:id" do
		it "routes to lessons#update" do
			FactoryGirl.create :lesson
			expect(:patch => "/lessons/#{Lesson.first.id}").to route_to(
				:controller => "lessons",
				:action => "update",
				:id => Lesson.first.id.to_s
			)
		end
	end

	describe "PUT /lessons/:id" do
		it "routes to lessons#update" do
			FactoryGirl.create :lesson
			expect(:put => "/lessons/#{Lesson.first.id}").to route_to(
				:controller => "lessons",
				:action => "update",
				:id => Lesson.first.id.to_s
			)
		end
	end

	describe "DELETE /lessons/:id" do
		it "routes to lessons#destroy" do
			FactoryGirl.create :lesson
			expect(:delete => "/lessons/#{Lesson.first.id}").to route_to(
				:controller => "lessons",
				:action => "destroy",
				:id => Lesson.first.id.to_s
			)
		end
	end
end