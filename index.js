const express = require("express")

const app = express()

const port = 3000

app.get("/", (req, res) => {
    var a = 1
    var b = 3

    return res.send(String(a + b))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
