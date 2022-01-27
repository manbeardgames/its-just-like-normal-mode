const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    const data = {}
    data.meta = request.app.get("meta");
    data.meta.url = `${request.protocol}://${request.get('Host')}${request.originalUrl}`

    response.render('index', data);
});

module.exports = router;