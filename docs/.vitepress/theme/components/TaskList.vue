<script setup lang="ts">
import { ref } from "vue";

interface Task {
  text: string;
  done: boolean;
}

const props = defineProps<{
  items: string[];
}>();

// 任务列表（全部默认未完成）
const tasks = ref<Task[]>(props.items.map(text => ({ text, done: false })));
</script>

<template>
  <ul class="task-list">
    <li v-for="(task, i) in tasks" :key="i" class="task-item">
      <input type="checkbox" v-model="task.done" />
      <span :class="{ done: task.done }">{{ task.text }}</span>
    </li>
  </ul>
</template>

<style scoped>
.task-list {
  list-style: none;
  padding: 0;
}
.task-item {
  margin: 0.5em 0;
  display: flex;
  align-items: center;
}
.task-item input {
  margin-right: 0.5em;
}
.task-item .done {
  text-decoration: line-through;
  color: #888;
}
</style>
