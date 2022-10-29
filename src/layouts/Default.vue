<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/"><Logo /></g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue';

export default {
  components: {
    Logo
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 1000px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

a{
  text-decoration: none;
}

.nav__link {
  margin-left: 20px;
  color: #00a672;
  font-weight: normal;
}

.active--exact{
  font-weight: bolder;
}
</style>
