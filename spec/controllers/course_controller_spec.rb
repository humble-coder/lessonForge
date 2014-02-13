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
			expect(response.body).to eq("{\"course\":{\"id\":1,\"name\":\"Another Course\",\"lessons\":[]}}")
		end
	end

	describe "PATCH update" do
		it "has a 200 status code and updates course attributes" do
			course = Course.create( name: 'Some Course' )
			patch :update, id: course.id, course: attributes_for(:course, name: "Changed")
			course.reload

			expect(response.status).to eq(200)
			expect(course.name).to eq("Changed")
		end
	end

	describe "DELETE destroy" do
		it "has a 200 status code" do
			course = Course.create( name: 'Some Course' )
			
			expect { delete :destroy, id: course.id }.to change(Course, :count).by(-1)
			expect(response.status).to eq(200)
		end
	end
end