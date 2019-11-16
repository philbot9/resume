<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>&copy; {{(new Date()).getFullYear()}} - Philip Klostermann</p>
      <p>
        <strong>Contact:</strong>
        <a href="mailto:philip.klostermann@gmail.com">philip.klostermann@gmail.com</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>