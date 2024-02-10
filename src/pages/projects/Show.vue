<script>
import axios from 'axios'
export default {
  // props: {
  //   slug: String
  // },
  data() {
        return {
            project: null,
            BASE_URL: 'http://127.0.0.1:8000/api'
        };
    },
  methods: {
    fetchProject() {
      axios.get(`${this.BASE_URL}/projects/${this.$route.params.slug}`)
      .then(res => {
        this.project = res.data.project
        console.log(this.project)

      }).catch((error) => {
        console.log('progetto non trovato',error.response)

        if(error.response.status === 404) {
          this.$router.push({name: 'not-found'})
        }

      })
    }
  },
  created() {
    this.fetchProject()
  }
}
</script>

<template>
    <div v-if="project">
      <div class="container card-details card-show">
          <h1>{{ project.title }}</h1>
          <img  class="thumb" :src="project.thumb" alt="">
          <ul class="tech">
            <li>
              <p class="description-text" v-html="project.description"></p>
            </li>
            <li>
              <!-- <p>{{ project.slug }}</p> -->
            </li>
            <li>
              <p >{{ project.type?.name }}</p>
            </li>
            <li class="tech-li" v-if="project.technologies" >
                <p class="tech-text" v-for="tech in project.technologies" >{{ tech.name }}</p>
            </li>
          </ul>
      </div>
    </div>
  </template>

<style lang="scss" scoped>


.card-show {
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.1); 
    color: whitesmoke;
    border: 2px solid black;
    border-radius: 1.5em;
    text-align: center;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateZ(0);
    backdrop-filter: blur(5px);
    filter: drop-shadow(30px 30px 50px black);
}
.card-details {  
    margin: 10px auto;
    width:500px;
    padding: 15px;
    height: 650px;
    animation: moveCard 5s;
}

@keyframes moveCard {
    0%{
        transform: rotateX(360deg) rotateY(0deg);
    }
    50%{
        transform: rotateX(60deg) rotateY(-45deg);
    }
    100%{
        transform: rotateX(360deg) rotateY(0deg);
    }
}

.tech {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;  
  height: 100%;
  color: white; 
  // background-color: #122462;
}

.tech-text {
  background-color:#122462;
  border-radius: 8px;
  padding: 6px;
}

.tech-li {
  display: flex;
  justify-content: center;
  margin: 0px 30px;
  gap: 20px;
  line-height: 1.2em;
  font-size: 17px;
}
.thumb {
  max-width: 100%; 
  border-radius: 8px;
  margin: 20px;
}

.description-text {
  font-size: 22px;
}
</style>
