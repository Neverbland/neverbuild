if (process.env.BROWSER) {
  throw new Error('Do not import `auth.js` from inside the client-side code.');
}

module.exports = {
  // Database
  databaseUrl: process.env.DATABASE_URL || 'sqlite:database.sqlite',

  // Authentication
  auth: {
    jwt: { secret: process.env.JWT_SECRET || 'A GREAT BIG SECRET' },

    // https://developers.facebook.com/
    // facebook: {
    //   id: process.env.FACEBOOK_APP_ID || '186244551745631',
    //   secret:
    //     process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc',
    // },

    // https://cloud.google.com/console/project
    // google: {
    //   id:
    //     process.env.GOOGLE_CLIENT_ID ||
    //     '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
    //   secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd',
    // },

    // // https://apps.twitter.com/
    // twitter: {
    //   key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
    //   secret:
    //     process.env.TWITTER_CONSUMER_SECRET ||
    //     'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ',
    // },
  },
};
