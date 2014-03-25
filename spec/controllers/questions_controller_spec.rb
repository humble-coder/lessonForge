require 'spec_helper'

describe QuestionsController do
	describe "questions#create" do
		it "returns http success" do
			post :create, question: { content: "A question" }, format: :json
			response.should be_success
		end

		it "renders the response body as JSON" do
			post :create, question: { content: "A question" }, format: :json
			results = JSON.parse(response.body)

			expect(results["question"]["content"]).to eq("A question")
		end
	end

	describe "PATCH update" do
    it "has a 200 status code and updates course attributes" do
      question = FactoryGirl.create :question
      patch :update, id: question.id, question: attributes_for(:question, content: "Changed Question")
      question.reload

      expect(response.status).to eq(200)
      expect(question.content).to eq("Changed Question")
    end
  end

  describe "DELETE destroy" do
    it "has a 200 status code" do
      question = FactoryGirl.create :question
      
      expect { delete :destroy, id: question.id }.to change(Question, :count).by(-1)
      expect(response.status).to eq(200)
    end
  end
end