const awilix = require('awilix')
const { UserController } = require('../api/controllers')
const StartUp = require('./startup')
const Server = require("./server")
const Routes = require("../api/routes")
const UserRoutes = require("../api/routes/user.routes")
const { config } = require('dotenv')
const { asValue, asFunction, asClass } = awilix
const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
})

container.register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton()
})
.register({
    UserController: asClass(UserController).singleton()
})
.register({
    config: asValue(config)
})
.register({
    UserRoutes: asFunction(UserRoutes).singleton()
})
module.exports = container
