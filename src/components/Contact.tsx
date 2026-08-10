import { MapPin, Phone, Clock, CalendarDays, Utensils } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin, useMapsLibrary } from '@vis.gl/react-google-maps';
import { useState, useEffect } from 'react';
import fallbackInteriorImg from '../assets/images/kishori_interior_1786353173853.jpg';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

const KISHORIS_PLACE_ID = 'ChIJWTPeMwBvDjkRm0WOqGrOknw';

function PlacePhoto() {
  const placesLib = useMapsLibrary('places');
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  useEffect(() => {
    if (!placesLib) return;
    const place = new placesLib.Place({ id: KISHORIS_PLACE_ID });
    place.fetchFields({ fields: ['photos'] }).then(() => {
      if (place.photos && place.photos.length > 0) {
        // @ts-ignore - The types might be slightly outdated, getURI exists on Photo
        setPhotoUri(place.photos[0].getURI({ maxHeight: 800, maxWidth: 800 }));
      } else {
        // Fallback to static image if the API does not return a photo
        setPhotoUri(fallbackInteriorImg);
      }
    }).catch(e => {
      console.error("Failed to fetch place photos", e);
      setPhotoUri(fallbackInteriorImg);
    });
  }, [placesLib]);

  if (!photoUri) return null;

  return (
    <div className="mt-8 border-4 border-black overflow-hidden relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="bg-black text-white px-4 py-2 text-sm font-bold uppercase tracking-wider border-b-4 border-black flex justify-between items-center">
        <span>Kishori's - Maps Photo</span>
        <MapPin size={16} />
      </div>
      <img src={photoUri} alt="Kishori's on Google Maps" className="w-full h-[350px] object-cover" />
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#ff2a85] text-black border-b-8 border-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-12">
            <div className="bg-white p-8 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
              <h2 className="text-6xl font-display uppercase mb-4 text-black drop-shadow-[4px_4px_0px_#00e5ff]">COME.<br/>DINE.<br/>CELEBRATE.</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-6 bg-white p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-16 h-16 bg-[#ffeb3b] text-black border-4 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <MapPin size={32} />
                </div>
                <div>
                  <h4 className="text-3xl font-display uppercase mb-1">VISIT KISHORI'S</h4>
                  <p className="font-bold text-xl uppercase">ITI Chowk, Karnal<br/>Haryana, India</p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-16 h-16 bg-[#00ff00] text-black border-4 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Phone size={32} />
                </div>
                <div>
                  <h4 className="text-3xl font-display uppercase mb-1">HIT US UP</h4>
                  <p className="font-bold text-xl uppercase mb-1">
                    Call / WA: <a href="tel:+918950084841" className="hover:text-[#ff2a85] transition-colors bg-[#ffeb3b] px-2 border-2 border-black inline-block mt-1">+91 89500 84841</a>
                  </p>
                  <p className="font-bold text-xl uppercase mt-2">
                    Email: <a href="mailto:kishoris.inn@gmail.com" className="hover:text-[#ff2a85] transition-colors underline break-all">kishoris.inn@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-16 h-16 bg-[#00e5ff] text-black border-4 border-black flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Clock size={32} />
                </div>
                <div>
                  <h4 className="text-3xl font-display uppercase mb-1">HOURS</h4>
                  <p className="font-bold text-xl uppercase mb-2">Mon – Sun: 11AM – 11PM</p>
                  <p className="text-white bg-black inline-flex items-center gap-2 px-4 py-2 uppercase font-bold text-sm border-2 border-black">
                    <Utensils size={16}/> LAST ORDER: 10:45 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Info */}
          <div className="bg-white p-10 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] h-full flex flex-col justify-between">
            <div>
              <div className="w-20 h-20 bg-black text-white border-4 border-black flex items-center justify-center mb-8 shadow-[6px_6px_0px_0px_rgba(255,42,133,1)] transform rotate-6">
                <CalendarDays size={40} />
              </div>
              <h3 className="text-5xl font-display uppercase mb-8">BOOK IT.</h3>
              
              <ul className="space-y-4 mb-12">
                {[
                  "Table Reservations",
                  "Luxury Dates",
                  "Birthdays & Anniversaries",
                  "Private Party Hall",
                  "Family & Groups",
                  "Special Events",
                  "General Enquiries"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-black text-xl font-bold uppercase">
                    <div className="w-8 h-8 bg-[#ff2a85] border-4 border-black flex-shrink-0 flex items-center justify-center text-white text-lg">✓</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="https://wa.me/918950084841" 
              target="_blank" 
              rel="noreferrer" 
              className="block w-full py-6 bg-black text-[#00ff00] text-center font-display uppercase text-3xl hover:bg-zinc-800 transition-colors border-4 border-black shadow-[8px_8px_0px_0px_#00ff00] hover:translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0px_0px_#00ff00]"
            >
              WHATSAPP US TO BOOK
            </a>
          </div>

        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white p-4 lg:p-8 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-4xl font-display uppercase mb-6 text-black text-center">FIND US HERE</h3>
            {!hasValidKey ? (
              <div className="h-[400px] border-4 border-black overflow-hidden relative bg-zinc-100">
                <div className="flex items-center justify-center h-full flex-col text-center p-6">
                  <h4 className="text-2xl font-bold uppercase mb-2">Google Maps API Key Required</h4>
                  <p className="text-lg font-medium mb-4 max-w-lg">
                    To view the interactive map, you need to add your Google Maps Platform API key.
                  </p>
                  <div className="text-left bg-black text-white p-4 font-mono text-sm max-w-lg mx-auto border-2 border-[#00e5ff] shadow-[4px_4px_0px_0px_#00e5ff]">
                    <p>1. Open Settings (⚙️ top-right)</p>
                    <p>2. Select Secrets</p>
                    <p>3. Add GOOGLE_MAPS_PLATFORM_KEY</p>
                    <p>4. Paste your API key</p>
                  </div>
                </div>
              </div>
            ) : (
              <APIProvider apiKey={API_KEY} version="weekly">
                <div className="h-[400px] border-4 border-black overflow-hidden relative bg-zinc-100">
                  <Map
                    defaultCenter={{ lat: 29.7042, lng: 76.9859 }}
                    defaultZoom={15}
                    mapId="KISHORIS_MAP_ID"
                    internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <AdvancedMarker position={{ lat: 29.7042, lng: 76.9859 }}>
                      <Pin background="#ff2a85" glyphColor="#fff" borderColor="#000" />
                    </AdvancedMarker>
                  </Map>
                </div>
                <PlacePhoto />
              </APIProvider>
            )}
        </div>
      </div>
    </section>
  );
}
