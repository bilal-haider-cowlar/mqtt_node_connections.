const mqtt = require('mqtt')

const brokerUrl = 'mqtt://localhost:1883'
const topic = 'a'
const message = JSON.stringify({ purpose: "testing for mqtt app" })

const options = {
  clientId: 'cowlar',
  username: 'cowlar',
  password: 'cowlar'
};

const client = mqtt.connect(brokerUrl, options)

client.on('connect', () => {
  client.publish(topic, message, (err) => {
    if (err) {
      console.error('Error publishing message:', err)
    } else {
      console.log('NO error, Message was published')
    }
    client.end()
  })
})
