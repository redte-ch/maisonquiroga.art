<script lang="ts">
  export let title: string
  export let items: { year: number; text: string }[]
</script>

<section class="Curriculum">
  <h1 class="Curriculum-h1">[{title}]</h1>

  {#each items as { year, text }}
    <div class="Curriculum-col">
      <p class="Curriculum-col-row-left">{year}</p>
      <p class="Curriculum-col-row-right">{text}</p>
    </div>
  {/each}
</section>

<style>
  .Curriculum {
    @apply animate-fade;
  }

  .Curriculum-h1 {
    @apply text-sm;
    @apply font-bold;
    @apply lowercase;
    @apply text-gray-900;
  }

  .Curriculum-col {
    @apply grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10;
  }

  .Curriculum-col-row-left {
    @apply col-start-1;
    @apply font-normal;
  }

  .Curriculum-col-row-right {
    @apply col-span-5 col-start-2 sm:col-span-7 md:col-span-6;
    @apply font-light;
  }

  .Curriculum-col-row-left,
  .Curriculum-col-row-right {
    @apply mt-2;
  }
</style>
