<template>
    <el-date-picker
        v-model="value"
        type="month"
        placeholder="Pick a month"
        format="YYYY/MM"
        :clearable="false"
        @change="changeFormat"
    />
</template>

<script>
export default {
    data() {
        return {
            value: this.getCurrentMonth()
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
            // change date format
            const year = new Date(date).getFullYear()
            const month = (new Date(date).getMonth() + 1).toString().padStart(2, '0')
            this.value = `${year}-${month}`

            // use el-date-picker to remote control el-calendar
            if (date) {
                const year = date.getFullYear()
                const month = date.getMonth()
                const newDate = new Date(year, month)
                this.$emit('change', newDate)
            }
        }
    }
}
</script>