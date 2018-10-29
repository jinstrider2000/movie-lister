class CreateHistoryItems < ActiveRecord::Migration[5.1]
  def change
    create_table :history_items do |t|
      t.integer :user_id
      t.integer :imdb_id
      t.string :movie_name

      t.timestamps
    end
  end
end
