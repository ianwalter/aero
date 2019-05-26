<script>
  let preventDefault = e => e.preventDefault()
</script>

<div class="container w-auto mx-5 sm:mx-auto mt-5">

  <h1 class="text-4xl font-semibold">Buttons</h1>

  <p class="text-lg">
    Elements that users click or touch to perform an action.
  </p>

  <div class="pt-10">

    <div class="example">
      <a href="/" on:click={preventDefault} class="button button-blue">
        Anchor btn-indigo
      </a>
    </div>

  </div>

</div>
