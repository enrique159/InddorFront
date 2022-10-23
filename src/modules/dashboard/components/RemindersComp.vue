<template>
  <div >
    <div class="d-flex justify-between mb-6">
      <h3>Recordatorios</h3>
      <ButtonDot />
    </div>

    <div class="card-comp p-4">
      <header class="d-flex justify-between align-center">
        <div>
          <span class="tt-capitalize tc-text-light ts-small">{{ weekDayName }}</span>
          <h3 class="tt-capitalize">
            <span class="tc-green">{{ day }}</span>
            {{ monthName }}
          </h3>
        </div>

        <el-button 
          class="btn-comp" 
          :icon="CalendarIcon" 
        >
          Ver Todos
        </el-button>
      </header>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonDot from '@/components/ButtonDot/ButtonDotComp.vue'
import { CalendarIcon } from 'vue-tabler-icons'
import { ref } from 'vue'
import moment from 'moment'

const weekDayName =  ref(moment().format('dddd'));
const day = ref(moment().format('D'));
const monthName = ref(moment().format('MMMM'));
</script>