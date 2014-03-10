class UsersController < ApplicationController
  respond_to :json
  #before_filter :ensure_authenticated_user, only: [:index]

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
      render json: [user, user.session_api_key], status: 201
    end
  end

  def update
    user = User.find(params[:id])

    if user.update_attributes(user_params)
      render json: user, status: :ok
    else
      render json: { errors: user.errors.messages }, status: 422
    end
  end

  private

  def user_params
    up = params.require(:user).permit(:name, :username, :email, :password, :password_confirmation, :teacher, :courses)
    up[:courses] = [] unless up[:courses]
    up
  end
end