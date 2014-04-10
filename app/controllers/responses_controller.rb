class ResponsesController < ApplicationController
	respond_to :json

	def index
		responses = Response.where("user_id = ?", params[:user_id])

		render json: responses, each_serializer: ResponseSerializer
	end

	def create
		response = Response.new(response_params)

		if response.save
			render json: response
		else
			render json: { errors: response.errors.messages }, status: 422
		end
	end

	def update
		response = Response.find(params[:id])

		if response.update_attributes(response_params)
			render json: response, status: :ok
		else
			render json: { errors: response.errors.messages }, status: 422
		end
	end

	def destroy
		response = Response.find(params[:id])

		if response.destroy
			render json: nil, status: :ok
		else
			render json: { errors: response.errors.messages }, status: 404
		end
	end

	private

	def response_params
		params.require(:response).permit(:content, :user_id, :lesson_id, :question_id)
	end
end