var express = require("express"),
router = express.Router(),
deceased = require("../models/deceased.js");

router.get("/", function(req, res) {
	deceased.find({}, function(err, data) {
		if (err) {
			res.send(err);
			return;
		}
		res.send(data);
	});

}).get("/:id", function(req, res) {
	var id = req.params.id;
	deceased.find({ _id: id }, function(err, data) {
		if (err) {
			res.send(err);
			return;
		}
		res.send(data[0]);
	});

}).post("/", function(req, res) {
	var obj = req.body;
	console.log(obj);
	var model = new deceased(obj);
	model.save(function(err) {
		if (err) {
			res.send(err);
			return;
		}
		res.send("created");
	});

}).put("/:id", function(req, res) {
	var id = req.params.id;
	var obj = req.body;

	deceased.findByIdAndUpdate(id, { dni: obj.dni, firstName: obj.firstName, paternalLastName: obj.paternalLastName, 
		maternalLastName: obj.maternalLastName, birthDate: obj.birthDate, nationality: obj.nationality, 
		city: obj.city, status: obj.status }, 
		function(err) {
			if (err) {
				res.send(err);
				return;
			}
			res.send("updated");
		});

}).delete("/:id", function(req, res) {
	var id = req.params.id;
	deceased.findByIdAndRemove(id, function(err) {
		if (err) {
			res.send(err);
			return;
		}
		res.send("deleted");
	});
});

module.exports = router;