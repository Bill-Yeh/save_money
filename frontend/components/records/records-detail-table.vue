<template>
  <v-data-table
    :headers="headers"
    :items="records">
    <template v-slot:[`item.operation`]="{ item }">
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
        records: {
            type: Array,
            default: () => { return [] }
        }
    },
    data: () => ({
      hideDefaultFooter: true,
      headers: [
        {
          title: 'Date',
          align: 'start',
          key: 'date',
        },
        { title: 'Category', align: 'start', key: 'category' },
        { title: 'Amount', align: 'start', key: 'amount' },
        { title: 'Detail', align: 'start', key: 'detail' },
        { title: 'Operation', align: 'start', value: 'operation' }
      ]
    }),
    methods: {
      removeRecord(item) {
        this.$emit('remove', item)
      },
      emitRecordData(data) {
        this.$emit('updateRecords', data)
      }
    }
  }
</script>