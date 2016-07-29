var db = require('../db_config.js');

exports.list = function(callback){

	db.Character.find({}, function(error, characters) {

		if(error) {

			callback({error: 'Não foi possivel retornar os usuarios'});
		} else {

			callback(characters);
		}
	});
};


exports.character = function(id, callback) {

	db.Character.findById(id, function(error, character) {

		if(error) {

			callback({error: 'Não foi possivel retornar o usuario'});
		} else {

			callback(character);
		}
	});
};


exports.save = function(name, level, stamina, vocation, callback){

	new db.Character({

		'name': name,
		'level': level,
		'stamina': stamina,
		'vocation': vocation
	}).save(function(error, character) {

		if(error) {

			callback({error: 'Não foi possivel salvar o usuario'});
		} else {

			callback(character);
		}
	});
};


// exports.update = function(id, fullname, email, password, callback) {

// 	db.Character.findById(id, function(error, user) {

// 		if(fullname) {

// 			user.fullname = fullname;
// 		}

// 		if(email) {

// 			user.email = email;
// 		}

// 		if(password) {

// 			user.password = password;
// 		}

// 		user.save(function(error, user) {

// 			if(error) {

// 				callback({error: 'Não foi possivel salvar o usuario'});
// 			} else {

// 				callback(user);
// 			}
// 		});
// 	});
// };


// exports.delete = function(id, callback) {

// 	db.Character.findById(id, function(error, user) {

// 		if(error) {

// 			callback({error: 'Não foi possivel retornar o usuario'});
// 		} else {

// 			user.remove(function(error) {

// 				if(!error) {

// 					callback({response: 'Usuário excluido com sucesso'});
// 				}
// 			});
// 		}
// 	});
	
// };