"use strict";

const fs = require('fs');
const path = require('path');

/**
 * Utitilty function to handle an http response
 * @param {httpresponse} response
 * @param {Object} resobj
 * @param {int/Number} code
 */
function handleResponse(response, resobj, code) {
    resobj = JSON.stringify(resobj);

    if(!code) code = 200;

    response.writeHead(code,{
        'Content-Length' :  Buffer.byteLength(resobj, 'utf-8'),
        'Content-Type'  :   'application/json'
    });

    response.end(resobj);
};

/**
 * Utitilty function to handle and log errors on console.
 * @param {Object} error
 * @param {httpresponse} response
 * @param {Object} resobj
 * @param {int/Number} code
 */
function handleError(error, response, msg, code) {

    if(error) {
        console.log("Error Occured : " + error);
    }

    if (!msg) {
        msg = "Some Error Occured. Try Again after some time.";
    }
    if (!code) {
        code = 501;
    }

    let resobj = {
                    message : msg,
                    code : code
                };

    handleResponse(response, resobj, code);
}


/**
 * Utitilty function to handle Unauthorized request.
 * @param {httpresponse} response
 */

function handleUnauthorisedRequest(response) {

    let resobj = {
        message : "User Unauthenticated. Include your username, password and auth-token in the request header. To get a fresh token, login again",
        code : 401
    };

    handleResponse(response, resobj, 401);
}


module.exports.handleResponse = handleResponse;
module.exports.handleError = handleError;
module.exports.handleUnauthorisedRequest = handleUnauthorisedRequest;
