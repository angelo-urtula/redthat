class SessionsController < ApplicationController
    def create
        user = User.find_by(email: params[:email])
        session[:user_id] = user.id
        render json: user
    end

    def destroy
        session.clear
        head :no_content
    end
end