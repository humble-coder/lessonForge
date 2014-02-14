class CoursesController < ApplicationController
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
			render json: { errors: course.errors.messages }, status: 422
		end
	end

	def update
		course = Course.find(params[:id])

		if course.update_attributes(course_params)
			render json: course, status: :ok
		else
			render json: course.errors, status: 422
		end
	end

	def destroy
		course = Course.find(params[:id])

		if course.destroy
			render json: nil, status: :ok
		else
			render json: course.errors, status: 404
		end

	end

	private
	
	def course_params
		params.require(:course).permit(:name)
	end
end
