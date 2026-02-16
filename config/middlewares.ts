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
        'https://ai-resume-admin-9iqm.onrender.com', // Added Render URL just in case
        '*', // Temporary wildcard for debugging
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
