<template>
    <v-layout class="layout">
        <v-app-bar color="primary" prominent>
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>My files</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon="mdi-magnify" variant="text"></v-btn>

            <v-btn icon="mdi-filter" variant="text"></v-btn>

            <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" location="left" temporary>
            <v-list :items="items"></v-list>
        </v-navigation-drawer>

        <v-main>
            <NuxtPage />
        </v-main>
        <v-footer class="footer">
            <div class="text-center w-100 footer-content">
                <span class="copyright">
                    <strong>Copyright © {{ new Date().getFullYear() }}
                        Yeh.Bill
                    </strong>
                </span>
            </div>
        </v-footer>
    </v-layout>
</template>
<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
        items: [
            {
                title: 'Foo',
                value: 'foo',
            },
            {
                title: 'Bar',
                value: 'bar',
            },
            {
                title: 'Fizz',
                value: 'fizz',
            },
            {
                title: 'Buzz',
                value: 'buzz',
            },
        ],
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>

<style>
.layout {
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.footer {
    position: fixed !important;
    padding: 0 0 0 0 !important;
}

.footer-content {
    position: fixed;
    bottom: 0;
    background-color: rgb(192, 192, 192);
    padding: 3px 3px;
}

.copyright {
    color: white
}
</style>