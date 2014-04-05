class ResponsesController < ApplicationController
	respond_to :json

	def create
		response = Response.new(response_params)

		if response.save
			render json: response
		else
			render json: { errors: response.errors.messages }, status: 422
		end
	end

	def update
		response = response.find(params[:id])

		if response.update_attributes(response_params)
			render json: response, status: :ok
		else
			render json: { errors: response.errors.messages }, status: 422
		end
	end

	def destroy
		response = response.find(params[:id])

		if response.destroy
			render json: nil, status: :ok
		else
			render json: { errors: response.errors.messages }, status: 404
		end
	end

	private

	def response_params
		params.require(:response).permit(:content, :user_id, :question_id)
	end
end