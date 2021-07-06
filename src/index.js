const express = require('express');
const app = express();
const port = process.env.PORT | 3000;
const subdomain = process.env.SUBDOMAIN;

app.get('/', (req, res) => {
    res.send('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Mama_instant_noodle_block.jpg/480px-Mama_instant_noodle_block.jpg"></img>');
});

async function createTunnel() {
    const localtunnel = require('localtunnel');
    const tunnel = await localtunnel({ port: port, subdomain: subdomain });
    if(tunnel.url.startsWith(subdomain + '.')) {
        console.log(`Tunnel established to ${tunnel.url}`);
    }
    else {
        console.log(`Subdomain ${subdomain} could not be aquired!`);
        process.exit(1);
    }
}

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
    if(subdomain != undefined) {
        createTunnel();
    }
});
