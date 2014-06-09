class RemoveUserIdFromCourse < ActiveRecord::Migration
  def change
  	remove_column :courses, :user_id, :integer
  end
end
