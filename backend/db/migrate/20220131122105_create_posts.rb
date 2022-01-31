class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.references :user, null: false, foreign_key: { on_delete: :cascade }
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
