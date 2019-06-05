<script>
  import * as eva from 'eva-icons'
  import { onMount } from 'svelte'

  onMount(() => eva.replace())
</script>

<a href="#alert">
  <h1 class="text-4xl font-semibold">Alert</h1>
</a>

<p class="text-lg py-2">
  An element that contains a message designed to give users context around
  something that has recently happened. These messages should draw more
  attention than standard text.
</p>

<div class="pt-8 pb-4">

  <div class="alert alert-info">

    <i
      data-eva="info"
      data-eva-height="32"
      data-eva-width="32"
      class="float-left mr-3 fill-current"
    />

    <strong>Hey hey!</strong> Here is some info to read.

    <i
      data-eva="close"
      data-eva-height="32"
      data-eva-width="32"
      class="float-right fill-current cursor-pointer"
    />

  </div>

  <div class="alert alert-success mt-8">

    <i
      data-eva="checkmark-circle-2"
      data-eva-height="32"
      data-eva-width="32"
      class="float-left mr-3 fill-current"
    />

    <strong>Success!</strong> You have seen this alert.

    <i
      data-eva="close"
      data-eva-height="32"
      data-eva-width="32"
      class="float-right fill-current cursor-pointer"
    />

  </div>

</div>
