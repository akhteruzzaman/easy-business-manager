<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex class="project_doc">
                <h1>Projects</h1>
                <p>List of all projects</p>
                <v-divider class="my-3" style="background:#3c3642;"></v-divider>
                <img width="100%" src="./../../assets/documentation/project.png" class="mb-3"><br>
                <h3>Features</h3>
                <div class="mb-3">
                  <li>Display all Projects</li>
                  <li>Search Projects</li>
                  <li>Edit Project</li>
                  <li>Delete Project</li>
                  <li>View Each Project</li>
                  <li>Project Updates</li>
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
  name:'ProjectkDoc',
  components: {
     Navbar
  },
}
</script>

<style>
  .project_doc{
    color: #FFF9E1!important;
  }
</style>
