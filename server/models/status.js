var mongoose = require("mongoose"),
Schema = mongoose.Schema,
objectId = mongoose.Schema.ObjectId;

var statusSchema = new Schema({
	_id: { type: objectId, auto: true },
	label: { type: String, required: true },
	code: { type: String, required: true },
	parent: [{ type: String, ref: 'Status' }],
	subsequentStatuses: [{ type: String, ref: 'Status' }]
}, {
	versionKey: false
});

var status = mongoose.model('Status', statusSchema);

module.exports = status;
