class Api::V1::CoursesController < ApplicationController
	respond_to :json

	def index
		render json: Course.all, each_serializer: CourseSerializer
	end

	def show
		respond_with Course.find(params[:id])
	end

	def create
		render json: Course.create(course_params)
	end

	def update
		respond_with Course.update(params[:id], course_params)
	end

	def destroy
		respond_with Course.destroy(params[:id])
	end

	private
	
	def course_params
		params.require(:course).permit(:name)
	end

end
