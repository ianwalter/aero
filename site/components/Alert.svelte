<script>
  import * as eva from 'eva-icons'
  import { onMount } from 'svelte'

  onMount(() => eva.replace())
</script>

<div class="container w-auto mx-5 sm:mx-auto mt-5">

  <h1 class="text-4xl font-semibold">Alert</h1>

  <p class="text-lg">
    An element that contains a message designed to give users context around
    something that has recently happened. These messages should draw more
    attention than standard text.
  </p>

  <div class="pt-10">

    <div class="alert alert-info">
      <i data-eva="info" data-eva-height="32" data-eva-width="32" class="float-left mr-3 fill-current"></i>
      <strong>Hey hey!</strong> Here is some info to read.
    </div>

    <div class="alert alert-success mt-8">
      <i data-eva="checkmark-circle-2" data-eva-height="32" data-eva-width="32" class="float-left mr-3 fill-current"></i>
      <strong>Success!</strong> You have seen this alert.
    </div>

  </div>

</div>
