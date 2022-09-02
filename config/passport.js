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

        User.findOne({googleId:profile.id})
        .then(async function(user){
            if(user) return cb(null, user);
            try{ //all this value is from google
                user = await User.create({
                    name : profile.displayName, //displayName is instead the documenttion within GoogleStrategy
                    googleId : profile.id,
                    email: profile.emails[0].value, //we use the index[0] because its teh first default email
                    avatar: profile.photos[0].value
                });
                return cb(null, user); 
            }catch(error){
                return cb(error);
            }
        }) 
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