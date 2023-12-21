<template>
  <v-app>
    <Navbar/>
      <div>
        <v-content>
          <form @submit.prevent="changePassword">
            <v-card>
              <v-card-title class="py-4 center">
                <h4>Update Password</h4>
              </v-card-title>
              <v-container grid-list-sm class="pa-4">
                <v-flex xs10 align-center justify-space-between>
                    <v-text-field
                      prepend-icon="email"
                      placeholder="Email"
                      v-model="userCurrentEmail"
                      disabled
                    ></v-text-field>
                </v-flex>
                <v-flex xs10 align-center justify-space-between>
                  <v-text-field
                    prepend-icon="vpn_key"
                    placeholder="New Password"
                    v-model="newPassword"                    
                    type="password">
                  </v-text-field>
                </v-flex>
                <v-flex xs10>
                  <v-btn type="submit" block class="default_button">Password Update</v-btn>
                </v-flex>
                <p class="feedback-successful" v-if="passowrdFeedback">{{passowrdFeedback}}</p>
              </v-container>
            </v-card>
          </form>
          <form @submit.prevent="changeCurrency">
          <v-card>
            <v-card-title class="py-4 center">
              <h4>Update Currency</h4>
            </v-card-title>
            <v-container grid-list-sm class="pa-4">
              <v-layout row wrap>
                <v-flex xs10 align-center justify-space-between>
                  <v-layout align-center>
                    <v-text-field
                      prepend-icon="local_atm"
                      placeholder="Currency"
                      v-model="currency"
                    ></v-text-field>
                  </v-layout>
                </v-flex>
                <v-flex xs10>
                  <v-btn type="submit" block  class="default_button">Currency Update</v-btn>
                </v-flex>
                <p class="feedback-successful" v-if="currencyFeedback">{{currencyFeedback}}</p>
              </v-layout>
            </v-container>
          </v-card>
        </form>


        <form @submit.prevent="changeTax">
          <v-card>
            <v-card-title class="py-4 center">
              <h4>Update Tax Rate</h4>
            </v-card-title>
            <v-container grid-list-sm class="pa-4">
              <v-layout row wrap>
                <v-flex xs10 align-center justify-space-between>
                  <v-layout align-center>
                    <v-text-field
                      prepend-icon="local_atm"
                      placeholder="Tax"
                      v-model="tax"
                    ></v-text-field>
                  </v-layout>
                </v-flex>
                <v-flex xs10>
                  <v-btn type="submit" block  class="default_button">Tax Rate</v-btn>
                </v-flex>
                <p class="feedback-successful" v-if="taxFeedback">{{taxFeedback}}</p>
              </v-layout>
            </v-container>
          </v-card>
        </form>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import db from '@/firebase/init'
import firebase from 'firebase'
import moment from 'moment'
export default {
  name:'Settings',
  components: {
     Navbar
  },
  data(){
    return{
       passowrdFeedback:'',
       currencyFeedback:'',
       taxFeedback:'',
       newPassword:'',
       userCurrentEmail:'',
       currency:'',
       tax:null,
    }
  },
  created(){

      // Current User Email
      var user = firebase.auth().currentUser;
      if (user != null) {
        this.userCurrentEmail = user.email;
      }

      // Current Currency
      db.collection("settings").doc('config').onSnapshot(doc =>{
         this.currency = doc.data().currency
      })

      // Current Tax
      db.collection("settings").doc('config').onSnapshot(doc =>{
         this.tax = doc.data().tax
      })


  },
  methods:{
      changePassword(){
          var user = firebase.auth().currentUser;
          var newEmail = this.userCurrentEmail;
          var newPassword = this.newPassword;

            user.updateEmail(newEmail).then(function() {
            // Update successful.
            })
            user.updatePassword(newPassword)
            .catch((e)=>{
            this.passowrdFeedback="Password updated successfully. You have to login again with new password"
            })
      },
      changeCurrency(){
            if(this.currency){
            let ref = db.collection('settings').doc('config');
              ref.update({
                currency:this.currency
              })
              this.currencyFeedback="Currency updated successfully"
            }
      },
      changeTax(){
            if(this.tax){
            let ref2 = db.collection('settings').doc('config');
              ref2.update({
                tax:this.tax
              })
              this.taxFeedback="Tax rate updated successfully"
            }
      }
  }

}
</script>

<style scoped>

.feedback-successful{
  color: green;
  text-align: center;
}
h4{
  margin-left: 1%;
  font-weight: normal;  
}

.application .theme--light.card, .theme--light .card {
    background-color: #303030!important;
}

.primary--text {
  color: #757575!important; 
}

</style>
