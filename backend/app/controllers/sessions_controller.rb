class SessionsController < ApplicationController
    def create
        user = User.find_by(:email => params[:email])
        if user
            session[:user_id] = user.id
            cookies[:user_id] = user.id
            render json: user
        else
            flash.now[:danger] = "Incorrect email and/or password"
        end
    end

    def destroy
        session.clear
        head :no_content
    end
end