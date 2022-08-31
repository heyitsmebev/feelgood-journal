const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');


passport.use(
    new GoogleStrategy(
      // Configuration object
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    }, function(accessToken, refreshToken, profile, cb){
        //google sends us 3 things: accessToken, refreshToken, profile
        //accessToken: google sends a token, user logs in 
        //refreshToken: means how long you are logged in before kicked out. expire
        //profile consist of google username..etc details 
        User.findOne({googleId:profile.id})
        //we take the googleId to check if you exist in database
        //this googleId comes from the profile object that we get from google 
        //proifle.id has the first,name,photo,email,id...etc this comes from google 
        //here we are checking google's id in our current database
        //since the user does exist, we need to create a session. 
        //so if it's a user, we jump to passport.serializeUser..etc 
        //a request that we pass throughout our website (cookie) which goes to serialize and deserialize
        .then(async function(user){
            if(user) return cb(null, user);
            try{ //all this value is from google
                user = await User.create({
                    name : profile.displayName, //displayName is instead the documenttion within GoogleStrategy
                    googleId : profile.id,
                    email: profile.emails[0].value, //we use the index[0] because its teh first default email
                    avatar: profile.photos[0].value
                });
                return cb(null, user); //this callback function is null because it's set up within the Googlestrategy 
            }catch(error){
                return cb(error);
            }
        }) //a promise 
    }
    ));

  passport.serializeUser(function(user, cb) {
    cb(null, user._id);
  });

  passport.deserializeUser(function(userId, cb) {
    User.findById(userId).then(function(user) {
      cb(null, user);
    });
  });