export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

function query(entityType, delay = 500) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    return new Promise(resolve => setTimeout(() => resolve(entities), delay))
}

function get(entityType, entityId) {
    return query(entityType).then(entities => {
        const entity = entities.find(entity => entity._id === entityId)
        if (!entity) throw new Error(`Get failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        return entity
    })
}

function post(entityType, newEntity) {
    newEntity = JSON.parse(JSON.stringify(newEntity))
    return query(entityType).then(entities => {
        entities.push(newEntity)
        _save(entityType, entities)
        return newEntity
    })
}

function put(entityType, updatedEntity) {
    updatedEntity = JSON.parse(JSON.stringify(updatedEntity))
    return query(entityType).then(entities => {
        const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
        if (idx < 0) throw new Error(`Update failed, cannot find entity with id: ${updatedEntity._id} in: ${entityType}`)
        entities.splice(idx, 1, updatedEntity)
        _save(entityType, entities)
        return updatedEntity
    })
}

function remove(entityType, entityId) {
    return query(entityType).then(entities => {
        const idx = entities.findIndex(entity => {
            return entity.recordid === entityId
        })
        if (idx < 0) throw new Error(`Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        entities.splice(idx, 1)
        _save(entityType, entities)
    })
}

// Private functions

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _postMany(entityType, entities) {

    localStorage.setItem('rental', JSON.stringify([
        {
            "datasetid": "rental-standards-current-issues",
            "recordid": "1ffb6f1fc2218495d3245eca303ff1f6d9dc9455",
            "fields": {
                "totalunits": 60,
                "businessoperator": "0707892 BC Ltd",
                "detailurl": "http://app.vancouver.ca/RPS_Net/Default.aspx?num=320&street=ABBOTT%20STREET",
                "street": "ABBOTT STREET",
                "geom": {
                    "type": "Point",
                    "coordinates": [
                        -123.10664756,
                        49.28261413
                    ]
                },
                "streetnumber": "320",
                "totaloutstanding": 1,
                "geo_local_area": "Downtown"
            },
            "record_timestamp": "2021-03-16T10:31:57.804Z"
        },
        {
            "datasetid": "rental-standards-current-issues",
            "recordid": "bf3490c9d50e31ea15132b237e75c3bdd9f301d7",
            "fields": {
                "totalunits": 71,
                "businessoperator": "Central City Foundation",
                "detailurl": "http://app.vancouver.ca/RPS_Net/Default.aspx?num=404&street=ABBOTT%20STREET",
                "street": "ABBOTT STREET",
                "geom": {
                    "type": "Point",
                    "coordinates": [
                        -123.10713559,
                        49.2816849
                    ]
                },
                "streetnumber": "404",
                "totaloutstanding": 3,
                "geo_local_area": "Downtown"
            },
            "record_timestamp": "2021-03-16T10:31:57.804Z"
        },
        {
            "datasetid": "rental-standards-current-issues",
            "recordid": "e2087589c455366f202fdc390e98eb149adc6e1d",
            "fields": {
                "totalunits": 64,
                "businessoperator": "Provincial Rental Housing Corporation",
                "detailurl": "http://app.vancouver.ca/RPS_Net/Default.aspx?num=210&street=ABBOTT%20STREET",
                "street": "ABBOTT STREET",
                "geom": {
                    "type": "Point",
                    "coordinates": [
                        -123.10628594,
                        49.28355627
                    ]
                },
                "streetnumber": "210",
                "totaloutstanding": 4,
                "geo_local_area": "Downtown"
            },
            "record_timestamp": "2021-03-16T10:31:57.804Z"
        },
        {
            "datasetid": "rental-standards-current-issues",
            "recordid": "0dbe57fb2838cf832ffd97b3beb03285e8e976bd",
            "fields": {
                "totalunits": 5,
                "businessoperator": "Lily Jang",
                "detailurl": "http://app.vancouver.ca/RPS_Net/Default.aspx?num=1785&street=ADANAC%20STREET",
                "street": "ADANAC STREET",
                "geom": {
                    "type": "Point",
                    "coordinates": [
                        -123.06878722,
                        49.27780288
                    ]
                },
                "streetnumber": "1785",
                "totaloutstanding": 1,
                "geo_local_area": "Grandview-Woodland"
            },
            "record_timestamp": "2021-03-16T10:31:57.804Z"
        },
        {
            "datasetid": "rental-standards-current-issues",
            "recordid": "454a3d2c55697780251ec8b8547d2a0db99bbeca",
            "fields": {
                "totalunits": 54,
                "businessoperator": "1811 Adanac Street Ltd",
                "detailurl": "http://app.vancouver.ca/RPS_Net/Default.aspx?num=1811&street=ADANAC%20STREET",
                "street": "ADANAC STREET",
                "geom": {
                    "type": "Point",
                    "coordinates": [
                        -123.06782699,
                        49.27778852
                    ]
                },
                "streetnumber": "1811",
                "totaloutstanding": 1,
                "geo_local_area": "Grandview-Woodland"
            },
            "record_timestamp": "2021-03-16T10:31:57.804Z"
        },
        {
            "datasetid": "rental-standards-current-issues",
            "recordid": "c9ba7eafff45c95140f0923963bd61314835856a",
            "fields": {
                "totalunits": 46,
                "businessoperator": "Entre Nous Femmes Housing Society",
                "detailurl": "http://app.vancouver.ca/RPS_Net/Default.aspx?num=1656&street=ADANAC%20STREET",
                "street": "ADANAC STREET",
                "geom": {
                    "type": "Point",
                    "coordinates": [
                        -123.07200187,
                        49.27733406
                    ]
                },
                "streetnumber": "1656",
                "totaloutstanding": 2,
                "geo_local_area": "Grandview-Woodland"
            },
            "record_timestamp": "2021-03-16T10:31:57.804Z"
        },
        {
            "datasetid": "rental-standards-current-issues",
            "recordid": "84cbcbdcc8d5a5dee7a6aa08e6452c549d112631",
            "fields": {
                "totalunits": 147,
                "businessoperator": "KBK No 51 Ventures Ltd",
                "detailurl": "http://app.vancouver.ca/RPS_Net/Default.aspx?num=1128&street=ALBERNI%20STREET",
                "street": "ALBERNI STREET",
                "geom": {
                    "type": "Point",
                    "coordinates": [
                        -123.12497306,
                        49.28570614
                    ]
                },
                "streetnumber": "1128",
                "totaloutstanding": 2,
                "geo_local_area": "West End"
            },
            "record_timestamp": "2021-03-16T10:31:57.804Z"
        },
        {
            "datasetid": "rental-standards-current-issues",
            "recordid": "642c471ca24a6edaeae6a41b067577da0795e3e4",
            "fields": {
                "totalunits": 12,
                "businessoperator": "2224 Alberta Holdings Inc",
                "detailurl": "http://app.vancouver.ca/RPS_Net/Default.aspx?num=2224&street=ALBERTA%20STREET",
                "street": "ALBERTA STREET",
                "geom": {
                    "type": "Point",
                    "coordinates": [
                        -123.11062231,
                        49.26541866
                    ]
                },
                "streetnumber": "2224",
                "totaloutstanding": 3,
                "geo_local_area": "Mount Pleasant"
            },
            "record_timestamp": "2021-03-16T10:31:57.804Z"
        },
        {
            "datasetid": "rental-standards-current-issues",
            "recordid": "10fd6cd66bdfd8d9dc2cd1f012d794d017a6f67f",
            "fields": {
                "totalunits": 5,
                "businessoperator": "Pip Peri Pembo Management Ltd",
                "detailurl": "http://app.vancouver.ca/RPS_Net/Default.aspx?num=2924&street=ALBERTA%20STREET",
                "street": "ALBERTA STREET",
                "geom": {
                    "type": "Point",
                    "coordinates": [
                        -123.11077059,
                        49.25894741
                    ]
                },
                "streetnumber": "2924",
                "totaloutstanding": 1,
                "geo_local_area": "Mount Pleasant"
            },
            "record_timestamp": "2021-03-16T10:31:57.804Z"
        },
        {
            "datasetid": "rental-standards-current-issues",
            "recordid": "1e132550dee5aac0ad7d3ff8e8e92d5f57d99c28",
            "fields": {
                "totalunits": 30,
                "businessoperator": "City of Vancouver",
                "detailurl": "http://app.vancouver.ca/RPS_Net/Default.aspx?num=58&street=ALEXANDER%20STREET",
                "street": "ALEXANDER STREET",
                "geom": {
                    "type": "Point",
                    "coordinates": [
                        -123.1027163,
                        49.28344261
                    ]
                },
                "streetnumber": "58",
                "totaloutstanding": 1,
                "geo_local_area": "Downtown"
            },
            "record_timestamp": "2021-03-16T10:31:57.804Z"
        }
    ]))
}


