# Project-3 : Random Local Bar Generator

### Authors
- Andres Maza
- Sky Xu
- Thomas Standing
- Jeremy Ross

### Technologies Used

This project was the perfect chance to implement Node.js and Express on the backend, with React, HTML/CSS and Javascript on the front end. We used a few different middlewares and different dependencies including but not limited to:

    "bcrypt": "^1.0.2",
    "body-parser": "^1.17.1",
    "cors": "^2.8.1",
    "dotenv": "^4.0.0",
    "ejs": "^2.5.6",
    "express": "^4.15.2",
    "express-jwt": "^5.1.0",
    "express-session": "^1.15.1",
    "jsonwebtoken": "^7.3.0",
    "jwt-express": "^1.1.0",
    "method-override": "^2.3.7",
    "morgan": "^1.8.1",
    "node-fetch": "^1.6.3",
    "pg-promise": "^5.6.4",
    "yelp-fusion": "^1.0.3"


A simple npm install upon installation should allow any developer access.     

### General Approach

Our approach was simple, create a simplistic, functional real world app that would perform a simple search depending on the users geo location and provide a effortless user experience with a usable interface. We would have two tables for our users and bars, and our approach to our [Dashboard](http://imgur.com/2JvNoCC) and our homepage [Homepage](http://imgur.com/ZGuWjD2) would be just as simple. ![ERD](http://i.imgur.com/2psdTxd.png)

![Yelp Fusion API](http://cdn.ttgtmedia.com/ITKE/uploads/blogs.dir/317/files/2016/09/1yelpoewifiuwgf.jpg)

We decided to use [Yelp's Fusion API](https://www.yelp.com/developers/documentation/v3/business_search) which gave a robust and extensive json response in which we would be able to massage to get what we needed for our application.

Once we had our API functionality built out and were able to test it successfully using postman, we were able to complete our front end with React and create our components that would interact with our API. Once we were able to integrate the front end with the back end.

### User Stories

- Users can search for a single random bar within a 500 meter radius.
- Users can sign up and login to save their favorite bars to their own account/dashboard.
- Users not satisfied with their random encounter can also select another watering hole by clicking a "search more" button.
- Users can delete their saved bars in their dashboard.

### Wireframes

Home Page:
![Homepage](https://raw.githubusercontent.com/tomisstanding/Project-3/master/wireframes/home.jpg)

User Dashboard:
![Dashboard](https://raw.githubusercontent.com/tomisstanding/Project-3/master/wireframes/dashboard.jpg)

### Unsolved issues

* Fetch requests do not work on mobile

* Our log in request still goes through successfully through the .then() even on 401 and displays an empty dashboard.

* There were additional features we would like to have added such as leaving comments on each bar and look forward to working further on this in the future.

* Huge thanks and credit to Dan Pease and Irwin Tsay who both helped us to pass the JSON Web Token properly once a user is created and logs in and on restricted routes.
