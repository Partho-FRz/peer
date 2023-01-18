const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { DER, DER_schema } = require('../models/der');

router.get('/QueryAllAssets', async (req, res) => {
  console.log('Request from Peer 0 initialized');
  data = await DER.find();
  // console.log(data);
  res.send(data);
});

router.get('/query/:asset_id', async (req, res) => {
  data = await DER.findOne({ id: req.params.asset_id });
  res.send(data);
});

router.post('/query/createasset', async (req, res) => {
  let der = new DER({
    id: req.body.id,
    der_name: req.body.der_name,
    V_pcc: req.body.V_pcc,
    f_pcc: req.body.f_pcc,
    V_DER: req.body.V_DER,
    P_DER: req.body.P_DER,
    Q_DER: req.body.Q_DER,
    I_DER: req.body.I_DER,
  });
  try {
    der = await der.save();
    console.log(der);
    res.send(der);
  } catch (error) {
    console.log(error.message);
    res.status(404).json(error.message);
  }
});

module.exports = router;
