class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :caption
      t.string :followers, array: true, default: []
      t.string :following, array: true, default: []
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
