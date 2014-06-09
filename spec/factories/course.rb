FactoryGirl.define do
	factory :course do
		name "Some course"
		users { |course_user| [course_user.association(:user)] }
	end
end