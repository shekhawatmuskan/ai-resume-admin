export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {

      origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        'https://ai-resume-buildr.netlify.app',
        'https://ai-resume-admin-9iqm.onrender.com',
        '*',
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
