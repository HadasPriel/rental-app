
import { storageService } from './async-storage.service.js'


const STORAGE_KEY = 'rental'

export const rentalService = {
	query,
	add,
	remove,
	getFields
}


async function query() {
	return await storageService.query(STORAGE_KEY)
}


async function remove(rentalId) {
	return await storageService.remove(STORAGE_KEY, rentalId)
}

async function add(rental) {
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
	return await storageService.post(STORAGE_KEY, rentalToAdd)
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