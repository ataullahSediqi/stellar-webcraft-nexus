
import { Map, NavigationControl, Marker, Popup } from 'mapbox-gl';

declare global {
  interface Window {
    mapboxgl: {
      accessToken: string;
      Map: typeof Map;
      NavigationControl: typeof NavigationControl;
      Marker: typeof Marker;
      Popup: typeof Popup;
    }
  }
}
