import express, { Application, Express } from 'express'
import config from './server/config'


let app: Application = config(express())

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`)
})