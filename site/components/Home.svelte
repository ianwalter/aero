<script>
  import { go } from '@ianwalter/history-router'
</script>

<div class="container w-auto mx-5 sm:mx-auto mt-5">

  <h1 class="text-6xl font-bold">aero</h1>

  <p class="text-xl font-medium">
    An open-source stylesheet for open-source software
  </p>

  <p class="my-2 text-gray-800 text-lg leading-relaxed">
    The stylesheet is built with
    <a href="https://tailwindcss.com/">Tailwind CSS</a> and benefits from all of
    the utility classes it provides. End-user applications should use
    <a href="https://www.purgecss.com/">Purgecss</a> to remove unused styles and
    produce a stylesheet that is tailored to the specific application. Click on
    the links below to see examples of styles grouped by CSS rule or component:
  </p>

  <ul class="my-5 leading-loose">
    <li>
      <a href="/buttons" on:click={go} class="text-lg">
        Buttons
      </a>
    </li>
    <li>
      <a href="/cards" on:click={go} class="text-lg">
        Cards
      </a>
    </li>
    <li>
      <a href="/alerts" on:click={go} class="text-lg">
        Alerts
      </a>
    </li>
    <li>
      <a href="/tabs" on:click={go} class="text-lg">
        Tabs
      </a>
    </li>
  </ul>

</div>
