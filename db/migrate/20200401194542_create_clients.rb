class CreateClients < ActiveRecord::Migration[5.2]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :lastname
      t.string :lastnamem
      t.string :age
      t.string :phone
      t.string :street
      t.string :colony
      t.string :housenumber
      t.string :town

      t.timestamps
    end
  end
end
