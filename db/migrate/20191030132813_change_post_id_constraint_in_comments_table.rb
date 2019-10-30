class ChangePostIdConstraintInCommentsTable < ActiveRecord::Migration[6.0]
  def change
    change_column :comments, :posts_id, :bigint, null: true
  end
end
