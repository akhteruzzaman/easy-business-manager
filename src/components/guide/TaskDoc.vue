<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex class="task_doc">
                <h1>Tasks</h1>
                <p>List of all tasks</p>
                <v-divider class="my-3" style="background:#3c3642;"></v-divider>
                <img width="100%" src="./../../assets/documentation/task.png" class="mb-3"><br>
                <h3>Features</h3>
                <div class="mb-3">
                  <li>Display all Tasks</li>
                  <li>Edit Task</li>
                  <li>Delete Task</li>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
export default {
  name:'TaskDoc',
  components: {
     Navbar
  },
}
</script>

<style>
  .task_doc{
    color: #FFF9E1!important;
  }
</style>
