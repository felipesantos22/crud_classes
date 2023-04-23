import app from "./app";

const port = process.env.API_PORT || 3002;

app.listen(port, () => console.log('ouvindo porta', port));
