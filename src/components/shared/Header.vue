<template>
  <header>
    <b-row> 
      <b-navbar class="w-100" toggleable="md" type="dark" variant="info" sticky>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">Eurovision Voting</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="home">Home</b-nav-item>
            <b-nav-item  to="countries">Countries</b-nav-item>
            <b-nav-item to="results">Results</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
			</b-navbar>
    </b-row>
  </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
