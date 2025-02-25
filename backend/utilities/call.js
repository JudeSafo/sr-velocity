"use strict";

const got = require("got");

async function call(path, method = "GET", options = {}) {
  // Setup the request
  options = options || {};
  const searchParams = options.searchParams || {};
  const headers = options.headers || {};
  let json = options.json || {};
  json = method === "GET" ? undefined : json;

  // Make the request
  let res;
  try {
    res = await got(path, {
      headers,
      searchParams,
      method,
      json,
      responseType: "json",
    });
  } catch (error) {
    return { status: 500 };
  }

  // Return the response
  res = { status: res.statusCode, headers: res.headers, body: res.body };
  return res;
}

module.exports = call;
