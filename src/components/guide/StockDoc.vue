<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex class="stock_doc">
                <h1>Stock</h1>
                <p>Collection of all Items</p>
                <v-divider class="my-3" style="background:#3c3642;"></v-divider>
                <img width="100%" src="./../../assets/documentation/items.png" class="mb-3"><br>
                <h3>Features</h3>
                <div class="mb-3">
                  <li>Display all Items</li>
                  <li>Search Items</li>
                  <li>Edit Item</li>
                  <li>Delete Item</li>
                </div>
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
  name:'StockDoc',
  components: {
     Navbar
  },
}
</script>

<style>
  .stock_doc{
    color: #FFF9E1!important;
  }
</style>
