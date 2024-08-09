<script lang="ts">
  import { get } from 'svelte/store'

  import { geoMaisonQuiroga } from '~/stores/GeoCoordinatesStore'

  const { address, addressCountry, latitude, longitude } = get(geoMaisonQuiroga)
  const { streetAddress, addressLocality } = address
  const { identifier } = addressCountry

  export let placename = `${streetAddress}, ${addressLocality}`
  export let region = identifier
  export let position = `${latitude};${longitude}`
</script>

<meta name="geo.placename" content={placename} />
<meta name="geo.region" content={region} />
<meta name="geo.position" content={position} />
