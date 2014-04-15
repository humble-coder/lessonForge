class QuestionsController < ApplicationController
	respond_to :json

	def index
		questions = Question.where("lesson_id = ?", params[:lesson_id])

		render json: questions, each_serializer: QuestionSerializer
	end

	def new
		question = Question.new(question_params)

		respond_with question
	end

	def create
		question = Question.new(question_params)

		if question.save
			render json: question
		else
			render json: { errors: question.errors.messages }, status: 422
		end
	end

	def update
		question = Question.find(params[:id])

		if question.update_attributes(question_params)
			render json: question, status: :ok
		else
			render json: { errors: question.errors.messages }, status: 422
		end
	end

	def destroy
		question = Question.find(params[:id])

		if question.destroy
			render json: nil, status: :ok
		else
			render json: { errors: question.errors.messages }, status: 404
		end
	end

	private

	def question_params
		params.require(:question).permit(:content, :category, :lesson_id, :id, answers: [:content, :question_id, :id, :correct], responses: [:content, :lesson_id, :user_id, :question_id])
	end
end