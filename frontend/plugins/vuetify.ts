// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VCalendar } from 'vuetify/labs/VCalendar'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration
        display: {
            mobileBreakpoint: 'xs',
            thresholds: {
                xs: 767,
                sm: 960,
                md: 1280,
                lg: 1920,
                xl: 2560,
            },
        },
        components: {
            VCalendar,
        }
    })
    app.vueApp.use(vuetify)
})
