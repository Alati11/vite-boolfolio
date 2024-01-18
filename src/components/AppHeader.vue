
  <script>
  export default {
   
  }
  </script>

<template>
    <header>
      <div>
        <nav>
          <ul class="nav-header">
            <li class="nav-link">
              <div>
                Logo
                <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
              </div>
            </li>
            <li class="nav-link">
              Search
            </li>
            <li class="nav-link">
              <div >
                <router-link class="nav-link" :to="{ name: 'projects.index'}">Progetti</router-link>
                <router-link class="nav-link" :to="{ name: 'contacts' }">Contatti</router-link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <style lang="scss" scoped>
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    color: black;
    background-color: #72F243;

  }

*a {
  color: black;
}

  *a:hover {
    color: whitesmoke;
    font-size: 20px;
  }

  .nav-link {
    font-size: 19px;
    list-style: none;
    margin: 0 10px;
  }
  </style>