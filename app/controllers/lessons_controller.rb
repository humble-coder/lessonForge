class LessonsController < ApplicationController
	respond_to :json
	
  def index
  	course = Course.find(params[:course_id])
  	render json: course.lessons, each_serializer: LessonSerializer
  end

  def show
  	course = Course.find(params[:course_id])
  	respond_with course.lessons(params[:id])
  end

  def create
  	course = Course.find(params[:course_id])
  	lesson = Lesson.new(lesson_params)
  	lesson.course = course

  	if lesson.save
  		render json: lesson
  	else
  		render json: { errors: lesson.errors.messages }, status: 422
  	end
  end

  def edit
  end

  def update
  end

  private

  def lesson_params
		params.require(:lesson).permit(:name)
	end

end
