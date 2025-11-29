export default ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 300000,
        },
      },
      sizeLimit: 10 * 1024 * 1024, // 10MB (reduced for Render free tier)
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64,
      },
      // Optimize for Render
      responseLimit: 10 * 1024 * 1024, // 10MB
    },
  },
});
