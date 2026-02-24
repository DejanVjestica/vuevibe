<template>
  <nav class="nav">
    <ul>
      <li><RouterLink to="/Services">Services</RouterLink></li>
      <li><RouterLink to="/Consult">Schedule a Consult</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 3.7rem;
  align-items: center;

  ul {
    display: contents;

    li {
      display: contents;
    }
  }
}
</style>
