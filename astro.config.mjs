import { defineConfig, envField } from 'astro/config';

export default defineConfig({
  env: {
    schema: {
      CONTENT_ISLAND_SECRET_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
        optional: false,
        default: 'INFORM_VALID_TOKEN'
      })
    }
  }
});
