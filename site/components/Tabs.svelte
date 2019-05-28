<script>
  let activeTab = 'home'
  const activateTab = evt => {
    evt.preventDefault()
    activeTab = evt.target.getAttribute('href')
  }
</script>

<div class="container w-auto mx-5 sm:mx-auto mt-5">

  <h1 class="text-4xl font-semibold">Tabs</h1>

  <p class="text-lg">

  </p>

  <div class="pt-10">

    <div class="tabs">

      <a
        href="home"
        class="tab {activeTab === 'home' ? 'active' : ''}"
        on:click={activateTab}
      >
        Home
      </a>

      <a
        href="somePage"
        class="tab {activeTab === 'somePage' ? 'active' : ''}"
        on:click={activateTab}
      >
        Some Page
      </a>

      <a
        href="about"
        class="tab {activeTab === 'about' ? 'active' : ''}"
        on:click={activateTab}
      >
        About Us
      </a>

      <a
        href="contact"
        class="tab {activeTab === 'contact' ? 'active' : ''}"
        on:click={activateTab}
      >
        Contact
      </a>

    </div>

  </div>

</div>
