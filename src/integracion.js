const express = require('express')
const app = express();
const bodyParser = require('body-parser')
// SDK de Mercado Pago
const mercadopago = require('mercadopago');
const path = require('path');

//middleware
app.use(bodyParser.urlencoded({ extended: false }));

//TARJETAS
const recetarios = [
	{
		"id": 1,
		"titulo": "Recetas dulces",
		"imagen": './img/recetasDulces.jpeg',
		"precio": 500


	},
	{
		"id": 2,
		"titulo": "Recetas saladas",
		"imagen": './img/recSaladas1.jpeg',
		"precio": 500
	},

]

// Agrega credenciales
//ACA IRIA LA REAL
mercadopago.configure({
	access_token: "APP_USR-4156353893147073-060817-79fb32f7510503cec7c76a70cc6da56a-772344190"
});

app.post('/webhook', (req, res) => {
	console.log(req.body);

	return res.status(400).send('OK');
});

app.post('/checkout', (req, res) => {
	let receta = findReceta(req.body.id);

	if (receta == null) {
		res.redirect('error');
		return;
	}

	// Crea un objeto de preferencia
	let preference = {
		items: [
			{
				title: receta.titulo,
				unit_price: parseInt(receta.precio),
				quantity: 1,
				picture_url: receta.imagen,
			}
		],
		back_urls: {
			success: "http://localhost:3001/success",
			pending: "http://localhost:3001/pending",
			failure: "http://localhost:3001/failure",
		},
		//notification_url: "https://francoromaniello.com:2053/"
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.redirect(response.body.init_point)
		}).catch(function (error) {
			console.log(error);
		});
});

app.get('/style/style.css', (req, res) => {
	return res.sendFile(path.join(__dirname, '../public', 'style/style.css'));
});

app.get('/script/index.js', (req, res) => {
	return res.sendFile(path.join(__dirname, '../public', 'script/index.js'));
});

app.get('/script/script.js', (req, res) => {
	return res.sendFile(path.join(__dirname, '../public', 'script/script.js'));
});

app.get('/img/:image', (req, res) => {
	return res.sendFile(path.join(__dirname, '../public', 'img/' + req.params.image));
});

app.get('/*', (req, res) => {
	return res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

//SERVER
app.listen(3001, () => {
	console.log('server on port 3001')
})

function findReceta(id) {
	let element = null;

	recetarios.forEach(function (receta) {
		if (receta.id == id) {
			element = receta;
		}
	});

	return element;
}