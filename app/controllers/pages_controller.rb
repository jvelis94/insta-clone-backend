class PagesController < ApplicationController
  def home
  end

  def search
    if params[:query].present?
      sql_query = "users.first_name ILIKE :query OR users.last_name ILIKE :query OR users.email ILIKE :query OR users.username ILIKE :query"
      @profiles = Profile.joins(:user).where(sql_query, query: "%#{params[:query]}%")
        respond_to do |format|
          format.html
          format.json { render json: @profiles }
        end
    else
      @profiles = Profile.all
    end
  end
end
