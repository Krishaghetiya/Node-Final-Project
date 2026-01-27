let isLoggedIn = false;

const loginUser = () => {
  isLoggedIn = true;
};

const logoutUser = () => {
  isLoggedIn = false;
};

const isAuth = (req, res, next) => {
  if (isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = {
  isAuth,
  loginUser,
  logoutUser
};
