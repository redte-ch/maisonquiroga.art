<script lang="ts">
  import { bioArticle } from './BioArticle'
</script>

<article class="BioArticle">
  <h1 class="BioArticle-h1">{bioArticle.title}</h1>
  <p class="BioArticle-p">{bioArticle.text}</p>
</article>

<style lang="postcss">
  .BioArticle {
    @apply animate-fade;
    @apply block sm:inline-block;
    @apply w-full sm:w-1/2 md:w-2/3 lg:w-3/4;
    @apply sm:pr-8;
    @apply align-top;
  }

  .BioArticle-h1 {
    @apply sr-only;
  }
</style>
