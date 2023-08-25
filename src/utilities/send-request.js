//file: src\utilities\send-request.js

import { getToken } from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc. 
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
    const token = getToken();
    if (token) {
        // Ensure the headers object exists
        options.headers = options.headers || {};
        // Add token to an Authorization header
        // Prefacing with 'Bearer' is recommended in the HTTP specification
        options.headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx or 5xx
    if (res.ok) return res.json();

    // Throw a more specific error based on the response status
    switch (res.status) {
      case 400: throw new Error('Bad Request');
      case 401: throw new Error('Unauthorized');
      case 403: throw new Error('Forbidden');
      case 404: throw new Error('Not Found');
      case 500: throw new Error('Internal Server Error');
      default: throw new Error('Unknown Error');
    }
}