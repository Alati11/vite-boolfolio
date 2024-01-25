
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
                <router-link class="nav-link" :to="{ name: 'home' }">G.A.</router-link>
              </div>
            </li>
            <li class="nav-link">
              <div >
                <router-link class="nav-link" :to="{ name: 'projects.index'}">PORTFOLIO</router-link>
                <router-link class="nav-link" :to="{ name: 'projects.index'}">CHI SONO</router-link>
                <router-link class="nav-link" :to="{ name: 'contacts' }">CONTATTI</router-link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <style lang="scss" scoped>
  .nav-header {
    height:90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    color: gray;
    background-color: transparent;
    border-bottom: 2px solid gray;

  }

*a {
  color: black;
}

  *a:hover {
    color: whitesmoke;
  }

  .nav-link {
    font-size: 19px;
    list-style: none;
    margin: 0 10px;
    color: gray;
  }
  </style>