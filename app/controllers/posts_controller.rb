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
        @post.user = current_user
        respond_to do |format|
            if @post.save
                format.html { redirect_to authenticated_root_path, notice: 'post was successfully created.' }
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
        redirect_to authenticated_root_path
    end

    def addLike
        @post = Post.find(params[:id])
        if @post
            @post.update_attribute(:likes, @post.likes + 1) 
            @post.update_attribute(:likedusers, @post.likedusers + [current_user.username])
        else
            @post.update_attribute(:likes, 1)
            @post.update_attribute(:likedusers, [current_user.username])
        end
        redirect_to authenticated_root_path
    end

    def decreaseLike
        @post = Post.find(params[:id])
        @post.update_attribute(:likedusers, @post.likedusers.delete(current_user.username))
        @post.update_attribute(:likes, @post.likes - 1)
        redirect_to authenticated_root_path
    end

    private

    def post_params
        params.require(:post).permit(:caption, photos: [])
    end

    def set_post
        @post = Post.find(params[:id])
    end
end
