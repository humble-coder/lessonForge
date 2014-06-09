# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :response do
  	content "Some Response"
    users { |response_user| [response_user.association(:user)] }
    lesson
  end
end
