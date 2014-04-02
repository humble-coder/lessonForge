class LessonsController < ApplicationController
	respond_to :json

  def new
    lesson = Lesson.new(lesson_params)

    respond_with lesson
  end

  def create
    lesson = Lesson.new(lesson_params)
    
    if lesson.save
      render json: lesson
    else
      render json: { errors: lesson.errors.messages }, status: 422
    end
  end

  def show
    render json: Lesson.find(params[:id])
  end

  def update
    lesson = Lesson.find(params[:id])

    if lesson.update(lesson_params)
      render json: lesson, status: :ok
    else
      render json: { errors: lesson.errors.messages }, status: 422
    end
  end

  def destroy
    lesson = Lesson.find(params[:id])

    if lesson.destroy
      render json: nil, status: :ok
    else
      render json: { errors: lesson.errors.messages }, status: 404
    end
  end

  private

  def lesson_params
		params.require(:lesson).permit(:name, :course_id, :id, questions: [:content, :category, :lesson_id, :id, :answers])
	end

end