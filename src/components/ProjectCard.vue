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
    <div class="card card-project">
      <h3>{{ project.title }}</h3>
      <p>{{ project.type_id}}</p>
      <!-- <p>{{ project.description }}</p> -->
      <!-- <p v-for="tech in project.technologies">{{ tech.name }}</p> -->
      <!-- <p v-if="project.type">{{  project.type.name }}</p> -->
      <router-link :to="{ name: 'projects.show', params: { slug: project.slug }}" >Leggi la descrizione</router-link>
    </div>
</template>
  

  <style lang="scss" scoped>
    .card.card-project {
      padding: 20px;
      border-radius: 8px;
      background: #dedede;
    }
  </style>