
  <script>
  export default {
   
  }
  </script>

<template>
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'projects.index'}">Progetti</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'contacts' }">Contatti</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <style lang="scss" scoped>
  </style>