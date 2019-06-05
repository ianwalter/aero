<script>
  import { go } from '@ianwalter/history-router'
  import * as eva from 'eva-icons'
  import { onMount } from 'svelte'

  onMount(() => eva.replace())
</script>

<div class="container w-auto m-5 sm:mx-auto">

  <h1 class="text-6xl font-bold">aero</h1>

  <p class="text-xl font-semibold">
    An open-source stylesheet for open-source software
  </p>

  <p class="my-2 text-lg leading-relaxed">
    The stylesheet is built with
    <a href="https://tailwindcss.com/">Tailwind CSS</a> and benefits from all of
    the utility classes it provides. End-user applications should use
    <a href="https://www.purgecss.com/">Purgecss</a> to remove unused styles and
    produce a stylesheet that is tailored to the specific application. Click on
    the links below to see examples of styles grouped by CSS rule or component:
  </p>

  <div class="mt-8 flex">

    <a
      href="/examples"
      on:click={go}
      class="button button-blue flex items-center mr-4"
    >
      <i data-eva="browser" class="fill-current mr-2"></i> Examples
    </a>

    <a
      href="https://github.com/ianwalter/aero"
      class="button button-blue flex items-center"
    >
      <i data-eva="github" class="fill-current mr-2"></i> Source
    </a>

  </div>

</div>
