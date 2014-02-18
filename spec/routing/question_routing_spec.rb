require "spec_helper"

describe "Question routing" do
	describe "POST /questions" do
		it "routes to questions#create" do
			expect(:post => "/questions").to route_to(
	      :controller => "questions",
	      :action => "create"
	    )
		end
	end

	describe "GET /questions/:id" do
		it "routes to questions#show" do
			FactoryGirl.create :question
			expect(:get => "/questions/#{Question.first.id}").to route_to(
				:controller => "questions",
				:action => "show",
				:id => Question.first.id.to_s
			)
		end
	end

	describe "GET /questions/new" do
		it "routes to questions#new" do
			expect(:get => "/questions/new").to route_to(
				:controller => "questions",
				:action => "new",
			)
		end
	end

	describe "GET /questions/:id/edit" do
		it "routes to questions#edit" do
			FactoryGirl.create :question
			expect(:get => "/questions/#{Question.first.id}/edit").to route_to(
				:controller => "questions",
				:action => "edit",
				:id => Question.first.id.to_s
			)
		end
	end

	describe "PATCH /questions/:id" do
		it "routes to questions#update" do
			FactoryGirl.create :question
			expect(:patch => "/questions/#{Question.first.id}").to route_to(
				:controller => "questions",
				:action => "update",
				:id => Question.first.id.to_s
			)
		end
	end

	describe "PUT /questions/:id" do
		it "routes to questions#update" do
			FactoryGirl.create :question
			expect(:put => "/questions/#{Question.first.id}").to route_to(
				:controller => "questions",
				:action => "update",
				:id => Question.first.id.to_s
			)
		end
	end

	describe "DELETE /questions/:id" do
		it "routes to questions#destroy" do
			FactoryGirl.create :question
			expect(:delete => "/questions/#{Question.first.id}").to route_to(
				:controller => "questions",
				:action => "destroy",
				:id => Question.first.id.to_s
			)
		end
	end
end