<template>
  <v-data-table
    :headers="headers"
    :items="records">
    <template v-slot:[`item.operation`]="{ item }">
      <records-editor :records="item">
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
      <v-icon
        size="small">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:bottom v-if="hideDefaultFooter"></template>
  </v-data-table>
</template>

<script>
import recordsEditor from '~/components/records/records-editor'
  export default {
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
      ],
      records: [
        {
          id: 1,
          type: 'income',
          date: '2024-05-26',
          category: 'bonus',
          amount: 5000,
          detail: 'excellent performance'
        },
        {
          id: 2,
          type: 'expense',
          date: '2024-05-25',
          category: 'entertainment',
          amount: 500,
          detail: 'badminton'
        },
      ],
    }),
  }
</script>