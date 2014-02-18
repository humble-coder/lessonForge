require "spec_helper"

describe "Answer routing" do
	describe "POST /answers" do
		it "routes to answers#create" do
			expect(:post => "/answers").to route_to(
	      :controller => "answers",
	      :action => "create"
	    )
		end
	end

	describe "GET /answers/:id" do
		it "routes to answers#show" do
			FactoryGirl.create :answer
			expect(:get => "/answers/#{Answer.first.id}").to route_to(
				:controller => "answers",
				:action => "show",
				:id => Answer.first.id.to_s
			)
		end
	end

	describe "GET /answers/new" do
		it "routes to answers#new" do
			expect(:get => "/answers/new").to route_to(
				:controller => "answers",
				:action => "new",
			)
		end
	end

	describe "GET /answers/:id/edit" do
		it "routes to answers#edit" do
			FactoryGirl.create :answer
			expect(:get => "/answers/#{Answer.first.id}/edit").to route_to(
				:controller => "answers",
				:action => "edit",
				:id => Answer.first.id.to_s
			)
		end
	end

	describe "PATCH /answers/:id" do
		it "routes to answers#update" do
			FactoryGirl.create :answer
			expect(:patch => "/answers/#{Answer.first.id}").to route_to(
				:controller => "answers",
				:action => "update",
				:id => Answer.first.id.to_s
			)
		end
	end

	describe "PUT /answers/:id" do
		it "routes to answers#update" do
			FactoryGirl.create :answer
			expect(:put => "/answers/#{Answer.first.id}").to route_to(
				:controller => "answers",
				:action => "update",
				:id => Answer.first.id.to_s
			)
		end
	end

	describe "DELETE /answers/:id" do
		it "routes to answers#destroy" do
			FactoryGirl.create :answer
			expect(:delete => "/answers/#{Answer.first.id}").to route_to(
				:controller => "answers",
				:action => "destroy",
				:id => Answer.first.id.to_s
			)
		end
	end
end