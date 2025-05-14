
import { useState, useEffect, useRef } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Map() {
  const [mapToken, setMapToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [map, setMap] = useState<any>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mapToken || !mapContainer.current || map) return;
    
    // Load Mapbox GL JS script dynamically
    const script = document.createElement('script');
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js';
    script.async = true;
    
    script.onload = () => {
      const mapboxgl = window.mapboxgl;
      if (!mapboxgl) return;
      
      // Load CSS
      const link = document.createElement('link');
      link.href = 'https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
      
      // Set access token and initialize map
      mapboxgl.accessToken = mapToken;
      
      const mapInstance = new mapboxgl.Map({
        container: mapContainer.current!,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [0, 20], // Centered on the globe
        zoom: 1.5,
        projection: 'globe',
        pitch: 45,
      });
      
      // Add navigation controls
      mapInstance.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'bottom-right'
      );
      
      // Add office locations markers
      const offices = [
        { name: 'New York', coordinates: [-74.006, 40.7128], description: 'Main Headquarters' },
        { name: 'London', coordinates: [-0.1278, 51.5074], description: 'European Office' },
        { name: 'Singapore', coordinates: [103.8198, 1.3521], description: 'Asia-Pacific Hub' },
        { name: 'San Francisco', coordinates: [-122.4194, 37.7749], description: 'Innovation Center' }
      ];

      // Add atmosphere and futuristic effects
      mapInstance.on('style.load', () => {
        mapInstance.setFog({
          color: 'rgb(23, 26, 39)',
          'high-color': 'rgb(39, 57, 127)',
          'horizon-blend': 0.2,
          'space-color': 'rgb(5, 7, 16)',
          'star-intensity': 0.8
        });
      });
      
      // Add markers
      offices.forEach(office => {
        // Create custom marker element
        const el = document.createElement('div');
        el.className = 'custom-marker';
        el.style.width = '24px';
        el.style.height = '24px';
        el.style.backgroundImage = 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.4) 70%, transparent 100%)';
        el.style.borderRadius = '50%';
        el.style.boxShadow = '0 0 10px rgba(59, 130, 246, 0.8)';
        el.style.cursor = 'pointer';
        
        // Create the popup for the marker
        const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
          .setHTML(`
            <div style="font-family: 'Inter', sans-serif; padding: 8px;">
              <h3 style="font-weight: bold; font-size: 16px; margin-bottom: 4px;">${office.name}</h3>
              <p style="font-size: 14px; opacity: 0.8;">${office.description}</p>
            </div>
          `);
          
        // Add marker to map
        new mapboxgl.Marker(el)
          .setLngLat(office.coordinates)
          .setPopup(popup)
          .addTo(mapInstance);
      });
      
      // Enable auto-rotation if not on mobile
      if (window.innerWidth > 768) {
        // Auto-rotate map
        const rotateCamera = () => {
          const zoom = mapInstance.getZoom();
          if (zoom < 2) {
            mapInstance.rotateTo((mapInstance.getBearing() + 0.2) % 360, { duration: 0 });
            requestAnimationFrame(rotateCamera);
          }
        };
        
        rotateCamera();
      }

      setMap(mapInstance);
    };
    
    document.body.appendChild(script);
    
    return () => {
      if (map) map.remove();
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [mapToken, map]);
  
  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowTokenInput(false);
  };
  
  return (
    <section id="map" className="section relative overflow-hidden bg-background">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title text-center">Global Presence</h2>
          <p className="section-subtitle text-center mx-auto">
            With offices strategically located across the globe, we deliver exceptional software development services to clients worldwide.
          </p>
        </AnimatedSection>
        
        <AnimatedSection className="mt-10 relative overflow-hidden rounded-xl border border-border/50 shadow-lg" style={{ height: '600px' }}>
          {showTokenInput ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background p-6 z-10">
              <div className="w-full max-w-md neo-box p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Map Activation Required</h3>
                <p className="mb-6 text-muted-foreground">
                  To view our interactive global map, please enter your Mapbox public token. 
                  You can get a free token by signing up at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
                </p>
                <form onSubmit={handleTokenSubmit} className="space-y-4">
                  <input 
                    type="text" 
                    value={mapToken} 
                    onChange={(e) => setMapToken(e.target.value)} 
                    placeholder="Enter your Mapbox public token"
                    className="w-full p-3 rounded-md bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    required
                  />
                  <Button type="submit" className="w-full">
                    Activate Map
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Your token is only used in your browser and is not stored on our servers.
                  </p>
                </form>
              </div>
            </div>
          ) : null}
          
          <div ref={mapContainer} className={cn("absolute inset-0", !mapToken && "opacity-0")} />
          
          <div className="absolute bottom-4 left-4 z-10 bg-background/70 backdrop-blur-sm p-4 rounded-lg border border-border/50 max-w-xs hidden md:block">
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm">DevMatrix Global Network</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Our strategic global locations allow us to serve clients across all time zones with 24/7 development and support capabilities.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
