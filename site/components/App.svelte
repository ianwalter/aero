<style>
  @import "../main.css";
</style>

<script>
  import { router } from '@ianwalter/history-router'

  let view
  router.add('/', async () => {
    const { default: Home } = await import('./Home')
    view = Home
  })
  router.add('/examples', async () => {
    const { default: Examples } = await import('./Examples')
    view = Examples
  })
  router.go()
</script>

<main class="font-sans">
  <svelte:component this={view} />
</main>
