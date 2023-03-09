const express = require("express");
const routes = require("../routes");
const httpStatus = require("http-status-codes");
require("dotenv").config({ path: "../.env" });

const expressLoader = async (app) => {
  app.use(express.json());
  app.use("/api", routes());

  app.listen(process.env.PORT, () => {
    console.log(`on port ${process.env.PORT}`);
  });

  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err["status"] = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};
module.exports = expressLoader;