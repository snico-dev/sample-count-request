const request = require('request');

exports.listGiphysByTerm = async (term) => {
    return new Promise((resolve, reject) => {
        request(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=UvqUEXYvVoWkapCOdIQyU60XETPOAorS&limit=20`, (error, response, body) => {
            if (error) {
                reject();
            }
            try {
                resolve(JSON.parse(body));
            } catch (error) {
                reject();
            }
        });
    });
}

