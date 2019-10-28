# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
# puts "creating users"

# seedUser = User.create!(
#     email: 'velisjoel@gmail.com',
#     password: 123456,
#     first_name: 'Joel',
#     last_name: 'Velis',
#     username: 'bigDaddy',
# )

# seedProfile = Profile.create!(
#     caption: 'software engineer',
#     followers: ['karla', 'carlos'],
#     following: ['karla', 'carlos'],
#     user_id: 1
# )

# seedPost = Post.create!(
#     photos: [],
#     caption: 'fun day nowhere',
#     user_id: 1
# )

Post.destroy_all
Profile.destroy_all
User.destroy_all