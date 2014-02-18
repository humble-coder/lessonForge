class QuestionsController < ApplicationController
	respond_to :json

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
	end

	def destroy
	end

	private

	def question_params
		params.require(:question).permit(:content, :lesson_id, :answers) if params[:question]
	end

end