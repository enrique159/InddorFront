<template>
  <div >
    <div class="d-flex justify-between mb-6">
      <h3>Recordatorios</h3>
      <ButtonDot />
    </div>

    <div class="card-comp p-4">
      <!-- HEADER -->
      <header class="d-flex justify-between align-center mb-2">
        <div>
          <span class="tt-capitalize tc-text-light ts-small">{{ weekDayName }}</span>
          <h3 class="tt-capitalize">
            <span class="ts-h2 tc-green">{{ day }}</span>
            {{ monthName }}
          </h3>
        </div>

        <el-button class="btn-comp btn-purple" size="small" :icon="CalendarIcon">
          Ver todos
        </el-button>
      </header>

      <!-- REMINDERS -->
      <div class="reminders-container">
        <ReminderComp :reminder="item" v-for="item in reminders" :key="item.id" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reminders } from '@/common/mock/reminders.mock'

import ButtonDot from '@/components/ButtonDot/ButtonDotComp.vue'
import ReminderComp from './ReminderComp.vue'
import { CalendarIcon } from 'vue-tabler-icons'
import { ref } from 'vue'
import moment from 'moment'

const weekDayName =  ref(moment().format('dddd'));
const day = ref(moment().format('D'));
const monthName = ref(moment().format('MMMM'));
</script>

<style lang="scss" scoped>
.btn-purple {
  background-color: var(--color-purple-light);
  color: var(--color-purple);
}

.reminders-container {
  width: 100%;
  height: 246px;
  overflow-y: auto;
}
</style>