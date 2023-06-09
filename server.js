const express = require("express");
const nunjucks = require("nunjucks");
const os = require("os");
const interfaces = os.networkInterfaces();
const server = express();
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

server.engine("html", nunjucks.render);
server.set("view engine", "html");
server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true })); // add this line to handle form data

nunjucks.configure("views", {
  autoescape: true,
  express: server,
});

server.get("/", (request, response) => {
  response.render("index");
});

server.get("/admin", (request, response) => {
  response.render("admin");
});

server.get("/contact", (request, response) => {
  response.render("contact");
});

server.get("/about", (request, response) => {
  response.render("aboutme");
});

server.get("/education", (request, response) => {
  response.render("education");
});

server.get("/skills", (request, response) => {
  response.render("skills");
});

server.get("/chatgpt", (request, response) => {
  response.render("chatgpt");
});

server.get("/projects", (request, response) => {
  response.render("projects");
});

server.get("/references", (request, response) => {
  response.render("references");
});

// Handle the form submission
server.post("/send-email", (req, res) => {
  const name = req.body.name;
  const email = "alex@madpuppet.net";
  const subject = req.body.subject;
  const message = req.body.message;

  // Generate the mailto link
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  // Redirect to the mailto link
  res.redirect(mailtoLink);
});

let address;

for (const dev in interfaces) {
  interfaces[dev].forEach((details) => {
    if (details.family === "IPv4" && !details.internal) {
      address = details.address;
    }
  });
}

server.listen(port, address, () => {
  console.log(
    `Your local server is waiting for requests at http://${address}:${port}`
  );
});
