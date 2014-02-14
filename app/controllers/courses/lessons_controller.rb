class Courses::LessonsController < ApplicationController

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

  # def show
  # 	lesson = Lesson.find(params[:id])
  # 	render json: lesson
  # end

  private

  def lesson_params
		params.require(:lesson).permit(:name, :course_id)
	end

end