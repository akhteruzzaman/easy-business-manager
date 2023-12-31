<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
        <v-card-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search Leads"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="leads"
          :search="search"
          :rows-per-page-items="rowsPerPageItems"
          :pagination.sync="pagination"
          row
          wrap
          class="elevation-1 mx-3"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-left"><router-link :to="{ name: 'ViewLeads', params: {id:props.item.id} }">{{ props.item.name }}</router-link></td>
            <td class="text-xs-left">{{ props.item.email }} {{currency}}</td>
            <td class="text-xs-left">{{ props.item.phone }}</td>
            <td class="text-xs-left">{{ props.item.company }}</td>
            <td class="text-xs-left" v-if="props.item.status">{{ props.item.status.text }}</td>
            <v-btn fab dark small color="cyan" :to="{name: 'EditLeads', params: {id:props.item.id}}">
               <v-icon dark>edit</v-icon>
            </v-btn>
            <v-btn fab dark small color="pink" @click="removeLeads(props.item.id)">
               <v-icon dark>remove</v-icon>
            </v-btn>
          </template>
        </v-data-table>      

        <!-- Add Expense Button  -->
        <v-btn :to="{name: 'AddLeads'}"
          fab
          bottom
          right
          color="grey darken-3"
          dark
          fixed
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import db from '@/firebase/init'
import moment from 'moment'
export default {
  name:'LeadsType',
  components: {
     Navbar
  },
  data(){
      return{
        currency:'',
        search: '',
        rowsPerPageItems: [8, 16, 24],
        pagination: {
        rowsPerPage: 8
        },
        total_contacted_leads:'',
        total_qualified_leads:'',
        total_working_leads:'',
        total_proposal_sent_leads:'',
        leads:[],
        headers: [
         { text: 'Name', value: 'name', sortable: !1 },
         { text: 'Email', value: 'email', sortable: !1 },
         { text: 'Phone', value: 'phone', sortable: !1 },
         { text: 'Company', value: 'company', sortable: !1 },
         { text: 'Status', value: 'status', sortable: !1 },
         { text: 'Action', value: 'action', sortable: !1 },
       ]

      }
  },
  methods:{
      removeLeads(id){
        var deleteResult = confirm("Want to delete?");
        if (deleteResult) {
          db.collection('leads').doc(id).delete().then(() => {
            this.leads = this.leads.filter(lead => {
              return lead.id != id
            })
          })
        }
      }

  },
  created(){

      // Show All Leads
      let ref = db.collection('leads').where("status.text", "==", this.$route.params.type).orderBy('timestamp', 'desc')

      ref.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type == 'added'){
            let doc = change.doc
            this.leads.push({
              id:doc.id,
              name:doc.data().name,
              email:doc.data().email,
              phone:doc.data().phone,
              website:doc.data().website,
              country:doc.data().country,
              city:doc.data().city,
              company:doc.data().company,
              designation:doc.data().designation,
              source:doc.data().source,
              status:doc.data().status,
              timestamp:moment(doc.data().timestamp).fromNow('lll')
            })
          }
        })
      })

      // Total Contacted Leads
      db.collection('leads').where("status.text", "==", "Contacted")
     .get()
     .then(snapshot => {
           this.total_contacted_leads = snapshot.size;
      })

      // Total Qualified Leads
      db.collection('leads').where("status.text", "==", "Qualified")
     .get()
     .then(snapshot => {
           this.total_qualified_leads = snapshot.size;
      })

      // Total Working Leads
      db.collection('leads').where("status.text", "==", "Working")
     .get()
     .then(snapshot => {
           this.total_working_leads = snapshot.size;
      })

      // Total Proposal Sent Leads
      db.collection('leads').where("status.text", "==", "Proposal Sent")
     .get()
     .then(snapshot => {
           this.total_proposal_sent_leads = snapshot.size;
      })

    },   
}
</script>

<style>
  td{
    text-align: center;
  }
</style>
