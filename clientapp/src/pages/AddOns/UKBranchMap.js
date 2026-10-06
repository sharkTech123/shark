import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Building2,
  Search,
  Menu,
  X,
  Navigation,
  Phone,
  Mail,
  ChevronRight,
  Zap,
  Layers,
} from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { gsap } from "gsap";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function UKBranchMap() {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const cardRefs = useRef([]);

  // Branch locations with accurate coordinates
  const branches = [
    // Scotland
    {
      id: 1,
      name: "Edinburgh",
      lat: 55.9533,
      lng: -3.1883,
      region: "Scotland - East & Central Belt",
      color: "#ef4444",
      phone: "+44 131 XXX XXXX",
      email: "edinburgh@company.com",
    },
    {
      id: 2,
      name: "Glasgow",
      lat: 55.8642,
      lng: -4.2518,
      region: "Scotland - West",
      color: "#22c55e",
      phone: "+44 141 XXX XXXX",
      email: "glasgow@company.com",
    },
    {
      id: 3,
      name: "Aberdeen",
      lat: 57.1497,
      lng: -2.0943,
      region: "Scotland - North (Highlands & Islands)",
      color: "#3b82f6",
      phone: "+44 1224 XXX XXXX",
      email: "aberdeen@company.com",
    },
    {
      id: 4,
      name: "Inverness",
      lat: 57.4778,
      lng: -4.2247,
      region: "Scotland - North (Highlands & Islands)",
      color: "#3b82f6",
      phone: "+44 1463 XXX XXXX",
      email: "inverness@company.com",
    },

    // North of England
    {
      id: 5,
      name: "Newcastle",
      lat: 54.9783,
      lng: -1.6178,
      region: "Northumberland & Tyne and Wear",
      color: "#f59e0b",
      phone: "+44 191 XXX XXXX",
      email: "newcastle@company.com",
    },
    {
      id: 6,
      name: "Durham",
      lat: 54.7761,
      lng: -1.5733,
      region: "County Durham & Teesside",
      color: "#ec4899",
      phone: "+44 191 XXX XXXX",
      email: "durham@company.com",
    },
    {
      id: 7,
      name: "York",
      lat: 53.9591,
      lng: -1.0815,
      region: "North Yorkshire - Coastal",
      color: "#8b5cf6",
      phone: "+44 1904 XXX XXXX",
      email: "york@company.com",
    },
    {
      id: 8,
      name: "Leeds",
      lat: 53.8008,
      lng: -1.5491,
      region: "North Yorkshire - Central & West",
      color: "#14b8a6",
      phone: "+44 113 XXX XXXX",
      email: "leeds@company.com",
    },
    {
      id: 9,
      name: "Manchester",
      lat: 53.4808,
      lng: -2.2426,
      region: "Greater Manchester",
      color: "#f97316",
      phone: "+44 161 XXX XXXX",
      email: "manchester@company.com",
    },
    {
      id: 10,
      name: "Liverpool",
      lat: 53.4084,
      lng: -2.9916,
      region: "Merseyside",
      color: "#06b6d4",
      phone: "+44 151 XXX XXXX",
      email: "liverpool@company.com",
    },
    {
      id: 11,
      name: "Sheffield",
      lat: 53.3811,
      lng: -1.4701,
      region: "South Yorkshire",
      color: "#84cc16",
      phone: "+44 114 XXX XXXX",
      email: "sheffield@company.com",
    },
    {
      id: 12,
      name: "Preston",
      lat: 53.7632,
      lng: -2.7031,
      region: "Lancashire - North & Coast",
      color: "#a855f7",
      phone: "+44 1772 XXX XXXX",
      email: "preston@company.com",
    },

    // Midlands
    {
      id: 13,
      name: "Nottingham",
      lat: 52.9548,
      lng: -1.1581,
      region: "East Midlands - Nottinghamshire",
      color: "#eab308",
      phone: "+44 115 XXX XXXX",
      email: "nottingham@company.com",
    },
    {
      id: 14,
      name: "Derby",
      lat: 52.9225,
      lng: -1.4746,
      region: "East Midlands - Derbyshire",
      color: "#f43f5e",
      phone: "+44 1332 XXX XXXX",
      email: "derby@company.com",
    },
    {
      id: 15,
      name: "Leicester",
      lat: 52.6369,
      lng: -1.1398,
      region: "East Midlands - Leicestershire",
      color: "#10b981",
      phone: "+44 116 XXX XXXX",
      email: "leicester@company.com",
    },
    {
      id: 16,
      name: "Birmingham",
      lat: 52.4862,
      lng: -1.8904,
      region: "West Midlands - Birmingham & Black Country",
      color: "#f59e0b",
      phone: "+44 121 XXX XXXX",
      email: "birmingham@company.com",
    },
    {
      id: 17,
      name: "Coventry",
      lat: 52.4068,
      lng: -1.5197,
      region: "Coventry & Warwickshire",
      color: "#6366f1",
      phone: "+44 24 XXX XXXX",
      email: "coventry@company.com",
    },
    {
      id: 18,
      name: "Stoke-on-Trent",
      lat: 53.0027,
      lng: -2.1794,
      region: "Staffordshire & Stoke-on-Trent",
      color: "#ec4899",
      phone: "+44 1782 XXX XXXX",
      email: "stoke@company.com",
    },

    // East of England
    {
      id: 19,
      name: "Norwich",
      lat: 52.6309,
      lng: 1.2974,
      region: "Norfolk",
      color: "#3b82f6",
      phone: "+44 1603 XXX XXXX",
      email: "norwich@company.com",
    },
    {
      id: 20,
      name: "Ipswich",
      lat: 52.0594,
      lng: 1.1556,
      region: "Suffolk",
      color: "#14b8a6",
      phone: "+44 1473 XXX XXXX",
      email: "ipswich@company.com",
    },
    {
      id: 21,
      name: "Colchester",
      lat: 51.886,
      lng: 0.9034,
      region: "Essex - North",
      color: "#8b5cf6",
      phone: "+44 1206 XXX XXXX",
      email: "colchester@company.com",
    },
    {
      id: 22,
      name: "Southend-on-Sea",
      lat: 51.5459,
      lng: 0.7077,
      region: "Essex - South",
      color: "#f97316",
      phone: "+44 1702 XXX XXXX",
      email: "southend@company.com",
    },
    {
      id: 23,
      name: "Cambridge",
      lat: 52.2053,
      lng: 0.1218,
      region: "Cambridgeshire",
      color: "#22c55e",
      phone: "+44 1223 XXX XXXX",
      email: "cambridge@company.com",
    },

    // London & Surrounds
    {
      id: 24,
      name: "West London",
      lat: 51.5074,
      lng: -0.3278,
      region: "West London (incl. Southall)",
      color: "#a855f7",
      phone: "+44 20 XXXX XXXX",
      email: "westlondon@company.com",
    },
    {
      id: 25,
      name: "East London",
      lat: 51.5074,
      lng: 0.1278,
      region: "North & East London",
      color: "#06b6d4",
      phone: "+44 20 XXXX XXXX",
      email: "eastlondon@company.com",
    },
    {
      id: 26,
      name: "South London",
      lat: 51.4532,
      lng: -0.1275,
      region: "South London & Kent Fringe",
      color: "#84cc16",
      phone: "+44 20 XXXX XXXX",
      email: "southlondon@company.com",
    },

    // South England
    {
      id: 27,
      name: "Brighton",
      lat: 50.8225,
      lng: -0.1372,
      region: "Sussex",
      color: "#eab308",
      phone: "+44 1273 XXX XXXX",
      email: "brighton@company.com",
    },
    {
      id: 28,
      name: "Southampton",
      lat: 50.9097,
      lng: -1.4044,
      region: "Hampshire",
      color: "#f43f5e",
      phone: "+44 23 XXXX XXXX",
      email: "southampton@company.com",
    },
    {
      id: 29,
      name: "Bristol",
      lat: 51.4545,
      lng: -2.5879,
      region: "Bristol & Bath",
      color: "#10b981",
      phone: "+44 117 XXX XXXX",
      email: "bristol@company.com",
    },
    {
      id: 30,
      name: "Plymouth",
      lat: 50.3755,
      lng: -4.1427,
      region: "Devon & Cornwall",
      color: "#6366f1",
      phone: "+44 1752 XXX XXXX",
      email: "plymouth@company.com",
    },
    {
      id: 31,
      name: "Bournemouth",
      lat: 50.7192,
      lng: -1.8808,
      region: "Dorset",
      color: "#f59e0b",
      phone: "+44 1202 XXX XXXX",
      email: "bournemouth@company.com",
    },
  ];

  // Get unique regions
  const regions = [...new Set(branches.map((b) => b.region))].map((region) => {
    const branch = branches.find((b) => b.region === region);
    return {
      name: region,
      color: branch.color,
      count: branches.filter((b) => b.region === region).length,
    };
  });

  // Filter branches based on search
  const filteredBranches = branches.filter(
    (branch) =>
      branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.region.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [54.5, -3],
      zoom: 6,
      zoomControl: true,
      scrollWheelZoom: true,
      dragging: true,
      attributionControl: false,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(map);

    mapRef.current = map;
    setMapLoaded(true);

    branches.forEach((branch) => {
      const customIcon = L.divIcon({
        className: "custom-leaflet-marker",
        html: `
    <div class="marker-pin"></div>
  `,
        iconSize: [22, 22],
        iconAnchor: [11, 11],
      });

      const marker = L.marker([branch.lat, branch.lng], {
        icon: customIcon,
      }).addTo(map);

      requestAnimationFrame(() => {
        const el = marker.getElement();
        if (!el) return;

        const pin = el.querySelector(".marker-pin");
        if (pin) {
          pin.style.background = branch.color;
        }
      });

      marker.on("click", () => {
        setSelectedBranch(branch);
        map.setView([branch.lat, branch.lng], 10);
      });

      markersRef.current.push({ marker, branch });
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Handle branch selection from map
  useEffect(() => {
    if (selectedBranch && mapRef.current) {
      mapRef.current.setView([selectedBranch.lat, selectedBranch.lng], 10, {
        animate: true,
        duration: 1,
        easeLinearity: 0.25,
      });
    }
  }, [selectedBranch]);

  // GSAP Animations
  useEffect(() => {
    setTimeout(() => {
      // Animate branch cards
      gsap.from(cardRefs.current.filter(Boolean), {
        opacity: 0.3, // 👈 not 0
        x: -20,
        duration: 0.5,
        stagger: 0.05,
        clearProps: "opacity",
      });

      // Animate custom markers
    }, 100);
  }, [mapLoaded]);
  useEffect(() => {
    if (!mapLoaded) return;

    requestAnimationFrame(() => {
      gsap.fromTo(
        ".custom-leaflet-marker",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.03,
          ease: "back.out(1.7)",
        },
      );
    });
  }, [mapLoaded]);

  // Animate detail card on selection
  useEffect(() => {
    gsap.from(".detail-card", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.5,
      ease: "power3.out",
    });
  }, [selectedBranch]);
  // Highlight markers by region
  useEffect(() => {
    if (!hoveredRegion || !mapLoaded) return;

    markersRef.current.forEach(({ marker, branch }) => {
      const markerElement = marker.getElement();
      if (!markerElement) return;

      const pin = markerElement.querySelector(".marker-pin");
      if (!pin) return; // 👈 THIS FIXES THE ERROR

      if (branch.region === hoveredRegion) {
        pin.style.transform = "scale(1.3)";
        pin.style.zIndex = "1000";
      } else {
        pin.style.transform = "scale(1)";
        pin.style.zIndex = "10";
      }
    });

    return () => {
      markersRef.current.forEach(({ marker }) => {
        const markerElement = marker.getElement();
        if (!markerElement) return;

        const pin = markerElement.querySelector(".marker-pin");
        if (!pin) return; // 👈 ALSO HERE

        pin.style.transform = "scale(1)";
        pin.style.zIndex = "10";
      });
    };
  }, [hoveredRegion, mapLoaded]);

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden mb-4">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />

      {/* Header */}
      <div className="relative z-20 bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black">
                UK Branch Network
              </h1>
              <p className="text-sm text-blue-600">
                {branches.length} Locations Nationwide
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
          >
            {isSidebarOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      <div className="relative z-10 flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 absolute lg:relative z-30 w-80 xl:w-96 h-full bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-out overflow-hidden`}
        >
          <div className="h-full flex flex-col">
            {/* Search */}
            <div className="p-6 border-b border-gray-200">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Search locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Legend */}
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                <Layers className="w-4 h-4 mr-2 text-blue-500" />
                Regional Coverage
              </h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {regions.map((region, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between space-x-2 text-xs hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer group"
                    onMouseEnter={() => setHoveredRegion(region.name)}
                    onMouseLeave={() => setHoveredRegion(null)}
                  >
                    <div className="flex items-center space-x-2 flex-1 min-w-0">
                      <div
                        className="w-4 h-4 rounded-full shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: region.color }}
                      />
                      <span className="text-gray-700 truncate">
                        {region.name}
                      </span>
                    </div>
                    <span className="text-gray-400 text-xs font-semibold">
                      {region.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Branch List */}
            <div className="flex-1 overflow-y-auto p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center sticky top-0 bg-white/95 backdrop-blur pb-2">
                <MapPin className="w-4 h-4 mr-2 text-red-500" />
                All Locations ({filteredBranches.length})
              </h3>
              <div className="space-y-2">
                {filteredBranches.map((branch, idx) => (
                  <div
                    key={branch.id}
                    ref={(el) => (cardRefs.current[idx] = el)}
                    onClick={() => setSelectedBranch(branch)}
                    className={`group p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                      selectedBranch?.id === branch.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl"
                        : "bg-gray-50 hover:bg-gray-100 hover:shadow-lg"
                    }`}
                    style={{
                      borderLeft: `4px solid ${branch.color}`,
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div
                          className={`font-semibold mb-1 flex items-center ${
                            selectedBranch?.id === branch.id
                              ? "text-white"
                              : "text-gray-900"
                          }`}
                        >
                          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span className="truncate">{branch.name}</span>
                        </div>
                        <div
                          className={`text-xs truncate ${
                            selectedBranch?.id === branch.id
                              ? "text-blue-100"
                              : "text-gray-500"
                          }`}
                        >
                          {branch.region}
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0 ml-2 ${
                          selectedBranch?.id === branch.id
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 p-4 md:p-8">
            {/* Leaflet Map */}
            <div
              ref={mapContainerRef}
              className="relative w-full h-full rounded-3xl shadow-2xl border-4 border-white/20 overflow-hidden"
              style={{ background: "#1e293b" }}
            >
              {/* Loading State */}
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 z-50">
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
                      <MapPin className="absolute inset-0 m-auto w-8 h-8 text-blue-400" />
                    </div>
                    <p className="text-white text-lg font-semibold mt-4">
                      Loading UK Map...
                    </p>
                    <p className="text-blue-300 text-sm mt-2">
                      Preparing {branches.length} locations
                    </p>
                  </div>
                </div>
              )}

              {/* Selected Branch Detail Card */}
              {selectedBranch && mapLoaded && (
                <div className="detail-card absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 md:p-6 border border-gray-200 z-[1000]">
                  <button
                    onClick={() => setSelectedBranch(null)}
                    className="absolute top-3 right-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>

                  <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-4">
                    <div
                      className="w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: selectedBranch.color }}
                    >
                      <Building2 className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 truncate">
                        {selectedBranch.name}
                      </h2>
                      <p className="text-gray-600 mb-4 text-sm">
                        {selectedBranch.region}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-700">
                          <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span className="truncate">
                            {selectedBranch.phone}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-700">
                          <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <span className="truncate">
                            {selectedBranch.email}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-700">
                          <Navigation className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${selectedBranch.lat},${selectedBranch.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline truncate"
                          >
                            Get Directions
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
