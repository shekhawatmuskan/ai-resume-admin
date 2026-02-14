export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
  name: 'strapi::cors',
  config: {

    origin: [
  'http://localhost:5173',
  'https://ai-resume-buildr.netlify.app',
],
  },
},

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
