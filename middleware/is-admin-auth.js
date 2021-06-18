module.exports = (req, res, next) => {
  console.log(req.session.user.isAdmin);
  if (!req.session.user.isAdmin) {
    return res.redirect("/login");
  }
  next();
};
