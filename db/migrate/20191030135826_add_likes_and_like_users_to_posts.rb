class AddLikesAndLikeUsersToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :likes, :int
    add_column :posts, :likedusers, :string, array: true, default: []
  end
end
