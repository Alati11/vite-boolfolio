
  
  <script>
  import axios from 'axios';
  export default {
    components: {
      
    },
    data() {
      return {
       title: 'Giuseppe',
       job: 'Tennista'
        
      }
    },
    methods: {
      
    },
    created() {
      
    }
  }
  </script>
<template>
    <div>
        <div class="container">
            <h1>{{ title }}</h1>
            <h2>{{ job }}</h2>
            <p>la mia app con vue</p>
        </div>
    </div>

</template>