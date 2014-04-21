class AddFeedbackToQuestion < ActiveRecord::Migration
  def change
  	add_column :questions, :feedback, :text
  end
end
