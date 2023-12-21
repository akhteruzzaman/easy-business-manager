<template>
  <v-app>
      <Navbar/>
    <div>
      <v-content>
        <v-container
          fluid
          style="min-height: 0;"
          grid-list-lg
          class="px-4 pt-4"
        >
          <v-layout row wrap>
            <v-flex xs12 sm12 md3 lg3>
              <router-link :to="{ name: 'Customers'}">
                <v-card class="py-3" style="background:#424242!important;color:#FFF!important;text-align:center;">
                  <v-icon style="font-size:30px;color:#FFF!important;border:1px solid #FFF!important;border-radius:50%;padding:7px;">people</v-icon>
                  <h1>Customers</h1>
                  <div class="body-2">
                      <p>Customers This Month : {{customer_of_this_month}} </p>
                      <p>Total Customers: {{customer_total}}</p>
                    </div>
                </v-card>
              </router-link>
            </v-flex>
            <v-flex xs12 sm12 md3 lg3>
              <router-link :to="{ name: 'Sales'}">
                <v-card class="py-3" style="background:#424242!important;color:#FFF!important;text-align:center;">
                  <v-icon style="font-size:30px;color:#FFF!important;border:1px solid #FFF!important;border-radius:50%;padding:7px;">attach_money</v-icon>
                  <h1>Sales</h1>
                  <div class="body-2">
                    <p>Sales Today : {{sales_today}} {{currency}}</p>
                    <p>Sales This Month: {{sales_of_this_month}} {{currency}}</p>
                  </div>
                </v-card>
              </router-link>
            </v-flex>
            <v-flex xs12 sm12 md3 lg3>
              <router-link :to="{ name: 'Expenses'}">
                <v-card class="py-3" style="background:#424242!important;color:#FFF!important;text-align:center;">
                  <v-icon style="font-size:30px;color:#FFF;border:1px solid #FFF!important;border-radius:50%;padding:7px;">trending_up</v-icon>
                  <h1>Expenses</h1>
                  <div class="body-2">
                    <p>Expense Today : {{expense_today}} {{currency}}</p>
                    <p>Expense This Month: {{expenses_of_this_month}} {{currency}}</p>
                  </div>
                </v-card>
              </router-link>
            </v-flex>
            <v-flex xs12 sm12 md3 lg3>
              <router-link :to="{ name: 'Leads'}">
                <v-card class="py-3" style="background:#424242!important;color:#FFF!important;text-align:center;">
                  <v-icon style="font-size:30px;color:#FFF!important;border:1px solid #FFF!important;border-radius:50%;padding:7px;">done_all</v-icon>
                  <h1>Leads</h1>
                  <div class="body-2">
                    <p>Leads This month : {{leads_of_this_month}} </p>
                    <p>Total Leads: {{leads_total}} </p>
                  </div>
                </v-card>
              </router-link>
            </v-flex>
            <v-flex xs12 sm12 md3 lg3>
              <router-link :to="{ name: 'Items'}">
                <v-card class="py-3" style="background:#424242!important;color:#FFF!important;text-align:center;">
                  <v-icon style="font-size:30px;color:#FFF!important;border:1px solid #FFF!important;border-radius:50%;padding:7px;">shopping_basket</v-icon>
                  <h1>Stock</h1>
                  <div class="body-2">
                    <p>Total Items Quantity: {{total_item_quantity}} </p>
                    <p>Total Value Of Stock: {{total_stock_amount}} {{currency}}</p>
                  </div>
                </v-card>
              </router-link>
            </v-flex>
            <v-flex xs12 sm12 md3 lg3>
              <router-link :to="{ name: 'Project'}">
                <v-card class="py-3" style="background:#424242!important;color:#FFF!important;text-align:center;">
                  <v-icon style="font-size:30px;color:#FFF!important;border:1px solid #FFF!important;border-radius:50%;padding:7px;">create_new_folder</v-icon>
                  <h1>Project</h1>
                  <div class="body-2">
                    <p>Projects In Progress : {{total_inprogress_project}} </p>
                    <p>Total Project: {{total_project}} </p>
                  </div>
                </v-card>
              </router-link>
            </v-flex>
            <v-flex xs12 sm12 md3 lg3>
              <router-link :to="{ name: 'Task'}">
                <v-card class="py-3" style="background:#424242!important;color:#FFF!important;text-align:center;">
                  <v-icon style="font-size:30px;color:#FFF!important;border:1px solid #FFF!important;border-radius:50%;padding:7px;">touch_app</v-icon>
                  <h1>Task</h1>
                  <div class="body-2">
                    <p>High Priority Task : {{high_priority_task}} </p>
                    <v>Total Task: {{total_task}} </v>
                  </div>
                </v-card>
              </router-link>
            </v-flex>
            <v-flex xs12 sm12 md3 lg3>
              <router-link :to="{ name: 'Settings'}">
                <v-card class="py-3" style="background:#424242!important;color:#FFF!important;text-align:center;">
                  <v-icon style="font-size:30px;color:#FFF!important;border:1px solid #FFF!important;border-radius:50%;padding:7px;">build</v-icon>
                  <h1>Settings</h1>
                  <div class="body-2">
                    <p>Currency : {{currency}} </p>
                    <p>Tax: {{tax}}% </p>
                  </div>
                </v-card>
              </router-link>
            </v-flex>
          </v-layout>
        </v-container>

       <!-- Sales Chart -->
       <Chart/>
          

        <v-container grid-list-lg class="pukulist_container px-4" >
          <v-layout row wrap>
            <v-flex xs12 sm12 md4 lg4 class="pa-1">
              <v-card  flat  style="background:#424242!important;" >
                <v-card-title><h4>Income Expense Comparison Of {{current_month_name}}  </h4></v-card-title>
                <v-list dense class="pukulist"  style="background:transparent!important;">
                  <v-list-tile>
                    <v-list-tile-content>Total Sales:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{sales_of_this_month}} {{currency}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Total Expenses:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{expenses_of_this_month}} {{currency}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Total Tax:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{sales_of_this_month}} * {{tax}}% = {{((this.sales_of_this_month * this.tax)/100).toFixed(2)}} {{currency}}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content><b>Net Earnings After Tax:</b></v-list-tile-content>
                    <v-list-tile-content class="align-end"><b>{{(this.sales_of_this_month - (this.sales_of_this_month * this.tax)/100 - this.expenses_of_this_month).toFixed(2)}} {{currency}}</b></v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
            <v-flex xs12 sm12 md4 lg4 class="pa-1">
                <v-card flat  style="background: #424242!important;">
                  <v-card-title><h4> Customer Updates </h4></v-card-title>
                  <v-list dense class="pukulist" style="background:transparent!important;">
                    <v-list-tile v-for="customerrecord in customerrecords" :key="customerrecord.id">
                      <v-list-tile-content><b>{{customerrecord.name}}</b>{{customerrecord.text}}</v-list-tile-content>
                      <v-list-tile-content class="align-end">{{customerrecord.timestamp}}</v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md4 lg4 class="pa-1">
              <v-card flat  style="background: #424242!important;">
                <v-card-title><h4> Lead Updates </h4></v-card-title>
                <v-list dense class="pukulist" style="background:transparent!important;">
                  <v-list-tile v-for="leadrecord in leadrecords" :key="leadrecord.id">
                    <v-list-tile-content><b>{{leadrecord.name}}</b> {{leadrecord.text}}</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{leadrecord.timestamp}}</v-list-tile-content>
                  </v-list-tile>
                </v-list>
               </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>        

    </div>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import Chart from '@/components/dashboard/Chart'
import db from '@/firebase/init'
import moment from 'moment'
export default {
  name:'Dashboard',
  components: {
     Navbar,Chart
  },
  data(){
      return{
        current_month_name:moment().format('MMMM'),
        rowsPerPageItems: [8, 16, 24],
        pagination: {
        rowsPerPage: 8
        },
        customerrecords:[],
        leadrecords:[],
        customerHeaders: [
         { text: 'Customer Name'},
         { text: 'Updates'},
         { text: 'Created' },
        ],
        leadHeaders: [
          { text: 'Name'},
          { text: 'Updates'},
          { text: 'Created' },
        ],
        customer_of_this_month:'',
        customer_total:'',
        sales_of_this_month:'',
        sales_total:'',
        expenses_of_this_month:'',
        expenses_total:'',
        leads_of_this_month:'',
        leads_total:'',
        currency:'',
        sales_today:'',
        expense_today:'',
        total_stock_amount:'',
        total_item_quantity:'',
        total_inprogress_project:'',
        total_project:'',
        high_priority_task:'',
        total_task:'',
        currency:'',
        tax:'',
      }
  },
  created(){

        // Current Currency
        db.collection("settings").doc('config').onSnapshot(doc =>{
           this.currency = doc.data().currency
        })

        // Show All Customer Updates
        let cref = db.collection('customerrecords').orderBy('timestamp', 'desc').limit(4)

        cref.onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type == 'added'){
              let doc = change.doc
              this.customerrecords.push({
                name:doc.data().name,
                text:doc.data().text,
                timestamp:moment(doc.data().timestamp).format('ll')
              })
            }
          })
        })

        // Show All Lead Updates
        let lref = db.collection('leadrecords').orderBy('timestamp', 'desc').limit(4)

        lref.onSnapshot(snapshot => {
          snapshot.docChanges().forEach(change => {
            if(change.type == 'added'){
              let doc = change.doc
              this.leadrecords.push({
                name:doc.data().name,
                text:doc.data().text,
                timestamp:moment(doc.data().timestamp).format('ll')
              })
            }
          })
        })

        // Total Customers of this Month
        db.collection('customers').where("created_month", "==", moment().format('MM-YYYY'))
       .get()
       .then(snapshot => {
             this.customer_of_this_month = snapshot.size;
        })

        // Total Customers
        db.collection('customers')
       .get()
       .then(snapshot => {
             this.customer_total = snapshot.size;
        })

        // Total Sales of Today
        db.collection('sales').where("sales_date", "==", moment().format('DD-MM-YYYY'))
         .get()
         .then(snapshot => {
               var totalSales = 0;
               snapshot.forEach(doc => {
                  totalSales += Number(doc.data().total)
               })
               this.sales_today = totalSales;
        })

        // Total Sales of this Month
        db.collection('sales').where("created_month", "==", moment().format('MM-YYYY'))
        .get()
        .then(snapshot => {
              var totalSalesOfThisMonth = 0;
              snapshot.forEach(doc => {
                 totalSalesOfThisMonth += Number(doc.data().total)
              })
              this.sales_of_this_month = totalSalesOfThisMonth;
         })

         // Total sales
         db.collection('sales')
        .get()
        .then(snapshot => {
              var totalSales = 0;
              snapshot.forEach(doc => {
                 totalSales += Number(doc.data().total)
              })
              this.sales_total = totalSales;
         })

         // Total Expense of this Month
         db.collection('expenses').where("created_month", "==", moment().format('MM-YYYY'))
         .get()
         .then(snapshot => {
               var totalExpensesOfThisMonth = 0;
               snapshot.forEach(doc => {
                  totalExpensesOfThisMonth += Number(doc.data().expense_amount)
               })
               this.expenses_of_this_month = totalExpensesOfThisMonth;
          })

          // Total Expense Today
          db.collection('expenses').where("expense_date", "==", moment().format('DD-MM-YYYY'))
           .get()
           .then(snapshot => {
                 var totalExpense = 0;
                 snapshot.forEach(doc => {
                    totalExpense += Number(doc.data().expense_amount)
                 })
                 this.expense_today = totalExpense;
          })

          // Total Expenses
          db.collection('expenses')
         .get()
         .then(snapshot => {
               var totalExpneses = 0;
               snapshot.forEach(doc => {
                  totalExpneses += Number(doc.data().expense_amount)
               })
               this.expenses_total = totalExpneses;
          })

          // Total Leads of this Month
          db.collection('leads').where("created_month", "==", moment().format('MM-YYYY'))
         .get()
         .then(snapshot => {
               this.leads_of_this_month = snapshot.size;
          })

          // Total Leads
          db.collection('leads')
         .get()
         .then(snapshot => {
               this.leads_total = snapshot.size;
          })

          // Total Item Quantity
          db.collection('items')
         .get()
         .then(snapshot => {
               var totalItemQuantity = 0;
               snapshot.forEach(doc => {
                  totalItemQuantity += Number(doc.data().quantity)
               })
               this.total_item_quantity = totalItemQuantity;
          })

          // Total Amount of Stock
          db.collection('items')
         .get()
         .then(snapshot => {
               var totalStockAmount = 0;
               snapshot.forEach(doc => {
                  totalStockAmount += Number(doc.data().total)
               })
               this.total_stock_amount = totalStockAmount;
          })

          // Total In progress Project
          db.collection('project').where("status.text", "==", "In Progress")
         .get()
         .then(snapshot => {
               this.total_inprogress_project = snapshot.size;
          })

          // Total Project
          db.collection('project')
         .get()
         .then(snapshot => {
               this.total_project = snapshot.size;
          })

          // Total High Priority Task
          db.collection('task').where("priority.text", "==", "High")
         .get()
         .then(snapshot => {
               this.high_priority_task = snapshot.size;
          })

          // Total Task
          db.collection('task')
         .get()
         .then(snapshot => {
               this.total_task = snapshot.size;
          })

          // Current Currency
          db.collection("settings").doc('config').onSnapshot(doc =>{
             this.currency = doc.data().currency
          })

          // Current Tax
          db.collection("settings").doc('config').onSnapshot(doc =>{
             this.tax = doc.data().tax
          })
    }

}
</script>

<style scoped>

h1{
  width: 100%;
}
h4{
  width: 100%;
}
a{
  text-decoration: none;
}
p{
  margin-bottom: 0!important;
}
.updates-heading{
  margin-left: 25px;
}
.pukulist_container .card__title{
  padding-bottom:0!important;
}
.pukulist_container .card__title h4{
  padding-bottom:5px;
  border-bottom:1px solid #757575!important;
}

.application .theme--light.list, .theme--light .list{
  border:0px solid #757575!important;
}

.pukulist .list__tile__content{
  border-bottom: 0px solid #757575!important;
}

.list__tile{
  padding: 0 16px 0 0!important;
}



</style>
