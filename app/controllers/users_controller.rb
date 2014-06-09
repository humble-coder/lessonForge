class UsersController < ApplicationController
  respond_to :json

  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def create
    user = User.create(user_params)

    if user.new_record?
      render json: { errors: user.errors.messages }, status: 422
    else
      render json: user, status: 201
    end
  end

  def update
    user = User.find(params[:id])

    if user.update(user_params)
      render json: user, status: :ok
    else
      render json: { errors: user.errors.messages }, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :username, :email, :password, :password_confirmation, :teacher, :course_ids, responses: [:content, :lesson_id, :user_id, :question_id])
  end
end