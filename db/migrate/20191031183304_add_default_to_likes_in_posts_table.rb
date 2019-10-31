class AddDefaultToLikesInPostsTable < ActiveRecord::Migration[6.0]
  def change
    change_column :posts, :likes, :int, default: 0
  end
end
