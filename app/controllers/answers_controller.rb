class AnswersController < ApplicationController
	respond_to :json

	def new
		answer = Answer.new(answer_params)

		respond_with answer
	end

	def create
		answer = Answer.new(answer_params)

		if answer.save
			render json: answer
		else
			render json: { errors: answer.errors.messages }, status: 422
		end
	end

	def update
	end

	def destroy
	end


	private

	def answer_params
		params.require(:answer).permit(:content, :question_id, :correct) if params[:answer]
	end
end