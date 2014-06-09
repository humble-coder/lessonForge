class CoursesController < ApplicationController
	respond_to :json

	def index
		if params[:ids]
			user_id = params[:ids][0]
			courses = Course.joins("join courses_users on courses.id = courses_users.course_id").where(["courses_users.user_id = ?", user_id])
			render json: courses, each_serializer: CourseSerializer
		else
			courses = Course.all
			render json: courses, each_serializer: CourseSerializer
		end
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
		params.require(:course).permit(:name, :summary, :id, :user_ids => [], lessons: [:name, :id, :course_id, :questions])
	end
end
