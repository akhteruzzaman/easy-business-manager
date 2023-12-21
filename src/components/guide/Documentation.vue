<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex class="documentation">
                <h1>Easy Business Manager</h1>
                <span class="subheading">
                  Easy Business Manager is an online based Business Management system that is<br>
                  perfectly fit for any kind of business, company, freelancers or any business<br>
                  related uses. Easy Business Manager created with modern design that works on any devices.
                </span>
                <v-divider class="my-3" style="background:#3c3642;"></v-divider>
                <div class="title mb-3">Documentation</div>
                <v-btn :to="{name: 'InstallationDoc'}" large class="mx-0" style="background:#2c045a;">Installation</v-btn><br>
                <v-btn :to="{name: 'DashboardDoc'}" large  class="mx-0" style="background:#2c045a;">Dashboard</v-btn><br>
                <v-btn :to="{name: 'CustomersDoc'}" large  class="mx-0" style="background:#2c045a;">Customers</v-btn><br>
                <v-btn :to="{name: 'SalesDoc'}" large  class="mx-0" style="background:#2c045a;">Sales</v-btn><br>
                <v-btn :to="{name: 'ExpenseDoc'}" large  class="mx-0" style="background:#2c045a;">Expenses</v-btn><br>
                <v-btn :to="{name: 'StockDoc'}" large  class="mx-0" style="background:#2c045a;">Stock</v-btn><br>
                <v-btn :to="{name: 'ProjectDoc'}" large  class="mx-0" style="background:#2c045a;">Project</v-btn><br>
                <v-btn :to="{name: 'ReportDoc'}" large  class="mx-0" style="background:#2c045a;">Report</v-btn><br>
                <v-btn :to="{name: 'LeadsDoc'}" large  class="mx-0" style="background:#2c045a;">Leads</v-btn><br>
                <v-btn :to="{name: 'TaskDoc'}" large  class="mx-0" style="background:#2c045a;">Task</v-btn><br>
                <v-btn :to="{name: 'ChatDoc'}" large  class="mx-0" style="background:#2c045a;">Live Chat</v-btn><br>
                <v-btn :to="{name: 'SettingsDoc'}" large  class="mx-0" style="background:#2c045a;">Settings</v-btn><br>
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
  name:'Documentation',
  components: {
     Navbar
  },
}
</script>

<style scoped>
  .documentation{
    color: #FFF9E1!important;
  }
  
  .btn__content{
    background: #2c045a!important;
    border-radius: 0!important;
  }
</style>
