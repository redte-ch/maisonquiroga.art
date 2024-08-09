<script lang="ts">
  import { nav } from './Nav'
</script>

<nav class="Nav">
  {#each nav as { text, href }}
    <a class="Nav-a" {href}>
      /{text}
    </a>
  {/each}
</nav>

<style lang="postcss">
  .Nav {
    @apply animate-fade;
  }

  .Nav-a {
    @apply pr-4 sm:pr-8;
    @apply text-sm sm:text-base;
  }
</style>
