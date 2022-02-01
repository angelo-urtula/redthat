# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all


User.create(:name => "Angelo", :email => "random@yahoo.com", :hobbies => "watch tv")
User.create(:name => "Angelo2", :email => "random2@yahoo.com", :hobbies => "watch tv2")

Post.create(:user_id => 3, :title => "I like to eat", :content => "Hi, my name is Angelo and I like to eat food")