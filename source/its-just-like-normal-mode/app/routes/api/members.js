const express = require("express");
const router = express.Router();
const members = require("../../../Members");

//  Get All Members
router.get("/", (req, res) => {
  res.json(members);
});

//  Create member
router.post("/", (req, res) => {
    const newMember = {};
    
    res.send(req.body);
})

//  Get Single Member
router.get("/:id", (req, res) => {
  //  Check if a member exists
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});




module.exports = router;