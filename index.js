const express = require ("express");

const toto = "tata"; // let au lieu const

if (toto === "tata") { // == au lieu de ===
    // do something
    console.log("Hello world"); // INDENTATION !!!!!
}

const app = express();

app.listen(3000, () => {
    console.log("SERVER STARTED...");
});

app.use(express.static("./public"));

app.get("/api/user", (req, res) => {
    res.send ({
        name: "Titi",
        verified: true,
        birthdate: new Date(2019, 3, 17), // AT
        friends: ["variant", "titi"],

    });
});