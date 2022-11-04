import express from 'express';
import config from './config'
import infoRoutes from './routes/info.routes'

const app = express();

//settings

app.set('port', config.port ) 
app.use(infoRoutes)

export default app