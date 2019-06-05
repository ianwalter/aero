<script>
  import * as eva from 'eva-icons'
  import { onMount } from 'svelte'

  let preventDefault = e => e.preventDefault()

  onMount(() => eva.replace())
</script>

<a href="#button">
  <h1 class="text-4xl font-semibold">Button</h1>
</a>

<p class="text-lg py-2">
  An element that users click or touch to perform an action.
</p>

<div class="pt-8 pb-4 flex items-center">

  <a href="/" on:click={preventDefault} class="button button-blue mr-4">
    Login
  </a>

  <a
    href="/"
    on:click={preventDefault}
    class="button button-blue flex items-center"
  >
    <i data-eva="plus-circle" class="fill-current mr-1"></i> Add User
  </a>

</div>
