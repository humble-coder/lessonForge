require 'spec_helper'

describe AnswersController do
  describe "answers#create" do
    it "returns http success" do
      post :create, answer: { content: "An answer", correct: false }, format: :json
      response.should be_success
    end

    it "renders the response body as JSON" do
    	post :create, answer: { content: "An answer", correct: false}, format: :json
    	expect(response.body).to eq("{\"answer\":{\"id\":1,\"content\":\"An answer\",\"correct\":false}}")
    end
  end
end