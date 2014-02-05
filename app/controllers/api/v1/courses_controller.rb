class Api::V1::CoursesController < ApplicationController
	respond_to :json

	def index
		render json: Course.all, each_serializer: CourseSerializer
	end

	def show
		respond_with Course.find(params[:id])
	end

	def create
		course = Course.new(course_params)

		if course.save
			render json: course
		else
			render json: {errors: course.errors.messages}, status: 422
		end
		#render json: Course.create(course_params)
	end

	def update
		render json: Course.find(params[:id])
	end

	def destroy
		respond_with Course.destroy(params[:id])
	end

	private
	
	def course_params
		params.require(:course).permit(:name)
	end

end
