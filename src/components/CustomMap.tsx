'use client'
import { useEffect, useRef } from 'react'

/* Custom map styles matching exact hex values from the original site:
 * land = #383838, water = #605B4B, roads = #2E2E2E
 * Labels use the site's gold colour palette.
 */
const MAP_STYLES = [
  { elementType: 'geometry', stylers: [{ color: '#383838' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#d4b87c' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#1a1a1a' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#605B4B' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#a09070' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#2E2E2E' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#1a1a1a' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#3a3a3a' }] },
  { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#3a3a3a' }] },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#404040' }] },
  { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#2a2a2a' }] },
  { featureType: 'administrative', elementType: 'geometry', stylers: [{ color: '#2e2e2e' }] },
  { featureType: 'administrative', elementType: 'labels.text.fill', stylers: [{ color: '#c4a05a' }] },
  { featureType: 'administrative.land_parcel', elementType: 'labels', stylers: [{ visibility: 'off' }] },
]

const LAT = 49.48124
const LNG = -2.52679

declare global {
  interface Window {
    __nerineMapInit?: () => void
    google: { maps: { Map: new (...a: unknown[]) => unknown; Marker: new (...a: unknown[]) => unknown } }
  }
}

export function CustomMap() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
    if (!apiKey || !containerRef.current) return

    const initMap = () => {
      if (!containerRef.current || !window.google) return
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const gm = window.google.maps as any
      const map = new gm.Map(containerRef.current, {
        center: { lat: LAT, lng: LNG },
        zoom: 14,
        styles: MAP_STYLES,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: true,
        scrollwheel: false,
      })
      new gm.Marker({
        position: { lat: LAT, lng: LNG },
        map,
        title: 'Nerine Beauty',
      })
    }

    if (window.google?.maps) {
      initMap()
    } else {
      window.__nerineMapInit = initMap
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=__nerineMapInit`
      script.async = true
      script.defer = true
      document.head.appendChild(script)
      return () => {
        try { document.head.removeChild(script) } catch {}
        delete window.__nerineMapInit
      }
    }
  }, [])

  return <div ref={containerRef} style={{ width: '100%', height: '420px' }} />
}
