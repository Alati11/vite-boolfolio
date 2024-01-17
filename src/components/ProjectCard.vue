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

    <div class="card card-project" v-if="project">
      <h3>{{ project.title }}</h3>
      <p>{{ project.type_id}}</p>
      <li class="li-tech" v-for="technology in project.technologies">{{ technology.name }}</li>
      
      <!-- <router-link :to="{ name: 'projects.show', params: { slug: project.slug }}" >Leggi la descrizione</router-link> -->

    </div>
</template>
  

  <style lang="scss" scoped>
    .card.card-project {
      padding: 20px;
      border-radius: 8px;
      background: #dedede;
      margin: 20px auto;
      width: 300px;
      height: 350px; 

    }

    .li-tech {
      display:flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      font-size: 16px;
    }
  </style>