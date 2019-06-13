const app = require("./app");
const http = require("http");
const PORT = 3001;
http.createServer(app).listen(PORT); //the server object listens on port 8080

//API URL (GET request):
// https://api.giphy.com/v1/gifs/search?q=<searchTerm>&api_key=UvqUEXYvVoWkapCOdIQyU60XETPOAorS&limit=20

//create a server object:
