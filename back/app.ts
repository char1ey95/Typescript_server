import express, { Express } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { router } from "./routes"
import config from 'config'

class App {
    public express: Express
    private port: number | string
    constructor() {
        this.express = express()
        this.port = config.port
        this.middleWares()
        this.routes()
        this.listen(this.port)
    }

    public middleWares(): void {
        this.express.use(express.json())
        this.express.use(cors({ origin: true, credentials: true, }))
        this.express.use(cookieParser())
    }

    public routes(): void {
        this.express.use(router)
    }

    public listen(port: number | string): void {
        this.express.listen(port, () => {
            console.log(`SERVER_PORT:${port} start`)
        })
    }
}

new App()