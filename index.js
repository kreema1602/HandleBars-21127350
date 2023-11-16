const express = require("express")
const app = express();
const port = 3000 || process.env.port;
const expressHbs = require("express-handlebars")

// Cau hinh tra ve thu muc web tinh
app.use(express.static(__dirname + "/html"));

// Cau hinh su dung View Template
app.engine("hbs", expressHbs.engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    extname: "hbs",
    defaultLayout: "layout",
}))

app.set("view engine", "hbs")

// index
app.get("/", (req, res) => {
    res.render("index")
});

// task1
app.use('/task1.htm', require('./routes/task1Route'))

app.use('/task2.htm', require('./routes/task2Route'))

app.use('/task3.htm', require('./routes/task3Route'))

app.use('/task4.htm', require('./routes/task4Route'))

app.get('/admin', (req, res) => res.render("index", {layout: "admin"}));



app.listen(port, () => console.log(`Example app listening on port ${port}!`));