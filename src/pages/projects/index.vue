
  
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
          console.log(res)
          this.projects = res.data.results
          console.log(res.data.results);
        })
      }
    },
    created() {
      this.fetchProjects()
    }
  }
  </script>

<template>
    <div>
      <div class="container">
        <h1>
          I Miei Progetti
        </h1>
      </div>
  
      <div class="container">
        <div class="grid">
          <ProjectCard class="card card-index" v-for="project in projects" :project="project" :key="project.id" />
        </div>
      </div>
    </div>
</template>


  <style lang="scss" scoped>
  .grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3,1fr);
  }

  .card {
    background: rgba(255, 255, 255, 0.1); 
    color: black;
    border: 2px solid black;
    border-radius: 1.5em;
    text-align: center;
    // line-height: 1.8em;
    // vertical-align: middle;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateZ(0);
    backdrop-filter: blur(5px);
    filter: drop-shadow(30px 30px 50px black);
}
  .card-index {
    width: 400px;
    height: 200px;
    margin: 20px auto;
    font-size: 30px;
}
  </style>