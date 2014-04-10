require 'spec_helper'

describe ResponsesController do

  describe "responsess#create" do
    it "returns http success" do
      post :create, response: { content: 'New Response', user_id: 1, lesson_id: 1 }, format: :json

      expect(response.status).to eq(200)
    end

    it "renders the courses/create response body as JSON" do
			lesson = create(:lesson)
			user = lesson.course.user
			post :create, response: { content: 'New Response', user_id: user.id, lesson_id: lesson.id }, format: :json
			results = JSON.parse(response.body)

			expect(results["response"]["content"]).to eq("New Response")
			expect(results["response"]["user_id"]).to eq(user.id)
			expect(results["response"]["lesson_id"]).to eq(lesson.id)
		end
	end
end