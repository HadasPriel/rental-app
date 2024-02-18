import Axios from 'axios'


var axios = Axios.create({
	withCredentials: false
})

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3030/api/'




export const rentalService = {
	query,
	add,
	remove,
	getFields
}


async function query() {
	try {
		const res = await axios.get(`${BASE_URL}rental`)
		return res.data
	} catch (err) {
		console.log(`Had Issues GETing to the backend, query rentals`)
		console.log(err)
		throw err
	}
}


async function remove(rentalId) {
	try {
		const res = await axios.delete(`${BASE_URL}rental/${rentalId}`)
		return res.data
	} catch (err) {
		console.log(`Had Issues DELETEing to the backend, remove rental`)
		console.log(err)
		throw err
	}
}

async function add(rental) {
	try {

		var { businessoperator, street, streetnumber, geo_local_area, lat, long, totalunits, totaloutstanding, detailurl } = rental
		var rentalToAdd = {
			datasetid: "rental-standards-current-issues",
			recordid: _makeId(),
			fields: {
				totalunits,
				businessoperator,
				detailurl,
				street,
				geom: {
					type: "Point",
					coordinates: [lat, long]
				},
				streetnumber,
				totaloutstanding,
				geo_local_area
			},
			record_timestamp: Date.now()
		}

		const res = await axios.post(`${BASE_URL}rental`, rentalToAdd)
		return res.data
	} catch (err) {
		console.log(`Had Issues POSTing to the backend, remove rental`)
		console.log(err)
		throw err
	}
}


function getFields() {

	return [
		{ txt: 'Business Operator', span: 1 },
		{ txt: 'Address', span: 1 },
		{ txt: 'Coordinates', span: 3 },
		{ txt: 'Units', span: 1 },
		{ txt: 'Standing', span: 1 },
		{ txt: 'Links', span: 1 },
		{ txt: 'Actions', span: 1 }
	]
}




function _makeId(length = 5) {
	var txt = '';
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (var i = 0; i < length; i++) {
		txt += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return txt;
}