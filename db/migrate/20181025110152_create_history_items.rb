class CreateHistoryItems < ActiveRecord::Migration[5.1]
  def change
    create_table :history_items do |t|
      t.user_id :integer
      t.integer :imdb_id
      t.movie_name :string

      t.timestamps
    end
  end
end
