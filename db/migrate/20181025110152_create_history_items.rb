class CreateHistoryItems < ActiveRecord::Migration[5.1]
  def change
    create_table :history_items do |t|
      t.integer :user_id
      t.string :imdbid
      t.string :title

      t.timestamps
    end
  end
end
