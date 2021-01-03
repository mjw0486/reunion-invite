const express = require('express');
const path = require('path');
const db = require('../db');
const bodyParser = require('body-parser');
const { v4: uuidV4 } = require('uuid');
const app = express();
var cors = require('cors');
const mailGunAPI = require('../mailgun.js');
const mailgun = require('mailgun-js');
var history = require('connect-history-api-fallback');

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(history({
	verbose: true,
}));

app.use(cors({
  origin: 'http://localhost:3002'
}));

// app.get('/newroom/:room', function(req, res) {
// 	console.log('req.body:', req.body);
// 	res.redirect(`http://localhost:3002/${roomName}--${req.params.room}`);
// })

app.get('/*', function (req, res) {
  res.sendFile(path.join('/Users/michaelwetterauer/Desktop/HR49/Hack-Reactor/seniorWork/MVP/reunion/public/', 'index.html'));
});

app.post('/emailInvites', (req, res) => {
	// 	console.log('???');
	// 	console.log('emailInvites!!');
		const DOMAIN = 'sandbox27644a7e530b40b8bb9c2e782ee8fd58.mailgun.org'
		const mg = mailgun({apiKey: mailGunAPI, domain: DOMAIN});
	// 	console.log('req.body: ', req.body);
		const inviteList = Object.values(req.body.inviteList);
		const email = req.body.email;
		const url = req.body.url
		const ROOM_ID = uuidV4();
		const roomName = req.body.roomName;
	// 	// console.log('mailgun');

	  const data = {
	    from: email,
	    to: `${inviteList.map((invite, index) => {return invite;})}`,
	    subject: 'Reunion',
			text: 'Reunion',
			html: `<a href="${url}${roomName}--${ROOM_ID}">Come and join me in ${roomName}</a>`
		};
	// 	console.log('data: ', data);

	  mg.messages().send(data, function (error, body) {
	// 		console.log('body: ', body);
	// 		console.log('error: ', error);
		});
		res.send(ROOM_ID);
	})


const port = 3000;
app.listen(port, () => {
	console.log(`Server connected at http://localhost:${port}`);
});
