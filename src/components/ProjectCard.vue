<script>

    export default {
        components: {
        },
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        props: {
            project: {
                type: Object,
                required: true
            }
        },
        created() {
        }
    }
</script>

<template>
    <div class="card-project" v-if="project">
        <h3 class="card-title">{{ project.title }}</h3>
        <img  class="thumb" :src="project.thumb" alt="">
        <p>{{ project.type.name}}</p>
        <ul class="link-tech">
          <li class="link-tech_details" v-for="technology in project.technologies" :key="project.id">{{ technology.name }}
          </li>
        </ul>
        <div>
          <router-link class="btn-project" :to="{ name: 'projects.show', params: { slug: project.slug }}" >Dettagli</router-link>
        </div>
    </div>
</template>
  

  <style lang="scss" scoped>
   

.card-project {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.1em;  
  color: whitesmoke;
  border: 2px solid black;
  padding: 20px;
}

.card-title {
  color: white;
}
.thumb {
  max-width: 100%; 
  border-radius: 8px;
}

.btn-project {
  width: 80px;
  background-color: #72F243;
  color:black;
  border-radius: 8px;
  font-size: 18px;
  padding: 10px;
}

.btn-project:hover {
  color:white;
}

.project-title {
  color: white;
}

.link-tech_details {
  margin: 10px 10px;
  background-color: #356438;
  color: white; 
  width: 70px;
  border-radius: 8px;
  padding: 6px;
  line-height: 20px;
  font-size: 17px;
}

.link-tech {
      color: white;
      width: 60px;
      border-radius: 8px;
      padding: 10px;
      margin: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;

    }
  </style>