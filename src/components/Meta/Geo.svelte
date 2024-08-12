<script lang="ts">
  import type { MetaGeo } from '~/types'

  import { get } from 'svelte/store'

  import { geoMaisonQuiroga } from '~/stores/GeoCoordinatesStore'
  import { adresseMaisonQuiroga } from '~/stores/PostalAddressStore'
  import { validateString } from '~/utils/validators'

  const { addressCountry, latitude, longitude } = get(geoMaisonQuiroga)
  const { streetAddress, addressLocality } = get(adresseMaisonQuiroga)

  export let metaGeo: MetaGeo = {
    placename: `${streetAddress}, ${addressLocality}`,
    position: `${latitude};${longitude}`,
    region: validateString(addressCountry)
  }
</script>

<meta name="geo.placename" content={metaGeo.placename} />
<meta name="geo.position" content={metaGeo.position} />
{#await metaGeo.region then region}
  <meta name="geo.region" content={region} />
{/await}
