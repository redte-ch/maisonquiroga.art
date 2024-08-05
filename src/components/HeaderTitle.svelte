<script lang="ts">
  export let h1: { sm: string; md: string; lg: string; '*': string }
  export let h2: { sm: string; md: string; lg: string; '*': string }
</script>

<div class="HeaderTitle">
  <h1 class="HeaderTitle-h1">{h1['*']}</h1>
  <h1 class="HeaderTitle-h1-sm">{h1.sm}</h1>
  <h1 class="HeaderTitle-h1-md">{h1.sm + ' ' + h1.md}</h1>
  <h1 class="HeaderTitle-h1-lg">{h1.sm + ' ' + h1.md + ' ' + h1.lg}</h1>
  <h2 class="HeaderTitle-h2">{h2['*']}.</h2>
  <h2 class="HeaderTitle-h2-sm">{h2.sm + ' ' + h2['*']}.</h2>
  <h2 class="HeaderTitle-h2-md">
    {h2.sm + ' ' + h2['*']}.
    <span class="HeaderTitle-h2--light">{h2.md}.</span>
  </h2>

  <h2 class="HeaderTitle-h2-lg">
    {h2.sm + ' ' + h2['*']}.
    <span class="HeaderTitle-h2--light">{h2.md}, {h2.lg}.</span>
  </h2>
</div>

<style>
  .HeaderTitle {
    @apply animate-fade;
  }

  .HeaderTitle-h1,
  .HeaderTitle-h1-sm,
  .HeaderTitle-h1-md,
  .HeaderTitle-h1-lg {
    @apply text-5xl;
    @apply text-primary;
  }

  .HeaderTitle-h2,
  .HeaderTitle-h2-sm,
  .HeaderTitle-h2-md,
  .HeaderTitle-h2-lg {
    @apply text-4xl;
    @apply lowercase;
    @apply text-secondary;
  }

  .HeaderTitle-h1,
  .HeaderTitle-h1-sm,
  .HeaderTitle-h1-md,
  .HeaderTitle-h1-lg,
  .HeaderTitle-h2,
  .HeaderTitle-h2-sm,
  .HeaderTitle-h2-md,
  .HeaderTitle-h2-lg {
    @apply ml-16;
    @apply pl-8;
    @apply font-bold;
  }

  .HeaderTitle-h1,
  .HeaderTitle-h2 {
    @apply block sm:hidden;
  }

  .HeaderTitle-h1-sm,
  .HeaderTitle-h2-sm {
    @apply hidden sm:block md:hidden;
  }

  .HeaderTitle-h1-md,
  .HeaderTitle-h2-md {
    @apply hidden md:block lg:hidden;
  }

  .HeaderTitle-h1-lg,
  .HeaderTitle-h2-lg {
    @apply hidden lg:block;
  }

  .HeaderTitle-h2--light {
    @apply text-gray-300;
  }
</style>
