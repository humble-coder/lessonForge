class RemoveTypeFromQuestion < ActiveRecord::Migration
  def change
  	remove_column :questions, :type, :string
  end
end
