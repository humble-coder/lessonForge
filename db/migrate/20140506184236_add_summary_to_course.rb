class AddSummaryToCourse < ActiveRecord::Migration
  def change
    add_column :courses, :summary, :text
  end
end
