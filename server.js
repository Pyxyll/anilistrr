import express from "express";
import routes from "./routes.js";
import { create } from "express-handlebars";

const app = express();
const port = 3000;

app.use(express.static('public'));

const handlebars = create({extname: '.hbs'});
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use("/", routes);

app.listen(port, () => {
  console.log(`anilist is listening on port ${port}`)
})