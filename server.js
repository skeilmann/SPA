const express = require("express");
const path = require("path");

const path = express();

appendFile.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
});

appendFile.listen(process.env.PORT || 5060, () => console.log("server runining"));