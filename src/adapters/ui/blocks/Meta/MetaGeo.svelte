<script lang="ts" context="module">
  import { get } from 'svelte/store'

  export type MetaGeoProps = {
    placename: string
    position: string
    region: string
  }
</script>

<script lang="ts">
  import { geoMaisonQuiroga } from '+/GeoCoordinatesStore'
  import { adresseMaisonQuiroga } from '+/PostalAddressStore'

  const { addressCountry, latitude, longitude } = get(geoMaisonQuiroga)
  const { streetAddress, addressLocality } = get(adresseMaisonQuiroga)

  export let metaGeo: MetaGeoProps = {
    placename: `${streetAddress}, ${addressLocality}`,
    position: `${latitude};${longitude}`,
    region: addressCountry
  }
</script>

<meta name="geo.placename" content={metaGeo.placename} />
<meta name="geo.position" content={metaGeo.position} />
<meta name="geo.region" content={metaGeo.region} />
