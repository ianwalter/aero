<script>
  import * as eva from 'eva-icons'
  import { onMount } from 'svelte'

  onMount(() => eva.replace())
</script>

<div class="container w-auto mx-5 sm:mx-auto mt-5">

  <h1 class="text-4xl font-semibold">Card</h1>

  <p class="text-lg">
    An element remeniscent of a playing card in shape used to create a
    separation between the contained content and other content on the page. The
    separation is acheived by sorrounding the card with a shadow making it
    appear to be slightly raised above the page surface.
  </p>

  <div class="pt-10 flex">

    <div class="card">

      <div class="py-8 bg-blue-900 text-center rounded-t-lg">
        <h2 class="text-xl font-medium text-white">@ianwalter/bff</h2>
      </div>

      <div class="p-6 py-8">

        <p class=>
          Your friendly test runner/framework
        </p>

        <ul class="mt-6 leading-loose font-medium">
          <li>
            <a href="/">
              <i data-eva="browser" class="inline-block mr-2"></i>Website
            </a>
          </li>
          <li>
            <a href="/" class="flex items-center">
              <i data-eva="github" class="inline-block mr-2"></i>Source
            </a>
          </li>
        </ul>

      </div>

    </div>

  </div>

</div>
