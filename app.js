var app = require('./app_config.js');


var userController = require('./controller/userController.js');
var characterController = require('./controller/characterCtrl.js');


var validator = require('validator');

var itens = [
	{description: "Água", price: 4},
	{description: "Coca-Cola", price: 5},
	{description: "Cerveja", price: 7},
	{description: "Vinho", price: 12},
	{description: "Café", price: 4}
];


app.get('/itens', function (req, res) {
	//res.status(500).end();
	
	userController.list(function(resp){
		res.json(resp);
	});



	//res.json(itens);
});

app.get('/itens/:id', function (req, res) {

	var id = validator.trim(validator.escape(req.param('id')));
	userController.user(id, function(resp){
		res.json(resp);

	});


	//res.status(500).end();
	// res.json(itens);
});


app.post('/itens', function (req, res) {

	var fullname = validator.trim(validator.escape(req.param('fullname')));
	var email = validator.trim(validator.escape(req.param('email')));
	var password = validator.trim(validator.escape(req.param('password')));
	
	userController.save(fullname, email, password, function(resp){
		res.json(resp);
	});


	//res.end("post")
	//itens.push(item);
	//res.end();
});


app.put('/itens', function (req, res) {
		
	var id = validator.trim(validator.escape(req.param('id')));
	var fullname = validator.trim(validator.escape(req.param('fullname')));
	var email = validator.trim(validator.escape(req.param('email')));
	var password = validator.trim(validator.escape(req.param('password')));
	
	userController.update(id, fullname, email, password, function(resp){
		res.json(resp);

	});

});

app.delete('/itens/:id', function (req, res) {

	var id = validator.trim(validator.escape(req.param('id')));
	
		userController.delete(id, function(resp){
			res.json(resp);

		});


	//res.status(500).end();
	// res.json(itens);
});


app.get('/characters', function (req, res) {
	//res.status(500).end();
	
	characterController.list(function(resp){
		res.json(resp);
	});



	//res.json(itens);
});

app.post('/characters', function (req, res) {

	var name = validator.trim(validator.escape(req.param('name')));
	var level = validator.trim(validator.escape(req.param('level')));
	var stamina = validator.trim(validator.escape(req.param('stamina')));
	var vocation = validator.trim(validator.escape(req.param('vocation')));

	characterController.save(name, level, stamina, vocation, function(resp){
		res.json(resp);
	});


	//res.end("post")
	//itens.push(item);
	//res.end();
});




