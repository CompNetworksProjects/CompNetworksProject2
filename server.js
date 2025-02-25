const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8888;

//static files from the project root
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
