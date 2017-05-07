var express = require("express"),
router = express.Router(),
user = require("../models/user.js");

router.get("/", function(req, res) {
	user.find({}, function(err, data) {
		if (err) {
			res.send("error");
			return;
		}
		res.send(data);
	});

}).get("/:id", function(req, res) {
	var id = req.params.id;
	user.find({ _id: id }, function(err, data) {
		if (err) {
			res.send("error");
			return;
		}
		res.send(data[0]);
	});

}).post("/", function(req, res) {
	var obj = req.body;
	var model = new user(obj);
	model.save(function(err) {
		if (err) {
			res.send("error");
			return;
		}
		res.send("Usuario creado");
	});
	
}).put("/:id", function(req, res) {
	var id = req.params.id;
	var obj = req.body;

	user.findByIdAndUpdate(id, { name: obj.name, contactNo: obj.contactNo, address: obj.address }, 
		function(err) {
			if (err) {
				res.send("error");
				return;
			}
			res.send("Usuario actualizado");
		});

}).delete("/:id", function(req, res) {
	var id = req.params.id;
	user.findByIdAndRemove(id, function(err) {
		if (err) {
			res.send("error");
			return;
		}
		res.send("deleted");
	});
});

module.exports = router;