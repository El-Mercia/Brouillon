const express = require ("express");

const app = express();

app.listen(3000, () => {
	console.log("SERVER STARTED...");
});

app.get("/api/user", (req, res) => {
	res.send ({
		name: "Toto",
		verified: true,
		birthdate: new Date(2019, 03, 17),
		friends: [ "variant", "titi"],

	});
});

app.use(express.static('./public'));

app.get('/get_text', (req, res) => {
    res.send('hello world');
});
