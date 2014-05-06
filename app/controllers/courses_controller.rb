class CoursesController < ApplicationController
	respond_to :json
	
	def index
		courses = Course.where("user_id = ?", params[:user_id])
		render json: courses, each_serializer: CourseSerializer
	end

	def show
		render json: Course.find(params[:id])
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

		if course.update(course_params)
			render json: course, status: :ok
		else
			render json: { errors: course.errors.messages }, status: 422
		end
	end

	def destroy
		course = Course.find(params[:id])

		if course.destroy
			render json: nil, status: :ok
		else
			render json: { errors: course.errors.messages }, status: 404
		end

	end

	private
	
	def course_params
		params.require(:course).permit(:name, :summary, :id, :user_id, lessons: [:name, :id, :course_id, :questions])
	end
end
