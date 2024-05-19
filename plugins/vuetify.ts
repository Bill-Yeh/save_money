// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration
        display: {
            mobileBreakpoint: 'xs',
            thresholds: {
                xs: 768,
                sm: 960,
                md: 1280,
                lg: 1920,
                xl: 2560,
            },
        }
    })
    app.vueApp.use(vuetify)
})
