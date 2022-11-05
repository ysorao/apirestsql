"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _info = require("../controllers/info.controllers");
var router = (0, _express.Router)();
router.get('/info', _info.getInfo);
router.get('/infoMD/:id', _info.getInfoMDById);
router.get('/infoHabeas', _info.getInfoHabeas);
router.get('/infoHabeasMenor', _info.getInfoHabeasMenor);
router.post('/createHabeas', _info.createHabeas);
router.post('/createHabeasMenor', _info.createHabeasMenor);
router.post('/createInfo', _info.createInfo);
router.put('/updateHabeasMenor/:id', _info.updateHabeasMenor);
var _default = router;
exports["default"] = _default;