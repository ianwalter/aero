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
  router.add('/buttons', async () => {
    const { default: Buttons } = await import('./Buttons')
    view = Buttons
  })
  router.add('/cards', async () => {
    const { default: Cards } = await import('./Cards')
    view = Cards
  })
  router.go()
</script>

<main class="font-sans">
  <svelte:component this={view} />
</main>
