// node.js modules

const axios = require("axios");

// Github API request with username & authorization

const api = {
    getUser(username) {
        try{
            queryURL = `https://api.github.com/users/${username}`;
            return axios.get(queryURL);
        } catch (err) {
            console.log(err);
        }
    },
};

module.exports = api