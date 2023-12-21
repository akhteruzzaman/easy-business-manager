<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex class="settings_doc">
                <h1>Settings</h1>
                <p>Settings of Puku CRM</p>
                <v-divider class="my-3" style="background:#3c3642;"></v-divider>
                <h3>Change Password</h3>
                <p>
                  Add your new password here. After changing the password. Your session will expired<br>
                  So you have to login again with your new password.
                </p>
                <img src="./../../assets/documentation/settings-password.png" class="mb-3"><br>
                <h3>Change Currency</h3>
                <p>
                  You can change the currency here.
                </p>
                <img src="./../../assets/documentation/settings-currency.png" class="mb-3"><br>
                <h3>Change Tax Rate</h3>
                <p>
                  You can change the tax rate here.
                </p>
                <img src="./../../assets/documentation/tax.png" class="mb-3"><br>
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
  name:'SettingsDoc',
  components: {
     Navbar
  },
}
</script>

<style>
  .settings_doc{
    color: #FFF9E1!important;
  }
</style>
