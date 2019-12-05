<template>
<div>
<nav class="navbar fire-background" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link class="navbar-item nav-title" to="/">
        Volcanoes<strong>DB</strong>
    </router-link>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-end">
      <router-link to="/sobre" class="navbar-item">
        Sobre
      </router-link>
       <router-link to="/vulcoes" class="navbar-item">
        Vulcões
      </router-link>
       <router-link to="/sobre" class="navbar-item">
        Erupções
      </router-link>
    </div>

  
  </div>
</nav>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .fire-background {
        background-color: #ff3311;
    }

    .fire-background a {
        color: #fff;
    }

    .fire-background a:hover,  
    .fire-background a:active,
    .fire-background a:focus {
        color: #fff;
        background-color: #ff2200;
    }

    .fire-background .nav-title {
        font-size: 1.3em;
        font-weight: 600;
        color: #333;
    }

    .fire-background .nav-title:hover, 
    .fire-background .nav-title:active,  
    .fire-background .nav-title:focus {
        color: #333;
    }
    
</style>

