class UsersController < ApplicationController
    before_action :authorize, only: [:update, :destroy]

    def index
        users = User.all
        render json: users.to_json(include: [:posts])
    end

    def show
        render json: @user
    end

    def wristband
        user = User.find_by(:id => session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Not logged in"}
        end
    end

    def create
        @user = User.new(user_params)

        if @user.save
            render json: @user, status: :created
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end

    def update
        if @user.update(user_params)
            render json: @user
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @user.destroy
    end

    private
    def set_user
        @user = User.find(params[:id])
    end

    def authorize
        return render json: {error: "Unauthorized action"}, status: :unauthorized unless session.include? :user_id
    end

    def user_params
        params.require(:user).permit(:name, :email, :hobbies)
    end
end
