<template>
<div>
  <section class="hero bg-hero is-fullheight ">
    <!-- Hero head: will stick at the top -->

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          VOLCANOES
        </h1>
        <h3 class="subtitle">
          DATABASE
        </h3>
        <router-link to="/sobre" class="button is-large is-fire is-rounded">Saiba Mais</router-link>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
  
  </section>
  
</div>
</template>

<script>
export default {

}
</script>

<style>
  .bg-hero{
      background-image: url('https://i.pinimg.com/originals/63/37/a2/6337a2a4cfa9c09374d30117f9a269da.jpg'); 
      background-position: center center;
      background-repeat:  no-repeat;
      background-attachment: fixed;
      background-size:  cover;
      background-color: #999;
  }

  .title {
    font-weight: 600;
    color: #fff;
    font-size: 3.45em;
    font-family: 'Roboto', sans-serif;

  }

  @media (min-width: 508px) {
    .title {
      font-size: 5em;
    }
  }

  .subtitle {
    font-weight: 500;
    color: #ff3311;
    font-size: 3em;
    font-family: 'Roboto', sans-serif;
  }

  .is-fire {
    border-color: #ff3311;
    border: 2px solid;
    background: transparent;
    color: #ff3311;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    padding: 0px 3rem 0px 3rem;
  }

  .is-fire:hover {
    border-color: #ff3311;
    background: #ff3311;
    color: #fff;
  }
</style>