<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex class="leads_doc">
                <h1>Leads</h1>
                <p>Collection of all Leads (Not Customer yet but interested)</p>
                <v-divider class="my-3"  style="background:#3c3642;"></v-divider>
                <img width="100%" src="./../../assets/documentation/leads.png" class="mb-3"><br>
                <h3>Features</h3>
                <div class="mb-3">
                  <li>Display all Leads</li>
                  <li>Search Leads</li>
                  <li>Edit Leads</li>
                  <li>Delete Leads</li>
                </div>
                <h3>Add Leads  </h3>
                <img src="./../../assets/documentation/leads-add.png" class="my-3"><br>
                <h3>Edit Leads </h3>
                <img src="./../../assets/documentation/leads-edit.png" class="my-3"><br>
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
  name:'LeadsDoc',
  components: {
     Navbar
  },
}
</script>

<style>
  .leads_doc{
    color: #FFF9E1!important;
  }
</style>
