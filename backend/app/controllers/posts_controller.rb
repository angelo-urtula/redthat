class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: post.to_json(include: [:user])
    end

    def create
        @post = Post.new(post_params)

        if @post.save
            render json: @post, status: : created
        else
            render json: @post.errors, status: :unprocessable_entity
        end
    end

    private

    def post_params
        params.require(:post).permit(:user_id, :title, :content)
    end
end
