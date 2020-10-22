const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const jsonexport = require('jsonexport');

const filePath = path.join('.', 'events-data.csv');

const getEvents = async () => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .on('error', (err) => {
                reject(err)
            })
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve(results);
            });
    })
};

const getEventsByLocation = async (location) => {
    return new Promise(((resolve, reject) => {
        const data = [];
        fs.createReadStream(filePath)
            .on('error', (err) => {
                reject(err)
            })

            .pipe(csv())
            .on('data', (row) => {
                if (location.toLowerCase() === row.Location.toLowerCase()) {
                    data.push(row);
                }
            })

            .on('end', () => {
                resolve(data)
            })
    }))
};

const getEventById = async (id) => {
    return new Promise(((resolve, reject) => {
        let data;
        fs.createReadStream(filePath)
            .on('error', (err) => {
                reject(err)
            })

            .pipe(csv())
            .on('data', (row) => {
                if (id.toString() === row.Id.toString()) {
                    data = row;
                    fs.createReadStream(filePath).close();
                }
            })

            .on('end', () => {
                resolve(data);
            })
    }))
};

const addEvent = async event => {
    const {Id, Title, Location, Date, Hour} = event;
    return new Promise((resolve, reject) => {
        fs.createWriteStream(filePath, {flags: 'a'})
            .on('error', (err) => {
                reject(err);
            })
            .on('finish', () => {
                resolve(event);
            })
            .write(`${Id},${Title},${Location},${Date},${Hour} \n`);
    });
};

const updateEvent = async event => {
    const {Id} = event;
    return new Promise(((resolve, reject) => {
        let data = [];
        fs.createReadStream(filePath)
            .on('error', (err) => {
                reject(err)
            })

            .pipe(csv())
            .on('data', (row) => {
                if (Id.toString() === row.Id.toString()) {
                    row = event;
                }
                data.push(row);
            })

            .on('end', () => {
                jsonexport(data, (err, csv) => {
                    if (err) return console.error(err);
                    fs.writeFile(filePath, csv, {flag: 'w'}, (error => {
                        console.log(error)
                    }));
                });
                resolve(data);
            })
    }))
};

module.exports.getEvents = getEvents;
module.exports.getEventsByLocation = getEventsByLocation;
module.exports.getEventById = getEventById;
module.exports.addEvent = addEvent;
module.exports.updateEvent = updateEvent;
