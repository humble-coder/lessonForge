# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :api_key do
    user
    access_token SecureRandom.hex
    scope 'session'
    created_at "2014-02-27 12:12:18"

    trait :with_api_scope do
    	scope 'api'
    end
  end
end
