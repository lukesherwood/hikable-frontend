# Hikable - Your favorite hike is just around the corner
### A directory of hikes that you can learn about and save for later
The broad idea is an app like Yelp but for hiking tracks. Particularly relevant for New Zealand as there is a functioning public API which contains almost all hiking tracks in the country and their own website is rather poor and hard to navigate.

Backend is built with Ruby on Rails, users are securely managed with Devise and JWT tokens are used to manage user sessions. Database and server are with PostgreSQL.

Frontend is built with React-JS and state is managed with Redux. Styling with Bootstrap and custom CSS.

## Walk-through
(https://www.youtube.com/watch?v=1pg9a1te-74)

## Get Started
Make sure you've cloned both the front-end (https://github.com/lukesherwood/hikable-frontend) and back-end (https://github.com/lukesherwood/hikable-api)

Navigate to the API directory and 'bundle install'

Set up the database with 'rails db:create', 'rails db:migrate' and then run the seed data 'rails db:seed'

Start the 'rails server'

Navigate to the Frontend directory in a separate terminal and run 'npm start'

You can then view the website in your browser at http://localhost:3000


## Future updates
 -  rework hike show page to work with array attributes.
 -  fix sign user out component to work with react router v6
 -  make lists protected by only created by user can see
-   improve home landing page and fix scroll horizontal issue
 -  filter functions need improvement  - ie work with multiple filters returning both rather than &&
 -  Add ability for user to add their own hikes to the database.
 -  Update to Bootstrap v5 ??
 -  fix footer links
 -  complete user profile page
 -  search function improvements, show on typing and then close once clicked, don't show input is required
