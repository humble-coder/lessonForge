class LessonsController < ApplicationController
	respond_to :json

  def create
    lesson = Lesson.new(lesson_params)
    binding.pry

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
		params.require(:lesson).permit(:name)
	end

end