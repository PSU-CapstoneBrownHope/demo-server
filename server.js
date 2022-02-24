require('dotenv').config();
const express = require('express');
const airtable = require('airtable');
const app = express();
const port = process.env.PORT || 3000;
const airtableApiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.BASE_ID;
const base = new airtable({apiKey: airtableApiKey}).base(baseId);

//This is fake airtable data
const applicationsBank = [
  {
    appid: '12',
    user: 'fakeuser1',
    applicationStatus: 'Pending'
  },
  {
    appid: '13',
    user: 'fakeuser2',
    applicationStatus: 'Denied'
  },
  { 
    appid: '14',
    user: 'fakeuser3',
    applicationStatus: 'Approved'
  }

]
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/', (req, res, next) => {
  res.sendStatus(200)
})

app.post('/get-application-status', (req, res, next) => {
  console.log(req.body);
  let appstatus = 0;
  applicationsBank.forEach(user => {
    if(user.user == req.body.username){
      appstatus = user.applicationStatus
    }
  });
  
  res.send('Application status: ' + appstatus + '\n');
})

app.listen(port, () => {
  console.log("Server live on port: 3000")
})
