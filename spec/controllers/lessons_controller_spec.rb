require 'spec_helper'

describe LessonsController do

  describe "lessons#create" do
    it "returns http success" do
      post :create, lesson: { name: 'New Lesson' }, format: :json
      response.should be_success
    end

    it "renders the response body as JSON" do
      post :create, lesson: { name: 'Another Lesson' }, format: :json
      results = JSON.parse(response.body)

      expect(results["lesson"]["name"]).to eq("Another Lesson")
      expect(results["lesson"]["questions"]).to eq([])
    end
  end

  describe "PATCH update" do
    it "has a 200 status code and updates course attributes" do
      lesson = FactoryGirl.create :lesson
      patch :update, id: lesson.id, lesson: attributes_for(:lesson, name: "Changed Lesson")
      lesson.reload

      expect(response.status).to eq(200)
      expect(lesson.name).to eq("Changed Lesson")
    end
  end

  describe "DELETE destroy" do
    it "has a 200 status code" do
      lesson = FactoryGirl.create :lesson
      
      expect { delete :destroy, id: lesson.id }.to change(Lesson, :count).by(-1)
      expect(response.status).to eq(200)
    end
  end
end
