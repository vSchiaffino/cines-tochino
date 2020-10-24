import express, { Application, Express } from 'express'
import config from './server/config'
import colors from 'colors'

let app: Application = config(express())

app.listen(process.env.PORT, () => {
    console.log(colors.yellow(`[server] App listening on port ${process.env.PORT}`))
})