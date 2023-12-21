<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex class="dashboard_doc">
                <h1>Dashboard</h1>
                <p>Dashboard is a summary of the Puku CRM.</p>
                <v-divider class="my-3"></v-divider>
                <img width="100%" src="./../../assets/documentation/dashboard.png" class="mb-3"><br>
                <b>Customers</b>
                <p>Number of new Customers joins of current month and Total Customers record are displaying here. <br>
                  Click on details for see all Customers records</p>
                <b>Sales</b>
                <p>Total Sales amount today and total Sales of this month are displaying here. <br>
                  Click on details for see all Sales records</p>
                <b>Expenses</b>
                <p>Total Expense amount today and total Expense of this month are displaying here. <br>
                  Click on details for see all Expense records</p>
                <b>Leads</b>
                <p>Total Leads of current month and Total Leads record are displaying here. <br>
                  Click on details for see all Leads records</p>
                <b>Stock</b>
                <p>Total item quantity and total value of stock are displaying here. <br>
                  Click on details for see all Stock records</p>
                <b>Project</b>
                <p>Total Project in porogress and Total Projects are displaying here. <br>
                  Click on details for see all project records</p>
                <b>Task</b>
                <p>Total high priority task and Total tasks are displaying here. <br>
                  Click on details for see all Task records</p>
                <b>Setting</b>
                <p>Current Currency and Tax are displaying here. <br>
                </p>
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
  name:'DashboardDoc',
  components: {
     Navbar
  },
}
</script>

<style>
  .dashboard_doc{
    color: #FFF9E1!important;
  }
</style>
