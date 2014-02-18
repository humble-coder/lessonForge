require 'spec_helper'

describe QuestionsController do
	describe "questions#create" do
		it "returns http success" do
			post :create, question: { content: "A question" }, format: :json
			response.should be_success
		end

		it "renders the response body as JSON" do
			post :create, question: { content: "A question" }, format: :json
			expect(response.body).to eq("{\"question\":{\"id\":1,\"content\":\"A question\",\"answers\":[]}}")
		end
	end
end