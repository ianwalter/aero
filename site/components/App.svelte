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
  router.add('/button', async () => {
    const { default: Button } = await import('./Button')
    view = Button
  })
  router.add('/card', async () => {
    const { default: Card } = await import('./Card')
    view = Card
  })
  router.add('/alert', async () => {
    const { default: Alert } = await import('./Alert')
    view = Alert
  })
  router.add('/tabs', async () => {
    const { default: Tabs } = await import('./Tabs')
    view = Tabs
  })
  router.go()
</script>

<main class="font-sans">
  <svelte:component this={view} />
</main>
