# node_course
Node.js Course

Clone repository
 
Install node.js v12 or above

Run npm install

Go to home-work3 folder `cd home-work3`

Run `node server.js` in command line

Usage: 

Get events-batch
` curl --request GET 'http://localhost:3000/events-batch' \
 --header 'Content-Type: application/json' \
`
Response: 
`[{"Id":"1","Title":"Title 1","Location":"Odessa","Date":"2020-10-20","Hour":"08:00"},{"Id":"2","Title":"Title 2","Location":"Kyiv","Date":"2020-10-21","Hour":"08:05"}]`

Get events by location
` curl --request GET 'http://localhost:3000/events?location=odessa' \
 --header 'Content-Type: application/json' \`

Response:
`[{"Id":"1","Title":"Title 1","Location":"Odessa","Date":"2020-10-20","Hour":"08:00"}]`

Get events by Id
` curl --request GET 'http://localhost:3000/events/1' \
 --header 'Content-Type: application/json' \`

Response:
`[{"Id":"1","Title":"Title 1","Location":"Odessa","Date":"2020-10-20","Hour":"08:00"}]`

Update event by Id
` curl --request PUT 'http://localhost:3000/events/2' \
 --header 'Content-Type: application/json' \
 --data-raw '{"Id": 2, "Title": "New title", "Location": "Sumy", "Date": "2021-01-01", "Hour": "14:00"}'
`

Response:
`Status 200`

Create event
` curl --request POST 'http://localhost:3000/events' \
 --header 'Content-Type: application/json' \
 --data-raw '{"Id": 4, "Title": "New title 4", "Location": "Ternopil", "Date": "2021-01-01", "Hour": "14:00"}'
`

Response:
`Status 200`
