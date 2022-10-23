import moment from 'moment';
import { PrioritiesTypes } from '@/types/Priorities.type';
import { Reminder } from '@/app/modules/Calendar/domain/interfaces';

import { reactive } from 'vue';

export const reminders = reactive<Reminder[]>([
  {
    id: 1,
    title: 'Meeting with John',
    date: moment().set({"hour": 11, "minute": 15}),
    duration: 30,
    priority: PrioritiesTypes.APLAZABLE,
    done: false,
  },
  {
    id: 2,
    title: 'Presentar departamento a familia Lopez Beltran',
    date: moment().set({"hour": 15, "minute": 0}),
    duration: 60,
    priority: PrioritiesTypes.URGENTE,
    done: false,
  },
  {
    id: 3,
    title: 'Reunion con el equipo de desarrollo',
    date: moment().set({"hour": 16, "minute": 0}),
    duration: 120,
    priority: PrioritiesTypes.PENDIENTE,
    done: false,
  },
  {
    id: 4,
    title: 'Actualización de casa Celeste',
    date: moment().set({"hour": 18, "minute": 30}),
    duration: 20,
    priority: PrioritiesTypes.PENDIENTE,
    done: false,
  },
]);