const passport = require("passport");

module.exports = app => {
  // google passport
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  // facebook passport
  app.get("/auth/facebook", passport.authenticate("facebook"));

  app.get("/auth/facebook/callback", passport.authenticate("facebook"));

  // returning user
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
