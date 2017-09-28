// Global configuration
// -----------------------------------------------------------------------------
// Use this file for any configuration data
// These variables are shared on the server and client
//  and can be imported on both.

module.exports = {
  // Node.js app
  port: process.env.PORT || 3000,

  // API Gateway
  api: {
    // GraphCMS API Endpoint
    graphcms: 'https://api.graphcms.com/simple/v1/neverbuild',
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl:
      process.env.API_SERVER_URL ||
      `http://localhost:${process.env.PORT || 3000}`,
  },

  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },
};
