class AddLessonToResponse < ActiveRecord::Migration
  def change
  	add_column :responses, :lesson_id, :integer
  end
end
