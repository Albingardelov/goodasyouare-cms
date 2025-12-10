export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: process.env.CORS_ORIGIN 
        ? process.env.CORS_ORIGIN.split(',').map((url: string) => url.trim())
        : [
            'http://localhost:5173',
            'http://localhost:4173', // Vite preview server
            'http://localhost:3000',
            'http://127.0.0.1:5173',
            'http://127.0.0.1:4173', // Vite preview server
            'http://127.0.0.1:3000',
            'https://goodasyouare2-0.onrender.com',
            'https://www.goodasyouare.com',
            'https://goodasyouare.com',
            'https://good-as-you-are2-0.vercel.app', // Stable Vercel URL (doesn't change)
            'https://good-as-you-are2-0-j8y0tueot-albin-gardelovs-projects.vercel.app',
            'https://good-as-you-are2-0-9z4nutpyp-albin-gardelovs-projects.vercel.app',
          ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      formLimit: '10mb', // Modify form body
      jsonLimit: '10mb', // Modify JSON body
      textLimit: '10mb', // Modify text body
      formidable: {
        maxFileSize: 10 * 1024 * 1024, // 10MB
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
