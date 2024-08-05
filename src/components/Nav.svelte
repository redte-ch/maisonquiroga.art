<script lang="ts">
  export let navItems: { text: string; href: string }[]
</script>

<nav class="Nav">
  {#each navItems as { text, href }}
    <a class="Nav-a" {href}>
      /{text}
    </a>
  {/each}
</nav>

<style>
  .Nav {
    @apply animate-fade;
  }

  .Nav-a {
    @apply pr-4 sm:pr-8;
    @apply text-sm sm:text-base;
  }
</style>
