class UsersController < ApplicationController
    def index
        users = User.all
        render json: user.to_json(include: [:posts])
    end

    def show
        render json: @user
    end
end
