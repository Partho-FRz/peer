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

router.post('/query/update', async (req, res) => {
  let der = new DER({
    der_id: req.body.idDER,
    der_name: req.body.nameDER,
    V_pcc: req.body.pccV,
    f_pcc: req.body.pccF,
    V_DER: req.body.derV,
    P_DER: req.body.derP,
    Q_DER: req.body.derQ,
    I_DER: req.body.derI,
  });

  console.log(req.body, 'request-----------------------');

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
