// bode.js modules

const axios = require("axios");

// Github API request with username

const api = {
    getUser(username) {
        try{
            const header = { headers: { Authorization: `token INSERTTOKENHERE` } };
            queryURL = `https://api.github.com/users/${username}`;
            return axios.get(queryURL, header);
        } catch (err) {
            console,log(err);
        }
    },
};

module.exports = api