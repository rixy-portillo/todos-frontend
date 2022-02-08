import express from "express";
import proxy from "express-http-proxy";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(express.static(path.resolve(__dirname, './build')));

app.all("/todos/*", proxy(req => `http://localhost:8080${req.path}`))

app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});