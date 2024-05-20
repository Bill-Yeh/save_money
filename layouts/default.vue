<template>
    <v-layout class="layout">
        <v-app-bar v-if="isMobile" color="#1E88E5" prominent>
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <div style="width: 20%"></div>
            <el-date-picker
                v-model="value"
                style="width: 35%;"
                type="month"
                placeholder="Pick a month"
                format="YYYY/MM"
                :clearable="false"
                @change="changeFormat"
            />
            <div class="switch-mode" style="width: 20%; display: flex; justify-content: center">
                <el-switch
                  v-model="mode"
                  inline-prompt
                  active-text="Month"
                  inactive-text="All time"
                  style="--el-switch-on-color: #13ce66; --el-switch-off-color: #66b1ff" />
            </div>
            <div class="calendar-mode" style="width: 10%; display: flex; justify-content: center">
                <v-icon>mdi-calendar-month</v-icon>
            </div>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            location="left"
            :temporary="isMobile"
            :permanent="!isMobile"
            color="#ECEFF1">
            <div style="display: flex; justify-content: center; align-items: center;">
                <v-list-item
                    style="padding: 5%; cursor: pointer;"
                    prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
                    title="John Leider"
                    subtitle="abc@gmail.com">
                </v-list-item>
                <v-btn icon="mdi-account-edit" size="default" variant="plain" color="black"></v-btn>
            </div>
        <v-divider></v-divider>
            <v-list :items="items"></v-list>
            <template v-slot:append>
                <div class="pa-5" style="display: flex; justify-content: center;">
                    <v-btn color="black">
                    Logout
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>

        <v-main>
            <NuxtPage />
        </v-main>
        <v-footer app class="footer">
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
    data() {
        return {
            drawer: false,
            group: null,
            items: [
                {
                    title: 'Home',
                    value: 'home',
                },
                {
                    title: 'Accounts Analysis',
                    value: 'analysis',
                },
                {
                    title: 'Fixed income and expense',
                    value: 'fixed',
                }
            ],
            mode: 'all time',
            value: this.getCurrentMonth()
        }
    },
    watch: {
        group() {
            this.drawer = false
        }
    },
    computed: {
        isMobile() {
            if (this.$vuetify.display.mobile) {
                this.drawer = false
            } else {
                this.drawer = true
            }
            return this.$vuetify.display.mobile
        }
    },
    methods: {
        getCurrentMonth() {
            const date = new Date();
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0')
            return `${year}-${month}`
        },
        changeFormat(date) {
            const year = new Date(date).getFullYear()
            const month = (new Date(date).getMonth() + 1).toString().padStart(2, '0')
            this.value = `${year}-${month}`
        }
    }
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
    padding: 0 0 0 0 !important;
}

.footer-content {
    background-color: rgb(192, 192, 192);
    padding: 3px 3px;
}

.copyright {
    color: white
}
</style>