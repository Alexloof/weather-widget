import * as express from 'express'
import axios from 'axios'
import bodyParser = require('body-parser')
import * as helmet from 'helmet'
import * as compression from 'compression'
import * as cors from 'cors'

const app = express()
const port = 3001

const API_KEY = '166d00e26d3ff2c6149e89feccc5c59a'

app.use(bodyParser.json())
app.use(compression())
app.use(helmet())
app.use(cors())

app.get('/weather/:city', async ({ params: { city } }, res) => {
  try {
    const weatherInformation = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},dk&appid=${API_KEY}`
    )
    res.send(weatherInformation.data)
  } catch (error) {
    res.status(500).json({ error: error.toString() })
  }
})

app.listen(port, () =>
  console.log(`Weather api app listening on port ${port}!`)
)
