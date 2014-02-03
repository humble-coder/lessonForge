class Api::V1::CoursesController < ApplicationController

	def index
		render json: Course.all, each_serializer: CourseSerializer
	end

	def show
		respond_with Course.find(params[:id])
	end

	def create
		respond_with Course.create(course_params)
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
