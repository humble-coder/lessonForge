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
		question = Question.find(params[:id])

		if question.destroy
			render json: nil, status: :ok
		else
			render json: { errors: question.errors.messages }, status: 404
		end
	end

	private

	def question_params
		params.require(:question).permit(:content, :lesson_id, answers_attributes: [:id, :question_id, :content, :correct])
		# qp[:answers] = [] unless qp[:answers]
		# qp
	end
end