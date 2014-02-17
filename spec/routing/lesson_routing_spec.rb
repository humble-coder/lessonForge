require "spec_helper"

describe "Lesson routing" do
	describe "POST /courses/:course_id/lessons" do
		it "routes to lessons#create" do
			FactoryGirl.create :course
			expect(:post => "/courses/#{Course.first.id}/lessons").to route_to(
	      :controller => "lessons",
	      :action => "create",
	      :course_id => Course.first.id.to_s
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

	describe "GET /courses/:course_id/lessons" do
		it "routes to lessons#index" do
			FactoryGirl.create :course
			FactoryGirl.create :lesson
			expect(:get => "/courses/#{Course.first.id}/lessons").to route_to(
				:controller => "lessons",
				:action => "index",
				:course_id => Course.first.id.to_s
			)
		end
	end

	describe "GET /courses/:course_id/lessons/new" do
		it "routes to lessons#new" do
			FactoryGirl.create :course
			expect(:get => "/courses/#{Course.first.id}/lessons/new").to route_to(
				:controller => "lessons",
				:action => "new",
				:course_id => Course.first.id.to_s
			)
		end
	end
end