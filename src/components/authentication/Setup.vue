<template>
  <v-app>
    <!-- Setup In area -->
    <div v-if="setup == false">
      <v-container  class="setup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>

              <v-card>
                <v-card-text>
                  <v-container>
                    <h1>Easy Business Manager</h1>

                    <form @submit.prevent="setupPuku">

                      <v-layout row>
                        <v-flex xs12>
                          <v-text-field
                            v-model="formData.email"
                            name="email"
                            label="Email"
                            type="email"
                            required></v-text-field>
                        </v-flex>
                      </v-layout>

                      <v-layout row>
                        <v-flex xs12>
                          <v-text-field
                            v-model="formData.password"
                            label="Password"
                            type="password"
                            required></v-text-field>
                        </v-flex>
                      </v-layout>

                      <v-layout row>
                        <v-flex xs12>
                          <v-text-field
                            v-model="formData.confirm_password"
                            label="Confirm Password"
                            type="password"
                            required></v-text-field>
                        </v-flex>
                      </v-layout>

                      <v-layout row>
                        <v-flex xs12>
                          <v-text-field
                            v-model="formData.currency"
                            name="currency"
                            label="Currency"
                            type="text"
                            required></v-text-field>
                        </v-flex>
                      </v-layout>

                      <v-layout row>
                        <v-flex xs12>
                          <v-text-field
                            v-model="formData.tax"
                            name="tax"
                            label="Tax"
                            type="text"
                           ></v-text-field>
                        </v-flex>
                      </v-layout>

                      <v-layout row>
                        <v-flex xs12>
                          <v-btn block class="default_button" type="submit">Get Started</v-btn>
                        </v-flex>
                      </v-layout>
                      <p class="feedback-error">{{feedback}}</p>
                    </form>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
      </v-container>
    </div>


    <!-- Sign In area -->
    <div v-if="setup == true" class="sign-in">
      <v-container >
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>

              <v-card>
                <v-card-text>
                  <v-container>
                    <h1>Easy Business Manager</h1>

                    <form @submit.prevent="signIn">

                      <v-layout row>
                        <v-flex xs12>
                          <v-text-field
                            v-model="formData.email"
                            name="email"
                            label="Email"
                            type="email"
                            required></v-text-field>
                        </v-flex>
                      </v-layout>

                      <v-layout row>
                        <v-flex xs12>
                          <v-text-field
                            v-model="formData.password"
                            name="password"
                            label="Password"
                            type="password"
                            required></v-text-field>
                        </v-flex>
                      </v-layout>

                      <v-layout row>
                        <v-flex xs12>
                          <v-btn  class="default_button" type="submit">Sign In</v-btn>
                        </v-flex>
                      </v-layout>

                      <p class="feedback-error">{{feedback}}</p>

                    </form>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    name:'Setup',
    data () {
      return {
        setup:null,
        errorMessage:null,
        feedback:'',
        formData:{
            email:'',
            password:'',
            currency:'',
            tax:0,
        }
      }
    },
    methods: {
        setupPuku(){
            // If password matched
            if(this.formData.password == this.formData.confirm_password){
              firebase.auth().createUserWithEmailAndPassword(this.formData.email,this.formData.password)
                .then(()=>{
                  let ref = db.collection('settings');
                    ref.doc("config").set({
                      currency:this.formData.currency,
                      tax:this.formData.tax,
                      configuration:"done",
                      timestamp:Date.now()
                    })
                })
                .then((user)=>{
                    this.$router.replace('/dashboard')
                })
                .catch((e)=>{
                  this.feedback = e.message;
                })

             }else{
              this.feedback = "Confirm password not matched";
             }

        },
        signIn(){
            firebase.auth().signInWithEmailAndPassword(this.formData.email,this.formData.password)
                .then((user)=>{
                  this.$router.replace('/dashboard')
                })
                .catch((e)=>{
                    this.feedback = "Wrong Email or Password"
                    //alert(e.message)
                })
        }
    },
    created(){
          var self = this;
          var settingsRef = db.collection("settings").doc("config");
            settingsRef.get().then(function(doc) {
              if (doc.exists) {
                  self.setup = true
              }else{
                  self.setup = false
              }
            })
    }
}
</script>

<style scoped>

.setup{
  margin-top:10%;
  color:#1976d2 !important;
}

.sign-in{
  margin-top:10%;
  color:#1976d2 !important;
}
.feedback-error{
  color: #f44336;
  text-align: center;
}
h1{
  color:#FFF!important;
}
.application .theme--light.card, .theme--light .card {
  background: #424242!important;
}
.primary--text {
  color: #FFF!important; 
}

</style>
