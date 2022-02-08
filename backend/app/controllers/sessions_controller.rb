class SessionsController < ApplicationController
    def create
        user = User.find_by(name: params[:name])
        session[:user_id] = user.id
        render json: user
    end

    def destroy
        session.clear
    end
end