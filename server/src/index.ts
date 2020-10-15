import express, { Application, Express } from 'express'

let app: Application = express()

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`)
})