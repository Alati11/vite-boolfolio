
  <script>
  export default {

    data() {
      return {
       title: 'Giuseppe',
       job: 'Full Stack Developer'
        
      }
    },
    mounted(){
      console.log('home page montata')

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
            <p>La mia app con Vue</p>
        </div>
    </div>

</template>