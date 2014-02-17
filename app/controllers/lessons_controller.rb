class LessonsController < ApplicationController
	respond_to :json

  def index
    lessons = Lesson.where(course_id: params[:course_id])
    
    render json: lessons, each_serializer: LessonSerializer
  end

  def new
    lesson = Lesson.new(lesson_params)

    respond_with lesson
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

  def show
    #respond_with Lesson.find(params[:id])
    render json: Lesson.find(params[:id])
  end

  def update
    lesson = Lesson.find(params[:id])

    if lesson.update_attributes(lesson_params)
      render json: lesson, status: :ok
    else
      render json: { errors: lesson.errors.messages }, status: 422
    end
  end

  private

  def lesson_params
		params.require(:lesson).permit(:name, :course_id) if params[:lesson]
	end

end