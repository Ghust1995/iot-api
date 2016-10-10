To start running Mosca:

node ./Broker/main.js

To run the API - MQTT Subscriber:

node ./SampleClient/main.js

Make sure to have a mongo db set where the configuration says and set the configuration to the desired places

To run dummy clients do:

node ./Client/dummies/update.js [channel] [alias] [new-value]
node ./Client/dummies/create.js [channel] [alias]
