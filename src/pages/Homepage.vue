
<script>
export default {

  data() {
    return {
      title: 'Giuseppe',
      job: 'Full Stack Developer'

    }
  },

  methods: {

  },
  created() {

  }
}
</script>
<template>
  <div class="container">
    <div class="row d-flex">
      <div class="col">
        <div class="card-ga">
          <p class="description">{{ job }}</p>
          <h1 class="name">Giuseppe Alati</h1>
          <p class="description">Sono un programmatore FullStack Developer di Padova</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row last-project">
      <div class="col">
          <img class="img-last-project" src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705622400&semt=ais" alt="DEV">
      </div>
      <div class="col">
        <div class="card-body">
          <h3>I Miei Ultimi Lavori</h3>
          <p class="text-project">Boolflix | FrontEnd | 2023</p>
          <div class="view">
              <div>
                <router-link class="nav-link" :to="{ name: 'projects.index' }">Visualizza
                </router-link>  
              </div>
             
              <div>
                         <span><font-awesome-icon icon="arrow-right-long" /></span>            
                  <svg class="arrow-view " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                      <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 
                      32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
                  </svg>  
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      
</template>

<style lang="scss" scoped>
.card-ga {
  width: 900px;
  height: 100%;
  margin-left: 50px;
  margin-top: 50px;
  padding: 20px;
  line-height: 1.8em;
}


.name {
  font-size: 100px;
  margin-top: 65px;
  margin-bottom: 65px;
  ;
}

.description {
  color: whitesmoke;
  font-size: 30px;
}

.last-project {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  margin-left: 50px;
  margin-top: 220px;
}

.img-last-project {
  border-radius: 10%;
  width: 300px; 
  height: 200px;
  margin-right: 20px;
}

.card-body {
  padding: 20px;
  line-height: 1.8em;
}

.nav-link {
  margin-top: 50px;
  font-size: 20px;
  color: gray;
}
 
.nav-link:hover {
  color: whitesmoke;
}
.text-project {
  margin-bottom: 50px;
  color: gray;
}

.arrow-view {
  color:whitesmoke;
  width: 30px;
  margin-left: 25px;
}

.view {
  display:flex;
}
</style>