require('dotenv').config() //obsolete?

const PORT = process.env.PORT || 9000

const server = require("./api/server")

server.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`)
})