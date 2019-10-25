class PostsController < ApplicationController
    before_action :set_post, only: [:show, :edit, :update, :destroy]
            
    def index
        @posts = Post.all
    end

    def show
        @post = Post.find(params[:id])
    end

    def new
        @post = Post.new
        
    end

    def create
        @post = Post.new(post_params)
        respond_to do |format|
            if @post.save
                format.html { redirect_to posts_path, notice: 'post was successfully created.' }
            else
                format.html { render action: 'new'}
            end
        end
    end

    def edit
    end

    def update
        @post.update(post_params)
        redirect_to post_path(@post)
    end

    def destroy
        @post.destroy
    end

    private

    def post_params
        params.require(:post).permit(:caption, photos: [])
    end

    def set_post
        @post = Post.find(params[:id])
    end
end
