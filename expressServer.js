const express = require('express');
const app = express();
const bodyparser= require('body-parser');
const port = 8200;

app.use(bodyparser.urlencoded({extended:true}))


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/api/info/:id', (req, res) => {
  const queryParam = req.query.param; 
  const pathParam = req.params.id;

  const info = {
    queryParam,
    pathParam
  };

  res.json(info);
});

app.use(express.json());

app.get('/api/data', (req, res) => {
  const jsonData = req.body;

  
  const dataArray = ['Eren', 'Lucas', 'Alex','Alice','Rose'];
  
  res.send(dataArray);
  
});


