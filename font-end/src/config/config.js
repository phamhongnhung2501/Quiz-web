const config_network = {
    "host": "http://localhost",
    "port": "3001",
};

const api_path = config_network.host + ':' + config_network.port + "/api/v1/";

const config_api = {
    "path": api_path,
    "login": api_path + "auth/login",
    "library": api_path + "library/queryImages?tag="
};

module.exports = {
    config_network: config_network,
    config_api: config_api
};


