const request = require('request');

exports.listGiphys = async (term) => {
    return new Promise((resolve, reject) => {
        request("https://api.giphy.com/v1/gifs/search?q=dog&api_key=UvqUEXYvVoWkapCOdIQyU60XETPOAorS&limit=20", (error, response, body) => {
            resolve(JSON.parse(body));
        });
    });
}

