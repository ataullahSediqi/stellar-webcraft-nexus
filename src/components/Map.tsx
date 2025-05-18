// Fix the build error with AnimatedSection by removing the style prop and using className instead

import { useEffect, useMemo, useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { cn } from '@/lib/utils';

interface Office {
  name: string;
  location: { lat: number; lng: number };
  country: string;
  address: string;
}

const offices: Office[] = [
  { 
    name: 'San Francisco',
    location: { lat: 37.7749, lng: -122.4194 },
    country: 'United States',
    address: '123 Tech Avenue, San Francisco, CA 94107'
  },
  { 
    name: 'New York',
    location: { lat: 40.7128, lng: -74.0060 },
    country: 'United States',
    address: '456 Digital Street, New York, NY 10001'
  },
  { 
    name: 'London',
    location: { lat: 51.5074, lng: -0.1278 },
    country: 'United Kingdom',
    address: '789 Code Lane, London, EC1A 1BB'
  },
  { 
    name: 'Tokyo',
    location: { lat: 35.6762, lng: 139.6503 },
    country: 'Japan',
    address: '10-11 Binary Building, Shibuya, Tokyo 150-0002'
  },
  { 
    name: 'Sydney',
    location: { lat: -33.8688, lng: 151.2093 },
    country: 'Australia',
    address: '42 Algorithm Avenue, Sydney, NSW 2000'
  },
];

interface GoogleMapsProps {
  offices: Office[];
}

const GoogleMaps = ({ offices }: GoogleMapsProps) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);

  useEffect(() => {
    const initMap = () => {
      const mapInstance = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: offices[0].location,
        zoom: 2,
        mapId: 'YOUR_MAP_ID',
      });
      setMap(mapInstance);
    };

    if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.addEventListener('load', initMap);
      document.head.appendChild(script);

      // Make initMap globally accessible
      window.initMap = initMap;
    }

    return () => {
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, [offices]);

  useEffect(() => {
    if (map) {
      // Clear existing markers
      markers.forEach(marker => marker.setMap(null));

      // Create new markers
      const newMarkers = offices.map(office => {
        const marker = new google.maps.Marker({
          position: office.location,
          map: map,
          title: office.name,
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div>
              <h3>${office.name}</h3>
              <p>${office.address}, ${office.country}</p>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        return marker;
      });

      setMarkers(newMarkers);
    }
  }, [map, offices, markers]);

  return <div id="map" className="w-full h-[500px]" />;
};

export function Map() {
  return (
    <section id="map-section" className="section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title text-center">
            Our <span className="gradient-text">Global Offices</span>
          </h2>
          <p className="section-subtitle text-center mx-auto">
            We operate around the world to provide the best service. Find our offices in different locations.
          </p>
        </AnimatedSection>
        <AnimatedSection>
          <div className="mt-10">
            <GoogleMaps offices={offices} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
