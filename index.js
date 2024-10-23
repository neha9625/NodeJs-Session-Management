import express from "express"
import session from "express-session";
import cookieParser from "cookie-parser";
const app = express();
const PORT = 5000;

app.use(cookieParser());
app.use(session({ secret: "secret", saveUninitialized: true, resave: true }));

const user = {
    name: "Neha Singh",
    source: "Youtube"
};

console.log(process.env);
app.get("/login", (req, res) => {
    req.session.user = user;
    req.session.save();
    return res.send("User logged in");
});

app.get("/user", (req, res) => {
    const sessionUser = req.session.user;
    return res.send(sessionUser);
});

app.get("/logout", (req, res) => {
    req.session.destroy();
    return res.send("User logged out!");
});

app.listen(PORT, () => console.log(`Server at ${PORT}`));