const express= require('express');
const mongoose = require('mongoose');
const port = process.env.PORT||3000;
const app = express();
app.get('/' (req, rec)={
		res.send('Hola');
});
app.listen(port);