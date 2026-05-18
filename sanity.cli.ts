import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'y9my9x5h',
    dataset: 'production'
  },
  deployment: {
    appId: 'pphg55sq5lb42jalv5q7absh',
    autoUpdates: true,
  }
})
