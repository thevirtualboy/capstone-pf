class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: posts
    end

    def show
        post = Post.find(params[:id])
        render json: post, include: [:poster, :members]
    end 

    def create
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        post = Post.create(params_post)
        if post.valid?
            render json: post
        else 
            render json: { error: "Missing Info"}
        end
    end

    def update
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        post = Post.find(params[:id])
        post.update(params_post)
        render json: post
    end

    #Delete
    def destroy
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        post = Post.find(params[:id])
        post.destroy!
        head :no_content   
    end

    private

    def params_post
        params.permit(:title, :description, :user_limit, :poster_id, :game_id)
    end

end
