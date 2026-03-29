/**
 * Batch Cooking App — Configuration
 *
 * Set VERCEL_URL to your deployed Vercel URL before building the mobile app.
 * Example: 'https://batch-cooking-app.vercel.app'
 *
 * Leave empty for web deployment (relative URL will be used automatically).
 */
window.APP_CONFIG = {
  vercelUrl: '',          // <-- Paste your Vercel URL here for mobile builds
  get apiUrl() {
    if (this.vercelUrl) {
      return this.vercelUrl.replace(/\/$/, '') + '/api/generate';
    }
    return '/api/generate';
  }
};
