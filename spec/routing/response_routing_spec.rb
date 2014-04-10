require "spec_helper"

describe "Response routing" do
	describe "POST /responses" do
		it "routes to responses#create" do
			expect(:post => "/responses").to route_to(
	      :controller => "responses",
	      :action => "create"
	    )
		end
	end
end