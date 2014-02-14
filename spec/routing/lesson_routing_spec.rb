require "spec_helper"

describe "Lesson routing" do
	describe "POST /courses/:id/lessons" do
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
end