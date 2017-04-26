// A GET Route to /survey which should display the survey page.
app.get("/survey", function(req, req) {
	res.sendFile(path.join(__dirname, "survey.html"))
})
// A default USE route that leads to home.html which displays
// the home page.

app.get("/", function(req, req) {
	res.sendFile(path.join(__dirname, "home.html"))
})
