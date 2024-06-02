<template>
  <v-data-table
    :headers="headers"
    :items="records">
    <template v-slot:header="{ props  }">
      <thead>
        <tr>
          <th v-for="header in props.headers" :key="header.key" :style="{ width: header.width }" :class="header.class">
            {{ header.title }}
          </th>
        </tr>
      </thead>
    </template>
    <template v-slot:[`item.category`]="{ item }">
      <v-chip :color="getColor(item.type)">
        {{ item.category }}
      </v-chip>
    </template>
    <template v-slot:[`item.amount`]="{ item }">
      <span>{{ item.amount }}</span>
    </template>
    <template v-slot:[`item.operation`]="{ item }" v-if="!isMobile">
      <records-editor :records="item" mode="update" @update="emitRecordData">
        <template #button="{ openEditor }">
          <v-icon
            class="me-2"
            size="small"
            @click="openEditor"
          >
            mdi-pencil
          </v-icon>
        </template>
      </records-editor>
      <auth-warning mode="delete" @update="removeRecord(item)">
        <template #button="{ openDialog }">
          <v-icon
            size="small"
            @click="openDialog">
            mdi-delete
          </v-icon>
        </template>
      </auth-warning>
    </template>
    <template v-slot:bottom v-if="hideDefaultFooter"></template>
  </v-data-table>
</template>

<script>
import recordsEditor from '~/components/records/records-editor'
import AuthWarning from '~/components/auth/auth-warning'
  export default {
    components: {
      recordsEditor,
      AuthWarning
    },
    props: {
        headers: {
          type: Array,
          default: () => { return [] }
        },
        records: {
            type: Array,
            default: () => { return [] }
        }
    },
    data: () => ({
      hideDefaultFooter: true
    }),
    computed: {
      isMobile() {
          return this.$vuetify.display.mobile
      },
      computedHeaders() {
      if (this.isMobile) {
        return this.headers.filter(header => header.title !== 'Operation')
      }
      return this.headers
    }
    },
    methods: {
      removeRecord(item) {
        this.$emit('remove', item)
      },
      emitRecordData(data) {
        this.$emit('updateRecords', data)
      },
      getColor (type) {
        return type === 'income' ? 'green' : 'red'
      }
    }
  }
</script>

<style scoped>
.text-green {
  color: green;
}
.text-red {
  color: red;
}
</style>