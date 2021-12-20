class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :description
      t.integer :user_limit
      t.integer :poster_id
      t.timestamps
    end
  end
end
