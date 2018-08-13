import express from 'express';

import bodyParser from 'body-parser';


const app = express();
app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

app.listen(PORT, () => console.log(`server is running on port ${PORT}, Environment: ${NODE_ENV}`));

export default app;
