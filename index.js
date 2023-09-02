const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Define the project array before using it
const project = [
  {
    "id": 1,
    "name": "Chandrayaan-2",
    "description": "India's second lunar exploration mission.",
    "launch_date": "July 22, 2019",
    "status": "Active",
    "year": 2019,
    "planet_under_observation": "Moon"
  },
  {
    "id": 2,
    "name": "Mars Orbiter Mission (Mangalyaan)",
    "description": "India's first interplanetary mission to Mars.",
    "launch_date": "November 5, 2013",
    "status": "Active",
    "year": 2013,
    "planet_under_observation": "Mars"
  },
  {
    "id": 3,
    "name": "GSAT-30",
    "description": "Communication satellite for providing C-band and Ku-band services.",
    "launch_date": "January 17, 2020",
    "status": "Active",
    "year": 2020,
    "planet_under_observation": null
  },
  {
    "id": 4,
    "name": "Astrosat",
    "description": "India's first dedicated multi-wavelength space observatory.",
    "launch_date": "September 28, 2015",
    "status": "Active",
    "year": 2015,
    "planet_under_observation": null
  }
  // Add more ISRO projects here
];

// home page
app.get('/', (req, res) => {
  res.send('CSOC-A3');
});


// Get a random data
app.get('/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * project.length);
  res.json(project[randomIndex]);
});


app.get('/filterplanet', (req, res) => {

    const planet = req.query.planet;
    const pa = project.filter((pro1) => pro1.planet_under_observation === planet);

    res.json(pa);
  })


// Get using a specific id
app.get('/project/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const specificProject = project.find(pro => pro.id === id);
  res.json(specificProject);
});


// Post a new data
app.post("/postdata", (req, res) => {
  const newData = {
    id: project.length + 1,
    name: req.body.name,
    description: req.body.description,
    launch_date: req.body.launch_date,
    status: req.body.status,
    year: req.body.year,
    planet_under_observation: req.body.planet_under_observation
  };

  project.push(newData);
  res.json(newData);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
