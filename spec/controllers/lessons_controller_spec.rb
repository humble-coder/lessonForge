require 'spec_helper'

describe LessonsController do

  describe "lessons#create" do
    it "returns http success" do
      post :create, lesson: { name: 'New Lesson' }, format: :json
      response.should be_success
    end

    it "renders the response body as JSON" do
      post :create, lesson: { name: 'Another Lesson' }, format: :json
      expect(response.body).to eq("{\"lesson\":{\"id\":1,\"name\":\"Another Lesson\",\"questions\":[]}}")
    end
  end


  # describe "GET 'show'" do
  #   it "returns http success" do
  #     get 'show'
  #     response.should be_success
  #   end
  # end

  # describe "GET 'new'" do
  #   it "returns http success" do
  #     get 'new'
  #     response.should be_success
  #   end
  # end

  # describe "GET 'edit'" do
  #   it "returns http success" do
  #     get 'edit'
  #     response.should be_success
  #   end
  # end

end
