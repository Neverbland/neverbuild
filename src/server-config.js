if (process.env.BROWSER) {
  throw new Error('Do not import `auth.js` from inside the client-side code.');
}

// Server-side only configuration
// -----------------------------------------------------------------------------
// Use this file for any sensitive data configuration
//  and make sure not toe import this on the client-side.
// If you need to set config variables that you want to use
//  on the client-side, use ./config.js

module.exports = {
  // Database
  // databaseUrl: '',
};
