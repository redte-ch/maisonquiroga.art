<script lang="ts" context="module">
  export type NavItemProps = {
    text: string
    href: string
  }
  export type NavProps = NavItemProps[]
</script>

<script lang="ts">
  export let nav: NavProps
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
