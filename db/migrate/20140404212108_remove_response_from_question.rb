class RemoveResponseFromQuestion < ActiveRecord::Migration
  def change
  	remove_column :questions, :response, :text
  end
end
