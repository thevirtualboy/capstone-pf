class CreateJoins < ActiveRecord::Migration[6.1]
  def change
    create_table :joins do |t|
      t.integer :game_id
      t.integer :user_id
      t.timestamps
    end
  end
end
