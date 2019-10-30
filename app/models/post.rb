class Post < ApplicationRecord
    has_many_attached :photos
    has_many :comments, as: :commentable, dependent: :destroy
    belongs_to :user
end
