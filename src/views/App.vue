<script setup>
import { ref } from 'vue'

const newTodo = ref('')

function addTodo() {
  console.log(newTodo.value)
}
</script>
<template>
  <div>
    <h1>我的 Todo List</h1>

    <input v-model="newTodo" placeholder="輸入代辦事項" />
    <button @click="addTodo">新增</button>
  </div>
  <router-view />
</template>
