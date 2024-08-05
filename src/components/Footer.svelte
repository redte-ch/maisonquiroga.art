<script lang="ts">
  export let footerItems: { text: string; href: string }[]
</script>

<footer class="Footer">
  <p class="Footer-p">
    <span class="Footer-p-span">;</span>
    {#each footerItems as { text, href }}
      <a class="Footer-p-a" {href}>
        {text}
      </a>
    {/each}

    <span class="Footer-p-span">.</span>
  </p>
</footer>

<style>
  .Footer {
    @apply animate-fade;
  }

  .Footer-p-span {
    @apply font-bold;
  }

  .Footer-p-a {
    @apply text-sm;
  }
</style>
