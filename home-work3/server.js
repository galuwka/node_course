const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const {
    getEvents,
    getEventsByLocation,
    getEventById,
    addEvent,
    updateEvent
} = require('./utils');

app.use(bodyParser.json());

app.get('/events-batch', async (req, res) => {
    const events = await getEvents();
    res.json(events);
});

app.get('/events', async (req, res) => {
    const {location} = req.query;

    if (!location) {
        return res.sendStatus(404);
    }
    res.json(await getEventsByLocation(location));

});

app.get('/events/:eventId', async (req, res) => {
    const {eventId} = req.params;
    const event = await getEventById(eventId);

    if (!event) {
        return res.sendStatus(404);
    }

    res.json(event);
});

app.put('/events/:eventId', async (req, res) => {
    const {eventId} = req.params;
    const event = await getEventById(eventId);
    if (!event) {
        return res.sendStatus(404);
    }
    const newEvent = {...event, ...req.body};
    await updateEvent(newEvent);
    res.sendStatus(200);
});

app.post('/events', async (req, res) => {
    await addEvent(req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`server start at port ${PORT}`);
});
