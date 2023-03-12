const express = require("express");
const {
  signup,
  login,
  refreshToken,
  logout,
} = require("../../../../services/admin.services.js");
const router = express.Router();
const authMid = require("../../../middlewares/auth.middleware.js");

router.post("/signup", async (req, res, next) => {
  try {
    const resault = await signup(req);
    return res.send(resault);
  } catch (error) {
    return next(error);
  }
});
router.post("/login", async (req, res, next) => {
  try {
    const resault = await login(req);
    return res.send(resault);
  } catch (error) {
    return next(error);
  }
});
router.post("/refreshToken", async (req, res, next) => {
  try {
    const resault = await refreshToken(req);
    return res.send(resault);
  } catch (error) {
    return next(error);
  }
});

router.post("/logout", async (req, res, next) => {
  try {
    const resault = await logout(req);
    return res.send(resault);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;