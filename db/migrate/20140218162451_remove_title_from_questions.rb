class RemoveTitleFromQuestions < ActiveRecord::Migration
  def change
    remove_column :questions, :title, :string
  end
end
