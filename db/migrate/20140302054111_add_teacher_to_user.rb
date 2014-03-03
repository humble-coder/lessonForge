class AddTeacherToUser < ActiveRecord::Migration
  def change
    add_column :users, :teacher, :boolean
  end
end
