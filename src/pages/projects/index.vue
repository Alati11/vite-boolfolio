  <script>
  import axios from 'axios';
  
  import ProjectCard from '../../components/ProjectCard.vue';
  export default {
    components: {
      ProjectCard
    },
    data() {
      return {
        projects: [],
        BASE_URL: 'http://127.0.0.1:8000/api'
      }   
    },
    methods: {
      fetchProjects() {
        axios.get(`${this.BASE_URL}/projects`)
        .then((res) => {
          console.log(res.data)
          this.projects = res.data.results
          console.log(res.data.results);
        }) 
        //messaggio di errore
        .catch((error) => {
          console.error('Errore durante la richiesta:', error);
        }); 
      }
    },
    created() {
      this.fetchProjects()
    },
  }
  </script>

<template>
    <div>
      <div class="container">
        <h1 class="project-title">I Miei Progetti</h1>
      </div>
  
      <div class="container">
        <div class="card-style">
          <ProjectCard class="card card-index" v-if="projects.length"  v-for="project in projects" :project="project" :key="project.id" />
          <div v-else>Loading...</div>
        </div>
      </div>
    </div>
</template>


  <style lang="scss" scoped>  
  // .grid {
  //   display: grid;
  //   gap: 1.5rem;
  //   grid-template-columns: repeat(6 ,1fr);
  // }

  .card-style {
    display: flex;
    flex-wrap: wrap;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 350px;
    height: 550px;
    padding: 20px;  
    background: rgba(255, 255, 255, 0.1); 
    color: black;
    border: 1px solid black;
    border-radius: 1.5em;
    text-align: center;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateZ(0);
    backdrop-filter: blur(5px);
    filter: drop-shadow(30px 30px 50px black);
}
.card-index {
  margin: 20px auto;
  padding: 20px;
  font-size: 30px;
}

.project-title {
  margin: 20px auto;
  text-align: center;
}

</style>