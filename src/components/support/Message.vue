<template>
  <v-app>
    <div>
      <v-container>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3 class="mt-5">
              <v-card class="pa-4 mt-5" style="background:#424242!important;">
                <v-card-text>
                  <v-container>
                    <h4 class="display-1">{{pr_subject}}</h4>
                    <div class="message-box" v-chat-scroll>
                      <v-list  v-for="message in supportmessages" :key="message.id">
                        <b style="margin-left:10px;">{{message.sender_name}}</b>
                        {{message.message}}
                      </v-list>
                    </div>
                    <br>
                    <form @submit.prevent="sendMessage">
                      <v-flex xs11 align-center justify-space-between>
                        <v-layout align-center style="margin-left:20px">
                          <v-text-field
                            required
                            v-model="message"
                            placeholder="Enter message"
                          ></v-text-field>
                        </v-layout>
                      </v-flex>
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
import moment from 'moment'

export default {
  name: 'Message',
  props:['pr_name','pr_subject','pr_time'],

  data(){
    return{
      supportmessages:[],
      message:null,
      message_id:this.$route.params.id,
    }
  },
  methods:{
    sendMessage(){
      let ref = db.collection('supportmessage');
      ref.add({
          sender_name:this.pr_name,
          message:this.message,
          message_id:this.message_id,
          sending_time:Date.now()
      })
      this.message = null
    }
  },
  created(){

    // Show All Sales
    let ref = db.collection('supportmessage').where("message_id",'==',this.$route.params.id).orderBy('sending_time', 'desc')

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if(change.type == 'added'){
          let doc = change.doc
          this.supportmessages.push({
            sender_name:doc.data().sender_name,
            message:doc.data().message,
          })
        }
      })
    })

  },
  mounted(){

  }
}
</script>

<style scoped>
  .application .theme--light.list, .theme--light .list {
    margin-left:16px;
    margin-bottom: 10px;
    color:#FFF;
    border:1px solid #757575;
    background: #424242!important;
  }
  .display-1{
    margin-top: 30px;
    margin-bottom: 10px;
    padding-left:0px;
    color: #FFF!important;
    text-transform: uppercase;
  }
  .message-box{
    width: 500px;
    max-height: 300px;
    overflow: auto;
  }
  .message-box::-webkit-scrollbar{
    width: 3px;
  }
  .message-box::-webkit-scrollbar-track{
    background: #FFF;
  }
  .message-box::-webkit-scrollbar-thumb{
    background: #FFF;
  }
  .primary--text {
    color: #757575!important; 
  }
</style>
