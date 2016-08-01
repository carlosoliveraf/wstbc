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


exports.update = function(id, name, level, stamina, vocation, callback) {

	db.Character.findById(id, function(error, character) {

		if(name) {

			character.name = name;
		}

		if(level) {

			character.level = level;
		}

		if(stamina) {

			character.stamina = stamina;
		}

		if(vocation) {

			character.vocation = vocation;
		}

		character.save(function(error, character) {

			if(error) {

				callback({error: 'Não foi possivel salvar o usuario'});
			} else {

				callback(character);
			}
		});
	});
};


exports.delete = function(id, callback) {

	db.Character.findById(id, function(error, character) {

		if(error) {
			console.log(error);
			callback({error: 'Não foi possivel retornar o usuario'});
		} else {

			character.remove(function(error) {

				if(!error) {

					callback({response: 'Usuário excluido com sucesso'});
				}
			});
		}
	});
	
};



