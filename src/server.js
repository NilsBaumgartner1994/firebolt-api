"use strict";

/**
 * Server class
 *
 * @class Server
 */
export default class Server {

    /**
     * Creates an instance of Server.
     *
     * @param {Object} options
     *
     * @memberof Server
     */
    constructor(options) {
        console.log("Create a new Server isntance");
    }

    /**
     * Start Server.
     *
     * @memberof Server
     */
    start() {
        console.log("Hello new World");
        if(12==12){
            return true;
        } else {
            console.log("Coverage")
        }
    }
}