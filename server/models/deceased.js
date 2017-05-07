var mongoose = require("mongoose"),
Schema = mongoose.Schema,
objectId = mongoose.Schema.ObjectId;

var deceasedSchema = new Schema({
	_id: { type: objectId, auto: true },
	dni: { type: String, required: true },
	firstName: { type: String, required: true },
	paternalLastName: { type: String, required: true },
	maternalLastName: { type: String, required: true },
	birthDate: { type: String, required: true },
	nationality: { type: String, required: true },
	city: { type: String, required: true },
	status: { type: String, required: true }
}, {
	versionKey: false
});

var deceased = mongoose.model('deceaseds', deceasedSchema);

module.exports = deceased;