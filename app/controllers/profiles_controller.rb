class ProfilesController < ApplicationController
    before_action :set_profile, only: [:show, :edit, :update, :destroy]
            
    def index
        @profiles = Profile.all
        # render json: @profiles
    end

    def show
        @profile = Profile.find(params[:id])
        # render json: @profile
    end

    def new
        @profile = Profile.new
        
    end

    def create
        @profile = Profile.new(profile_params)
        @profile.user = current_user
        respond_to do |format|
            if @profile.save
                format.html { redirect_to authenticated_root_path, notice: 'profile was successfully created.' }
            else
                format.html { render action: 'new'}
            end
        end
    end

    def edit
    end

    def update
        @profile.update(profile_params)
        redirect_to profile_path(@profile)
    end

    def destroy
        @profile.destroy
    end

    private

    def profile_params
        params.require(:profile).permit(:caption, followers: [], following: [])
    end

    def set_profile
        @profile = Profile.find(params[:id])
    end

end
