<template>
  <el-header>
    <img src="../assets/logo.png">
    <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/About">About</router-link></li>
        <li><router-link to="/Projects">Projects</router-link></li>
        <li><router-link to="/Contact">Contact</router-link></li>
      </ul>
    </div>
  </el-header>
</template>
<script>
export default {
  name: 'Header',
}
</script>