const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.render('index',
        {
            meta: {
                descripdtion: "This is a fake description"
            }
        });
});

module.exports = router;