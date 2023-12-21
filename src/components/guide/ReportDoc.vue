<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex class="report_doc">
                <h1>Report</h1>
                <p>Report of current year</p>
                <v-divider class="my-3" style="background:#3c3642;"></v-divider>
                <p>
                  Well this is an excellent feature. You already know how to add sales of each day<br>
                  This chart will show the total sales of each month and a complete sales history of <br>
                  this current year.
                </p>
                <img width="100%" src="./../../assets/documentation/report1.png" class="mb-3"><br>
                <h3>Features</h3>
                <div class="mb-3">
                  <li>Report of Today</li>
                  <li>Report of This Month</li>
                  <li>Report of This Year</li>
                </div>
                <img width="100%" src="./../../assets/documentation/report2.png" class="my-3"><br>
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
  name:'ReportDoc',
  components: {
     Navbar
  },
}
</script>

<style>
  .report_doc{
    color: #FFF9E1!important;
  }
</style>
