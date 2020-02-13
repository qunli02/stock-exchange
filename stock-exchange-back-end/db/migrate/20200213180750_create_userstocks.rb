class CreateUserstocks < ActiveRecord::Migration[5.2]
  def change
    create_table :userstocks do |t|
      t.belongs_to :stock
      t.belongs_to :user
      t.integer :amount
      t.integer :price
      t.timestamps
    end
  end
end
