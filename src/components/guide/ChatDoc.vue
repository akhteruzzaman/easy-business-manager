<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex class="chat_doc">
                <h1>Live Chat</h1>
                <p>Customer Support with multiple visitors</p>
                <v-divider class="my-3" style="background:#3c3642;"></v-divider>
                <h3>Chat Link for visitors</h3>
                <p>
                  Add this  <b>/welcome</b> beside your software url<br>
                  For example if your software URL is mysoftwareurl.com<br>
                  Then your visitor can start chat from this link <b>mysoftwareurl.com/welcome</b><br>
                  This is how it will look.
                </p>
                <img src="./../../assets/documentation/chat.png" class="mb-3"><br>
                <h3>Visitors Information</h3>
                <p>
                  Visitors will fill this form with Name and What type of support they are looking for<br>
                  And then they can start chatting.
                </p>
                <img src="./../../assets/documentation/chat-visitors.png" class="mb-3"><br>

                <h3>List of all visitors </h3>
                <p>You can monitor all visitor list with their support requirement</p>
                <img src="./../../assets/documentation/chat-admin-list.png" class="mb-3"><br>

                <h3>Chat with Visitor </h3>
                <p>So its really easy to continue live chat with all visitors</p>
                <img src="./../../assets/documentation/chat-admin.png" class="mb-3"><br>
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
  name:'ChatDoc',
  components: {
     Navbar
  },
}
</script>

<style>
  .chat_doc{
    color: #FFF9E1!important;
  }

</style>
