require 'spec_helper'

describe CoursesController do
	describe "GET index" do
		it "has a 200 status code" do
			get :index
			expect(response.status).to eq(200)
		end

		it "renders the courses/index response body as JSON" do
			get :index
			expect(response.body).to eq("{\"courses\":[]}")
		end
	end

	describe "POST create" do
		it "has a 200 status code" do
			post :create, course: { name: 'Some Course' }, format: :json
			expect(response.status).to eq(200)
		end

		it "renders the courses/create response body as JSON" do
			post :create, course: { name: 'Another Course' }, format: :json
			results = JSON.parse(response.body)

			expect(results["course"]["name"]).to eq("Another Course")
			expect(results["course"]["lessons"]).to eq([])
		end
	end

	describe "PATCH update" do
		it "has a 200 status code and updates course attributes" do
			course = FactoryGirl.create :course
			patch :update, id: course.id, course: attributes_for(:course, name: "Changed")
			course.reload

			expect(response.status).to eq(200)
			expect(course.name).to eq("Changed")
		end
	end

	describe "DELETE destroy" do
		it "has a 200 status code" do
			course = FactoryGirl.create :course
			
			expect { delete :destroy, id: course.id }.to change(Course, :count).by(-1)
			expect(response.status).to eq(200)
		end
	end
end