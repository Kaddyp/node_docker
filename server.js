const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Node Js Docker deployment in Dockerhub and Ec2"
    })
})

app.listen(8080, () => {
    console.log('server running on port 8080')
})