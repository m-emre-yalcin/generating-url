"use strict";

const {
    compile
} = require('path-to-regexp');

module.exports = {
    generate: request => {
        // path should be defined
        if (request.path && typeof request.path == 'string') {
            if (request.url) request.url = '/'; // if url is predefined, overwrite it
            else request.url = request.path.split('.').reduce((a, b) => {
                // create url from controller string
                return a.concat('/', b);
            }, ''); // *Parameters

            if (request.params && typeof request.params === 'object') {
                if (request.url.slice(-1) != '/') request.url.concat('/'); // compile parameters

                const toPath = compile(request.url, {
                    encode: encodeURIComponent
                }); // replace with values

                request.url = toPath(request.params);
            } // if query is not defined, use default query


            if (typeof request.query === 'undefined') request.query = {
                _start: 0,
                _limit: 10,
                _sort: 'id:DESC'
            }; // *Queries

            if (request.query && typeof request.query === 'object') {
                request.url += '?';
                Object.entries(request.query).forEach(entry => {
                    // _where setter
                    if (entry[0] == '_where') {
                        Object.entries(request.query._where).forEach(sub_entry => {
                            request.url = request.url.concat(entry[0], '[', sub_entry[0], ']=', sub_entry[1], '&');
                        });
                    } // other setters
                    else {
                        request.url = request.url.concat(entry[0], '=', entry[1], '&');
                    }
                }); // delete last '&' character

                request.url = request.url.slice(0, -1);
            }

            return request.url;
        } else {
            console.error("Generating-url[error]: Please define a 'path'.", "An example: { path: 'notifications/count' }");
            return false;
        }
    }
};