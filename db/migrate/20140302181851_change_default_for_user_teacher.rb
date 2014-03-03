class ChangeDefaultForUserTeacher < ActiveRecord::Migration
  def change
  	change_column :users, :teacher, :boolean, :default => false
  end
end
