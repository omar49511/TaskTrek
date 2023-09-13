import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";

const GOOGLE_CLIENT_ID =
  "499003248594-ga27o291kd7hrqvnpu8c6cep41hpihkd.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://www.example.com/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      //   const user = {
      //     username: profile.displayName,
      //     avatar: profile.photos[0].value,
      //   };
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
