var db_string = 'mongodb://127.0.0.1/appteste';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar banco'));

db.once('open', function(){
	var userSchema = mongoose.Schema({
		fullname: String,
		email: String,
		password: String,
		created_at: Date
	});

	exports.User = mongoose.model('User', userSchema);

	var characterSchema = mongoose.Schema({
		name: String,
		level: Number,
		stamina: Number,
		vocation: String,
		
	});

	exports.Character = mongoose.model('Character', characterSchema);

});

// 	var characterSchema = mongoose.Schema({
// 		name: String,
// 		level: Number,
// 		stamina: Number,
// 		vocation: String,
// 		balance: Number,
// 		equipments: {
// 			name: String,
// 			value: Number,
// 			type: String 
// 		}
// 	});

// 	exports.Character = mongoose.model('Character', characterSchema);

// });

