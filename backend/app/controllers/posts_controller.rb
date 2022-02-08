class PostsController < ApplicationController
    before_action :authorize, only: [:create]
    def index
        posts = Post.all
        render json: posts.to_json(include: [:user])
    end

    def create
        @post = Post.create(post_params)
        render json: @post, status: created
        
    end

    private

    def authorize
        return render json: {error: "Unauthorized action"}, status: :unauthorized unless session.include? :user_id
    end

    def post_params
        params.require(:post).permit(:user_id: session[:user_id], :title, :content)
    end
end
