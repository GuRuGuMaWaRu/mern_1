const passport = require("passport");

module.exports = app => {
  // google passport
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  // facebook passport
  app.get("/auth/facebook", passport.authenticate("facebook"));

  app.get("/auth/facebook/callback", passport.authenticate("facebook"));

  // other
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user); // will be undefined, lets user know that logout is successful
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
