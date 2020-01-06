// Full Documentation - https://docs.turbo360.co
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID});
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID});
const router = vertex.router();

// const members = [
// 	{
// 		id: 1,
// 		name: 'PhongSn',
// 		team: 1
// 	},
// 	{
// 		id: 2,
// 		name: 'PhongLocal',
// 		team: 1
// 	},
// 	{
// 		id: 3,
// 		name: 'PhongCn',
// 		team: 2
// 	}
// ];

// const teams = [
// 	{
// 		id: 1,
// 		name: 'Team PhongSn'
// 	},
// 	{
// 		id: 2,
// 		name: 'Team STech Solution Team'
// 	}
// ];

// const db = {
// 	member: members,
// 	team: teams
// };

/*  This is a sample API route. */
// router.get('/:resource', function (request, response) {
// 	const resource = request.params.resource;
// 	const data = db[resource];
// 	if (data == null) {
// 		response.json({
// 			confirmation: 'failure',
// 			message: 'Invalid resource.'
// 		});	
// 		return;
// 	}
// 	response.json({
// 		confirmation: 'success',
// 		data
// 	});	
// });
const controllers = require('../controllers');

const Member = require('../models/Member');
const Team = require('../models/Team');

router.get('/:resource', function(request, response) {
	const resource = request.params.resource;
	const controller = controllers[resource];
	const filter = request.query;
	if (controller == null) {
		response.json({
			confirmation: 'failure',
			message: 'Invalid resource.'
		});
		return;
	}
	controller.get(filter).then(data => {
		response.json({
			confirmation: 'success',
			data
		});
	}).catch(err => {
		response.json({
			confirmation: 'failure',
			message: err.message
		});
	});
});

router.get('/:resource/:id', function(request, response) {
	const resource = request.params.resource;
	const id = request.params.id;
	const controller = controllers[resource];
	if (controller == null) {
		response.json({
			confirmation: 'failure',
			message: 'Invalid resource.'
		});
		return;
	}
	controller.getById(id).then(data => {
		response.json({
			confirmation: 'success',
			data
		});
	}).catch(err => {
		response.json({
			confirmation: 'failure',
			message: err.message
		});
	});
});

router.post('/:resource', function(request, response) {
	const resource = request.params.resource;
	const controller = controllers[resource];
	if (controller == null) {
		response.json({
			confirmation: 'failure',
			message: 'Invalid resource.'
		});
		return;
	}
	controller.post(request.body).then(data => {
		response.json({
			confirmation: 'success',
			data
		});
	}).catch(err => {
		response.json({
			confirmation: 'failure',
			message: err.message
		});
	});
});

router.put('/:resource/:id', function(request, response) {
	const resource = request.params.resource;
	const id = request.params.id;
	const controller = controllers[resource];
	if (controller == null) {
		response.json({
			confirmation: 'failure',
			message: 'Invalid resource.'
		});
		return;
	}
	controller.put(id, request.body).then(data => {
		response.json({
			confirmation: 'success',
			data
		});
	}).catch(err => {
		response.json({
			confirmation: 'failure',
			message: err.message
		});
	});
});

router.delete('/:resource/:id', function(request, response) {
	const resource = request.params.resource;
	const id = request.params.id;
	const controller = controllers[resource];
	if (controller == null) {
		response.json({
			confirmation: 'failure',
			message: 'Invalid resource.'
		});
		return;
	}
	controller.delete(id).then((data) => {
		response.json({
			confirmation: 'success',
			data
		});
	}).catch(err => {
		response.json({
			confirmation: 'failure',
			message: err.message
		});
	});
});

// router.get('/team', function(request, response) {
// 	Team.find(null).then(data => {
// 		response.json({
// 			confirmation: 'success',
// 			data
// 		});
// 	}).catch(err => {
// 		response.json({
// 			confirmation: 'failure',
// 			message: 'Fetch data error'
// 		});
// 	});
// });

// router.get('/member', function(request, response) {
// 	Member.find(null).then(data => {
// 		response.json({
// 			confirmation: 'success',
// 			data
// 		});
// 	}).catch(err => {
// 		response.json({
// 			confirmation: 'failure',
// 			message: 'Fetch data error'
// 		});
// 	});
// });

module.exports = router
