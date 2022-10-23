<template>
  <div class="reminder-comp">
    <!-- HOURS -->
    <div class="hours-info" :class="{ 'checked' : reminder.done}">
      <span class="ts-smaller tw-heavy tc-text">{{ hourStart }}</span>
      <span class="ts-smaller tw-heavy tc-text-light">{{ hourEnd }}</span>
    </div>

    <SeparatorBar :color="separatorColor" width="4" :class="{ 'checked' : reminder.done}" />

    <!-- INFO -->
    <div class="info" :class="{ 'checked' : reminder.done}">
      <span class="tw-black">{{ reminder.title }}</span>
      <br>
      <el-tag class="mt-1" size="small" :type="priorityType">{{ priorityText }}</el-tag>
    </div>

    <!-- CHECKER -->
    <div class="check">
      <Checker :check="reminder.done" @update:check="handleCheck()"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import SeparatorBar from '@/components/SeparatorBar/SeparatorBar.vue'
import Checker from '@/components/Checker/Checker.vue'
import { useMessage } from '@/composables/useMessage'
import { ref, computed } from 'vue'
import moment from 'moment'
// Types
import { Reminder } from '@/app/modules/Calendar/domain/interfaces'
import { PrioritiesTypes } from '@/types/Priorities.type'

const { reminder } = defineProps<{
  reminder: Reminder
}>()

// Time
const hourStart = computed(() => {
  return moment(reminder.date).format('hh:mm a')
})
const hourEnd = computed(() => {
  return moment(reminder.date).add(reminder.duration, 'minutes').format('hh:mm a')
})

// Information
const priorityType = computed(() => {
  switch (reminder.priority) {
    case PrioritiesTypes.APLAZABLE:
      return 'success'
    case PrioritiesTypes.PENDIENTE:
      return 'warning'
    case PrioritiesTypes.URGENTE:
      return 'danger'
    case PrioritiesTypes.CRITICO:
      return 'danger'
    default:
      return 'info'
  }
})

const priorityText = computed(() => {
  switch (reminder.priority) {
    case PrioritiesTypes.APLAZABLE:
      return 'aplazable'
    case PrioritiesTypes.PENDIENTE:
      return 'pendiente'
    case PrioritiesTypes.URGENTE:
      return 'urgente'
    case PrioritiesTypes.CRITICO:
      return 'crítico'
    default:
      return 'recordatorio'
  }
})


// Separator bar
const separatorColor = computed(() => {
  switch (reminder.priority) {
    case PrioritiesTypes.APLAZABLE:
      return 'green'
    case PrioritiesTypes.PENDIENTE:
      return 'yellow'
    case PrioritiesTypes.URGENTE:
      return 'orange'
    case PrioritiesTypes.CRITICO:
      return 'red'
    default:
      return 'purple'
  }
})


// Checker done
const { message } = useMessage()
const handleCheck = () => {
  reminder.done = !reminder.done
  if (reminder.done) {
    message('Recordatorio completado', 'success')
  }
}

</script>

<style lang="scss" scoped>
.reminder-comp {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  column-gap: 0.6rem;
  padding: 6px 8px;
  border-radius: 1rem;

  .hours-info {
    display: flex;
    flex-direction: column;
    min-width: 60px;
  }

  .info {
    display: block;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;
  }

  .check {
    margin-left: auto;
  }
}

.checked {
  opacity: 0.5;
}
</style>