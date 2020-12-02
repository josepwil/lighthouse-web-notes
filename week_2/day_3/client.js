const net = require('net');
const stdin = process.stdin;

stdin.setEncoding("utf8");
// resume begins reading from stdin
stdin.resume();

const client = net.createConnection({
  host: "0.tcp.ngrok.io",
  port: 10969
});

client.setEncoding('utf8');

client.on('connect', () => {
  console.log('I connected to the server');
  client.write('hi');
});

// receive data from server
client.on('data', (data) => {
  console.log('-> ', data);
})

// when the user types things we want to receive it and write it to the server
stdin.on('data', (data) => {
    client.write(data);
})
