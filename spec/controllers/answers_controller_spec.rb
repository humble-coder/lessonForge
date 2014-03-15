require 'spec_helper'

describe AnswersController do
  describe "answers#create" do
    it "returns http success" do
      post :create, answer: { content: "An answer", correct: false }, format: :json
      response.should be_success
    end

    it "renders the response body as JSON" do
    	post :create, answer: { content: "An answer", correct: false}, format: :json
      results = JSON.parse(response.body)

      expect(results["answer"]["content"]).to eq("An answer")
      expect(results["answer"]["correct"]).to eq(false)
    end
  end

  describe "PATCH update" do
    it "has a 200 status code and updates course attributes" do
      answer = FactoryGirl.create :answer
      patch :update, id: answer.id, answer: attributes_for(:answer, content: "Changed Answer", correct: true)
      answer.reload

      expect(response.status).to eq(200)
      expect(answer.content).to eq("Changed Answer")
      expect(answer.correct).to eq(true)
    end
  end

  describe "DELETE destroy" do
    it "has a 200 status code" do
      answer = FactoryGirl.create :answer
      
      expect { delete :destroy, id: answer.id }.to change(Answer, :count).by(-1)
      expect(response.status).to eq(200)
    end
  end
end