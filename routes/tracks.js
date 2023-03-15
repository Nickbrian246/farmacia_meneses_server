const express = require("express");
const { getItems, getItem, createItem } = require("../controllers/tracks");
const router = express.Router();
const {validationCreateItem} = require("../validator/tracks");
const {customHeader} = require("../middlewares/customHeader")

router.get("/", getItems);

router.post("/", validationCreateItem, createItem);


module.exports = router;