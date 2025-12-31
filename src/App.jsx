import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HTMLFlipBook from 'react-pageflip';
import Stack from './Stack';
import Masonry from './Masonry';
import CircularGallery from './CircularGallery';
import PropertyDetails from './PropertyDetails';
import './index.css';

// Jungle Book Component
const JungleBook = () => {
  const [dimensions, setDimensions] = useState({ width: 400, height: 560 });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 600) {
        // Mobile: Fit to screen width with some padding
        const newWidth = windowWidth - 40; // 20px padding on each side
        const newHeight = newWidth * 1.4; // Maintain aspect ratio roughly
        setDimensions({ width: newWidth, height: newHeight });
      } else if (windowWidth < 1000) {
        // Tablet
        setDimensions({ width: 350, height: 490 });
      } else {
        // Desktop - Reduced to average comfortable size
        setDimensions({ width: 400, height: 560 });
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: dimensions.height + 60, // Add some buffer
      padding: '30px 0',
      overflow: 'hidden' // Prevent spill
    }}>
      <HTMLFlipBook
        width={dimensions.width}
        height={dimensions.height}
        showCover={true}
        mobileScrollSupport={true}
        className="demo-book"
        size="stretch" // Helps with responsive resizing
        minWidth={280}
        maxWidth={400}
        minHeight={350}
        maxHeight={560}
      >
        <div className="book-page cover">
          <div className="book-content center">
            <h1 style={{
              color: '#ffffff',
              fontFamily: 'Playfair Display',
              fontSize: dimensions.width < 350 ? '1.8rem' : '2.8rem',
              borderBottom: '2px solid #ffffff',
              paddingBottom: '10px',
              textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
            }}>Journey of<br />Kodai</h1>
            <p style={{ marginTop: '20px', color: 'rgba(255,255,255,0.95)', fontSize: '1.1rem', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>Forest Resort Guide</p>
            <div style={{ marginTop: 'auto', marginBottom: '40px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>Tap to Open</div>
          </div>
        </div>

        {/* PAGE 1: Welcome */}
        <div className="book-page paper">
          <div className="book-content text-left">
            <h2 className="page-title">Welcome</h2>
            <div className="divider"></div>
            <p>Nestled in the heart of Kodaikanal's lush forests, Journey of Kodai offers an escape from the ordinary.</p>
            <p>We believe in the transformative power of nature and have created two unique properties that blend adventure, comfort, and sustainability.</p>
            <p><strong>Mowgli Camp:</strong> Jungle-inspired adventure stay where wilderness meets comfort.</p>
            <p><strong>Dinosaur Park:</strong> Family-friendly themed resort with playful charm.</p>
            <p className="signature">- Journey of Kodai Team</p>
            <div className="page-number">1</div>
          </div>
        </div>

        {/* PAGE 2: Accommodations Image */}
        <div className="book-page paper">
          <div className="book-image-container">
            <img src="book-welcome.jpg" alt="Mountain Village Landscape" />
            <p className="image-caption">Journey of Kodai - Where Mountains Meet Sky</p>
          </div>
          <div className="page-number">2</div>
        </div>

        {/* PAGE 3: Our Properties */}
        <div className="book-page paper">
          <div className="book-content text-left">
            <h2 className="page-title">Our Properties</h2>
            <div className="divider"></div>
            <p><strong>🌲 Mowgli Camp</strong></p>
            <ul className="jungle-list">
              <li>2 A-Frame Cottages</li>
              <li>5 Luxury Tents</li>
              <li>Perfect for couples & adventurers</li>
            </ul>
            <p style={{ marginTop: '1rem' }}><strong>🦖 Dinosaur Park</strong></p>
            <ul className="jungle-list">
              <li>2 Forest Domes</li>
              <li>2 Cozy Huts</li>
              <li>1 Dormitory Hut</li>
              <li>Ideal for families & groups</li>
            </ul>
            <div className="page-number">3</div>
          </div>
        </div>

        {/* PAGE 4: Properties Images */}
        <div className="book-page paper">
          <div className="book-content" style={{ padding: '20px' }}>
            <h3 style={{
              textAlign: 'center',
              marginBottom: '15px',
              fontSize: '1.3rem',
              color: '#2d5016',
              fontFamily: 'Playfair Display'
            }}>Our Properties</h3>
            <div style={{
              display: 'grid',
              gridTemplateRows: '1fr 1fr',
              gap: '15px',
              height: 'calc(100% - 80px)'
            }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
                <img
                  src="property-aframe.jpg"
                  alt="A-Frame Cottage"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: '8px',
                  color: 'white',
                  fontSize: '0.85rem',
                  textAlign: 'center'
                }}>Mowgli Camp - A-Frame Cottage</div>
              </div>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
                <img
                  src="property-domes.jpg"
                  alt="Forest Domes"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: '8px',
                  color: 'white',
                  fontSize: '0.85rem',
                  textAlign: 'center'
                }}>Dinosaur Park - Forest Domes</div>
              </div>
            </div>
          </div>
          <div className="page-number">4</div>
        </div>

        {/* PAGE 5: Experiences */}
        <div className="book-page paper">
          <div className="book-content text-left">
            <h2 className="page-title">Experiences</h2>
            <div className="divider"></div>
            <p>Create memories that last a lifetime:</p>
            <ul className="jungle-list">
              <li><strong>Campfire Nights</strong> - Stories under the stars</li>
              <li><strong>Forest Walks</strong> - Guided nature trails</li>
              <li><strong>Nature Exploration</strong> - Discover local biodiversity</li>
              <li><strong>Family Activities</strong> - Fun for all ages</li>
              <li><strong>Photography Tours</strong> - Capture nature's beauty</li>
            </ul>
            <div className="page-number">5</div>
          </div>
        </div>

        {/* PAGE 6: Experiences Images */}
        <div className="book-page paper">
          <div className="book-content" style={{ padding: '15px' }}>
            <h3 style={{
              textAlign: 'center',
              marginBottom: '12px',
              fontSize: '1.2rem',
              color: '#2d5016',
              fontFamily: 'Playfair Display'
            }}>Our Experiences</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'auto auto auto',
              gap: '10px',
              height: 'calc(100% - 70px)'
            }}>
              {/* Waterfall - spans 2 columns */}
              <div style={{
                gridColumn: '1 / 3',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                height: '180px'
              }}>
                <img
                  src="exp-waterfall.jpg"
                  alt="Waterfall Visit"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: '6px',
                  color: 'white',
                  fontSize: '0.8rem',
                  textAlign: 'center'
                }}>Waterfall Exploration</div>
              </div>

              {/* Camping */}
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
                <img
                  src="exp-camping.jpg"
                  alt="Camping"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: '6px',
                  color: 'white',
                  fontSize: '0.75rem',
                  textAlign: 'center'
                }}>Starlit Camping</div>
              </div>

              {/* Trekking */}
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
                <img
                  src="exp-trekking.jpg"
                  alt="Trekking"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: '6px',
                  color: 'white',
                  fontSize: '0.75rem',
                  textAlign: 'center'
                }}>Forest Trekking</div>
              </div>

              {/* Pool Activities */}
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
                <img
                  src="exp-pool.jpg"
                  alt="Pool Activities"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: '6px',
                  color: 'white',
                  fontSize: '0.75rem',
                  textAlign: 'center'
                }}>Water Fun</div>
              </div>

              {/* Night Dome */}
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
                <img
                  src="exp-dome-night.jpg"
                  alt="Dome at Night"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: '6px',
                  color: 'white',
                  fontSize: '0.75rem',
                  textAlign: 'center'
                }}>Night Experience</div>
              </div>
            </div>
          </div>
          <div className="page-number">6</div>
        </div>

        {/* PAGE 7: Adventure Activities - Waterfalls & Jeep Trekking */}
        <div className="book-page paper">
          <div className="book-content" style={{ padding: '15px' }}>
            <h2 className="page-title" style={{
              fontSize: '1.4rem',
              marginBottom: '12px',
              textAlign: 'center',
              color: '#2d5016'
            }}>Adventure Awaits</h2>
            <div className="divider" style={{ marginBottom: '15px' }}></div>

            <div style={{
              display: 'grid',
              gridTemplateRows: '1fr 1fr',
              gap: '12px',
              height: 'calc(100% - 90px)'
            }}>
              {/* Jeep Trekking */}
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                <img
                  src="adventure-jeep.jpg"
                  alt="4x4 Jeep Trekking"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.6) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '15px'
                }}>
                  <div>
                    <h3 style={{
                      color: 'white',
                      fontSize: '1.1rem',
                      margin: 0,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span style={{ fontSize: '1.3rem' }}>�</span> 4×4 Jeep Trekking
                    </h3>
                  </div>
                  <div>
                    <p style={{
                      color: 'white',
                      fontSize: '0.75rem',
                      margin: 0,
                      lineHeight: '1.4',
                      textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                    }}>
                      Off-road adventure • Mountain routes • Expert drivers
                    </p>
                  </div>
                </div>
              </div>

              {/* Waterfall Exploration */}
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                <img
                  src="adventure-waterfall.jpg"
                  alt="Waterfall Exploration"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.6) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '15px'
                }}>
                  <div>
                    <h3 style={{
                      color: 'white',
                      fontSize: '1.1rem',
                      margin: 0,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span style={{ fontSize: '1.3rem' }}>�</span> Natural Waterfalls
                    </h3>
                  </div>
                  <div>
                    <p style={{
                      color: 'white',
                      fontSize: '0.75rem',
                      margin: 0,
                      lineHeight: '1.4',
                      textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                    }}>
                      Hidden cascades • Crystal pools • Photography tours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              marginTop: '12px',
              padding: '8px',
              background: 'rgba(45, 80, 22, 0.08)',
              borderRadius: '6px',
              borderLeft: '3px solid #52b788',
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '0.7rem', fontStyle: 'italic', margin: 0, color: '#2d5016' }}>
                <strong>Book in advance</strong> • Contact us to arrange tours
              </p>
            </div>

            <div className="page-number">7</div>
          </div>
        </div>

        {/* PAGE 8: House Rules */}
        <div className="book-page paper">
          <div className="book-content text-left">
            <h2 className="page-title">House Rules</h2>
            <div className="divider"></div>
            <p>1. <strong>Respect Nature.</strong> Leave only footprints, take only memories.</p>
            <p>2. <strong>Eco-Friendly.</strong> We're plastic-free. Please help us maintain this.</p>
            <p>3. <strong>Quiet Hours.</strong> 10 PM - 7 AM. Let the forest rest.</p>
            <p>4. <strong>Safety First.</strong> Follow guide instructions during activities.</p>
            <p>5. <strong>Wildlife.</strong> Observe from a distance, never feed animals.</p>
            <div className="page-number">8</div>
          </div>
        </div>

        {/* PAGE 9: Forest Walk Image */}
        <div className="book-page paper">
          <div className="book-image-container">
            <img src="forest-walk.png" alt="Forest Walk" />
            <p className="image-caption">Guided forest trails await</p>
          </div>
          <div className="page-number">9</div>
        </div>

        {/* PAGE 10: Contact & Location */}
        <div className="book-page paper">
          <div className="book-content text-left">
            <h2 className="page-title">Contact Us</h2>
            <div className="divider"></div>
            <p><strong>📍 Location</strong><br />Kodaikanal Forest Region<br />Tamil Nadu, India</p>
            <p style={{ marginTop: '1rem' }}><strong>📧 Email</strong><br />hello@journeyofkodai.com</p>
            <p style={{ marginTop: '1rem' }}><strong>📱 Phone</strong><br />+91 98765 43210</p>
            <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', fontStyle: 'italic', color: '#52b788' }}>We're here to make your forest escape unforgettable!</p>
            <div className="page-number">10</div>
          </div>
        </div>

        {/* BACK COVER */}
        <div className="book-page cover-back">
          <div className="book-content center">
            <h2 style={{ color: '#ffffff', fontFamily: 'Playfair Display', marginTop: 'auto', fontSize: '2rem', textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>Journey of Kodai</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.95)', marginTop: '10px', fontSize: '0.9rem', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>Mowgli Camp • Dinosaur Park</p>
            <div style={{ marginTop: '20px', marginBottom: 'auto', display: 'flex', justifyContent: 'center', gap: '15px' }}>
              <div style={{ fontSize: '2rem' }}>🌲</div>
              <div style={{ fontSize: '2rem' }}>🦖</div>
            </div>
            <div style={{ fontSize: '0.8rem', opacity: 0.9, color: '#ffffff', textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>Est. 2025 • Kodaikanal</div>
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
};


function App() {
  const [scrolled, setScrolled] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const sectionsRef = useRef([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  // Property Data
  const aFrameCottageData = {
    name: "Mowgli Camp Packages",
    location: "Kodaikanal Wilderness",
    image: "/aframe-cottage-1.jpg",
    description: "Choose your ideal adventure package. From luxury A-Frame cottages with thrilling jeep trekking to cozy camping tents, we offer experiences tailored to your group size and thirst for adventure.",
    amenities: [
      { icon: "🚙", name: "Jeep Trekking (Min 6 Pax)" },
      { icon: "🔥", name: "Campfire" },
      { icon: "🍽️", name: "2 Times Food" },
      { icon: "🥾", name: "Hiking" },
      { icon: "🌲", name: "Forest Stay" },
      { icon: "🅿️", name: "Free Parking" },
      { icon: "👥", name: "Group Activities" }
    ],
    rooms: [
      {
        name: "Adventure A-Frame Package",
        description: "The ultimate adventure experience. Includes thrilling Jeep Trekking , Hiking, Campfire, and 2 meals. Cottage accommodates 4 guests.",
        image: "/aframe-painted.jpg",
        capacity: 4,
        beds: "Group Accommodation",
        size: "Spacious",
        price: "1500 per head",
        features: ["Jeep Trekking (Min 6 Pax)", "2 Meals", "Hiking", "Campfire", "Max 4 Guests"],
        subImages: [
          "/aframe-detail-2.jpg",
          "/aframe-detail-3.jpg",
          "/aframe-detail-5.jpg",
          "/aframe-interior-1.jpg",
          "/aframe-interior-2.jpg",
          "/aframe-exterior-1.jpg",
          "/aframe-night-1.jpg"
        ]
      },
      {
        name: "Serenity A-Frame Package",
        description: "Relax in our beautiful A-Frame cottages. Includes Hiking, Campfire, and 2 meals. (Jeep Trekking NOT included).",
        image: "/aframe-cottage-2.jpg",
        capacity: 4,
        beds: "Comfortable Beds",
        size: "Standard",
        price: "1200 per head",
        features: ["2 Meals", "Hiking", "Campfire", "Nature Views"],
        subImages: [
          "/aframe-detail-2.jpg",
          "/aframe-detail-3.jpg",
          "/aframe-detail-5.jpg",
          "/aframe-interior-1.jpg",
          "/aframe-interior-2.jpg",
          "/aframe-exterior-1.jpg",
          "/aframe-night-1.jpg"
        ]
      }
    ]
  };

  const tentData = {
    name: "Wilderness Tent Stay",
    location: "Kodaikanal Wilderness",
    image: "/tent-glow.jpg",
    description: "Experience the true essence of camping under the stars. deep inside the forest safely. Perfect for thrill-seekers and nature lovers.",
    amenities: [
      { icon: "🚙", name: "Jeep Trekking (Min 6 Pax)" },
      { icon: "🔥", name: "Campfire" },
      { icon: "🍽️", name: "2 Times Food" },
      { icon: "🥾", name: "Hiking" },
      { icon: "🌲", name: "Forest Stay" },
      { icon: "🚽", name: "Restroom" },
      { icon: "🛡️", name: "Safe & Secure" }
    ],
    rooms: [
      {
        name: "Wilderness Tent Package",
        description: "True outdoor camping experience. Available for groups of 2, 4, or 6. Includes Hiking, Campfire, and 2 meals. (Jeep Trekking Not Included).",
        image: "/tent-forest.jpg",
        capacity: 6,
        beds: "Floor Bedding",
        size: "Varied Sizes",
        price: "800 per head",
        features: ["Jeep Trekking (Min 6 Pax)", "For 2/4/6 Pax", "2 Meals", "Hiking", "Campfire"],
        subImages: [
          "/tent-detail-1.jpg",
          "/tent-detail-2.jpg",
          "/tent-detail-3.jpg",
          "/tent-detail-4.jpg",
          "/tent-detail-5.jpg"
        ]
      }
    ]
  };

  const forestDomeData = {
    name: "Forest Dome",
    location: "Dinosaur Park - Kodaikanal Forest",
    image: "/dome-header.jpg",
    description: "Unique dome-shaped accommodation with breathtaking mountain views. Family-friendly themed resort with playful charm and premium comfort.",
    amenities: [
      { icon: "🦖", name: "Dinosaur Theme" },
      { icon: "🚙", name: "Jeep Trekking (Min 6 Pax)" },
      { icon: "🔥", name: "Campfire" },
      { icon: "🍽️", name: "2 Times Food" },
      { icon: "🥾", name: "Hiking" },
      { icon: "🎮", name: "Children Activities" },
      { icon: "🏊", name: "Pool" },
      { icon: "📵", name: "No Internet (Digital Detox)" }
    ],
    rooms: [
      {
        name: "Forest Dome Package",
        description: "Unique dome-shaped accommodation with breathtaking mountain views. Includes Jeep Trekking, Hiking, Campfire, and 2 meals. Perfect for couples.",
        image: "/dome-view.jpg",
        capacity: 2,
        beds: "Comfortable Double Bed",
        size: "Cozy",
        price: "6000 for 2 people",
        features: ["Jeep Trekking (Min 6 Pax)", "2 Meals", "Hiking", "Campfire", "Mountain Views", "No Internet", "2 Domes Available"],
        subImages: [
          "/dome-view.jpg",
          "/dino-detail-4.jpg",
          "/dino-dome-night.jpg",
          "/dino-detail-3.jpg",
          "/dino-detail-1.jpg"
        ]
      }
    ]
  };

  const cozyHutData = {
    name: "Cozy Hut",
    location: "Dinosaur Park - Kodaikanal Forest",
    image: "/cozy-hut.jpg",
    description: "Traditional forest hut with modern amenities. Family-friendly themed resort perfect for small families seeking comfort in nature.",
    amenities: [
      { icon: "🦖", name: "Dinosaur Theme" },
      { icon: "🔥", name: "Campfire" },
      { icon: "🍽️", name: "2 Times Food" },
      { icon: "🥾", name: "Hiking" },
      { icon: "👨‍👩‍👧‍👦", name: "Family Friendly" },
      { icon: "🎮", name: "Children Activities" },
      { icon: "🏊", name: "Pool" },
      { icon: "📵", name: "No Internet (Digital Detox)" }
    ],
    rooms: [
      {
        name: "Cozy Hut Package",
        description: "Traditional forest hut with modern amenities. Includes Hiking, Campfire, and 2 meals. Ideal for small families. Minimum 4 people.",
        image: "/cozy-hut.jpg",
        capacity: 4,
        beds: "Double Beds",
        size: "Standard",
        price: "1800 per head (Min 4 Pax)",
        features: ["Min 4 Pax", "2 Meals", "Hiking", "Campfire", "Nature Views", "2 Huts Available"],
        subImages: [
          "/cozy-hut.jpg",
          "/dino-pool.jpg",
          "/dino-detail-3.jpg",
          "/dino-detail-1.jpg",
          "/dino-detail-2.jpg"
        ]
      }
    ]
  };

  const bigAFrameData = {
    name: "Big A-Frame",
    location: "Dinosaur Park - Kodaikanal Forest",
    image: "/big-aframe.jpg",
    description: "Spacious A-Frame cottage perfect for larger groups. Premium wilderness experience with adventure activities and family-friendly amenities.",
    amenities: [
      { icon: "🦖", name: "Dinosaur Theme" },
      { icon: "🚙", name: "Jeep Trekking (Min 6 Pax)" },
      { icon: "🔥", name: "Campfire" },
      { icon: "🍽️", name: "2 Times Food" },
      { icon: "🥾", name: "Hiking" },
      { icon: "👨‍👩‍👧‍👦", name: "Family Friendly" },
      { icon: "🎮", name: "Children Activities" },
      { icon: "🏊", name: "Pool" },
      { icon: "📵", name: "No Internet (Digital Detox)" }
    ],
    rooms: [
      {
        name: "Big A-Frame Package",
        description: "Spacious A-Frame cottage perfect for larger groups. Includes Jeep Trekking, Hiking, Campfire, and 2 meals. Minimum 6 people.",
        image: "/big-aframe.jpg",
        capacity: 6,
        beds: "Multiple Beds",
        size: "Extra Large",
        price: "10000 total (Min 6 Pax)",
        features: ["Jeep Trekking (Min 6 Pax)", "Min 6 Pax", "2 Meals", "Hiking", "Campfire", "Spacious", "Premium"],
        subImages: [
          "/big-aframe.jpg",
          "/cozy-hut.jpg",
          "/dino-pool.jpg",
          "/dino-detail-5.jpg",
          "/dino-detail-3.jpg"
        ]
      }
    ]
  };

  const dormitoryHutData = {
    name: "Dormitory Hut",
    location: "Dinosaur Park - Kodaikanal Forest",
    image: "/dormitory-hut.jpg",
    description: "Shared accommodation perfect for large groups and budget travelers. Experience community living in the forest with all amenities.",
    amenities: [
      { icon: "🦖", name: "Dinosaur Theme" },
      { icon: "🔥", name: "Campfire" },
      { icon: "🍽️", name: "2 Times Food" },
      { icon: "🥾", name: "Hiking" },
      { icon: "👥", name: "Group Accommodation" },
      { icon: "🎮", name: "Children Activities" },
      { icon: "🏊", name: "Pool" },
      { icon: "📵", name: "No Internet (Digital Detox)" }
    ],
    rooms: [
      {
        name: "Dormitory Hut Package",
        description: "Shared accommodation perfect for large groups. Includes Hiking, Campfire, and 2 meals. Experience community living in the forest.",
        image: "/dormitory-hut.jpg",
        capacity: 10,
        beds: "Bunk Beds",
        size: "Large",
        price: "Contact for pricing",
        features: ["2 Meals", "Hiking", "Campfire", "Group Accommodation", "Budget Friendly", "Up to 10 Guests"],
        subImages: [
          "/dormitory-hut.jpg",
          "/dino-pool.jpg",
          "/dino-dome-night.jpg",
          "/dino-detail-1.jpg",
          "/dino-detail-2.jpg",
          "/dino-detail-3.jpg"
        ]
      }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Parallax effect for hero background
      setParallaxOffset(window.scrollY * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Add stagger effect for child elements
          const children = entry.target.querySelectorAll('.animate-on-scroll');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav container">
          <a href="#" className="logo">Journey of Kodai</a>
          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#properties" onClick={(e) => { e.preventDefault(); scrollToSection('properties'); }}>Properties</a></li>
            <li><a href="#experiences" onClick={(e) => { e.preventDefault(); scrollToSection('experiences'); }}>Experiences</a></li>
            <li><a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
          <a href="#contact" className="nav-book-btn" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Book Now</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img
          src="hero-rocks.jpg"
          alt="Misty rock formations in forest"
          className="hero-background"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />
        <div className="hero-overlay"></div>

        {/* Animated Clouds */}
        <div className="hero-clouds">
          <img src="cloud1.png" alt="" className="cloud cloud-1" />
          <img src="cloud2.png" alt="" className="cloud cloud-2" />
        </div>

        <div className="hero-content">
          <div className="hero-trust-badge">
            <div className="hero-trust-avatars">
              <div className="hero-trust-avatar">🌲</div>
              <div className="hero-trust-avatar">🏕️</div>
              <div className="hero-trust-avatar">🌿</div>
            </div>
            <div className="hero-trust-text">
              Trusted by <strong>150+ explorers and hikers</strong>
            </div>
          </div>
          <h1 className="hero-title">Escape Into Nature</h1>
          <p className="hero-subtitle">
            Led by locals, built for those who want more than a pretty view.<br />
            Real connection, fresh air, and stories to take home.
          </p>
          <div className="hero-cta">
            <button className="btn btn-white" onClick={() => scrollToSection('properties')}>Start Your Journey →</button>
            <button className="btn btn-secondary-light" onClick={() => scrollToSection('contact')}>Check Availability</button>
          </div>
        </div>
        <div className="scroll-indicator">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section-large">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Welcome to Journey of Kodai</h2>
              <p>
                Nestled in the heart of lush forests, Journey of Kodai offers an escape from the ordinary.
                We believe in the transformative power of nature and have created two unique properties
                that blend adventure, comfort, and sustainability.
              </p>
              <p>
                Each stay is thoughtfully designed to immerse you in the beauty of the forest while
                providing modern comforts. Whether you're seeking adventure at Mowgli Camp or family
                fun at Dinosaur Park, we promise an unforgettable experience.
              </p>
              <p>
                Our commitment to eco-conscious hospitality ensures that your journey leaves only
                footprints and takes only memories.
              </p>
            </div>
            <div className="about-image">
              <div className="about-image-grid">
                <div className="about-grid-item about-grid-tall">
                  <img src="kodai-9.jpg" alt="Golden Hour Fog" />
                </div>
                <div className="about-grid-item">
                  <img src="kodai-4.jpg" alt="Forest Retreat" />
                </div>
                <div className="about-grid-item">
                  <img src="kodai-8.jpg" alt="Resort Gazebo" />
                </div>
                <div className="about-grid-item">
                  <img src="kodai-10.jpg" alt="Sunset Clouds" />
                </div>
                <div className="about-grid-item">
                  <img src="kodai-7.jpg" alt="Misty Rocks" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resort Guide Section */}
      <section id="resort-guide" style={{
        background: 'linear-gradient(135deg, #0a1f1a 0%, #0d2820 30%, #0f3428 60%, #112f26 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle overlay pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 15% 20%, rgba(197, 164, 126, 0.03) 0%, transparent 40%),
            radial-gradient(circle at 85% 80%, rgba(82, 183, 136, 0.05) 0%, transparent 50%),
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)
          `,
          pointerEvents: 'none'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header animate-on-scroll" style={{ marginBottom: '0' }}>
            <h2 style={{
              color: '#d4af7a',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              fontFamily: 'Playfair Display, serif'
            }}>Resort Guide</h2>
            <p style={{
              color: 'rgba(197, 164, 126, 0.9)',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}>Flip through our properties, experiences, and essential information.</p>
          </div>
          <JungleBook />
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="properties section-large">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2>Our Properties</h2>
            <p>Two distinct experiences, one incredible destination</p>
          </div>

          {/* Mowgli Camp */}
          <div className="property-block">
            <div className="property-header animate-on-scroll">
              <h3>🌲 Mowgli Camp</h3>
              <p>Jungle-inspired adventure stay where wilderness meets comfort</p>
            </div>
            <div className="accommodation-grid">
              <div className="accommodation-card animate-on-scroll" style={{ cursor: 'pointer' }}>
                <div className="accommodation-image">
                  <img src="/aframe-painted.jpg" alt="A-Frame Cottage" />
                </div>
                <div className="accommodation-info">
                  <h4>A-Frame Cottage</h4>
                  <span className="accommodation-capacity">2 Cottages Available</span>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: '15px', width: '100%' }}
                    onClick={() => setSelectedProperty(aFrameCottageData)}
                  >
                    View Details & Book
                  </button>
                </div>
              </div>
              <div className="accommodation-card animate-on-scroll">
                <div className="accommodation-image">
                  <img src="/tent-glow.jpg" alt="Wilderness Tent" />
                </div>
                <div className="accommodation-info">
                  <h4>Wilderness Tent</h4>
                  <span className="accommodation-capacity">5 Tents Available</span>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: '15px', width: '100%' }}
                    onClick={() => setSelectedProperty(tentData)}
                  >
                    View Details & Book
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dinosaur Park */}
          <div className="property-block" style={{ position: 'relative' }}>

            <div className="property-header animate-on-scroll">
              <h3>🦖 Dinosaur Park</h3>
              <p>Family-friendly themed forest resort with playful charm and premium comfort</p>
            </div>
            <div className="accommodation-grid">
              <div className="accommodation-card">
                <div className="accommodation-image">
                  <img src="/dome-view.jpg" alt="Dome" />
                </div>
                <div className="accommodation-info">
                  <h4>Forest Dome</h4>
                  <span className="accommodation-capacity">2 Domes Available</span>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: '15px', width: '100%' }}
                    onClick={() => setSelectedProperty(forestDomeData)}
                  >
                    View Details & Book
                  </button>
                </div>
              </div>
              <div className="accommodation-card">
                <div className="accommodation-image">
                  <img src="/cozy-hut.jpg" alt="Hut" />
                </div>
                <div className="accommodation-info">
                  <h4>Cozy Hut</h4>
                  <span className="accommodation-capacity">2 Huts Available</span>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: '15px', width: '100%' }}
                    onClick={() => setSelectedProperty(cozyHutData)}
                  >
                    View Details & Book
                  </button>
                </div>
              </div>
              <div className="accommodation-card">
                <div className="accommodation-image">
                  <img src="/big-aframe.jpg" alt="Big A-Frame" />
                </div>
                <div className="accommodation-info">
                  <h4>Big A-Frame</h4>
                  <span className="accommodation-capacity">Min 6 Guests</span>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: '15px', width: '100%' }}
                    onClick={() => setSelectedProperty(bigAFrameData)}
                  >
                    View Details & Book
                  </button>
                </div>
              </div>
              <div className="accommodation-card">
                <div className="accommodation-image">
                  <img src="/dormitory-hut.jpg" alt="Dormitory Hut" />
                </div>
                <div className="accommodation-info">
                  <h4>Dormitory Hut</h4>
                  <span className="accommodation-capacity">1 Dormitory Available</span>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: '15px', width: '100%' }}
                    onClick={() => setSelectedProperty(dormitoryHutData)}
                  >
                    View Details & Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="experiences section-large">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2>Experiences & Activities</h2>
            <p>Create memories that last a lifetime</p>
          </div>
          <div className="experiences-grid">
            <div className="experience-card">
              <div className="experience-icon">🔥</div>
              <h4>Campfire Nights</h4>
              <p>Gather around the warmth, share stories under the stars</p>
            </div>
            <div className="experience-card">
              <div className="experience-icon">🌲</div>
              <h4>Forest Walks</h4>
              <p>Guided nature trails through pristine wilderness</p>
            </div>
            <div className="experience-card">
              <div className="experience-icon">🦋</div>
              <h4>Nature Exploration</h4>
              <p>Discover the rich biodiversity of the forest</p>
            </div>
            <div className="experience-card">
              <div className="experience-icon">👨‍👩‍👧‍👦</div>
              <h4>Family Activities</h4>
              <p>Fun-filled adventures for all ages</p>
            </div>
            <div className="experience-card">
              <div className="experience-icon">🎨</div>
              <h4>Themed Experiences</h4>
              <p>Unique activities at each property</p>
            </div>
            <div className="experience-card">
              <div className="experience-icon">📸</div>
              <h4>Photography Tours</h4>
              <p>Capture the beauty of nature</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section" style={{
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
        padding: '0',
        margin: '0',
        width: '100%'
      }}>
        <div style={{ padding: '60px 0 40px 0', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#2d5016',
            marginBottom: '15px',
            fontFamily: 'Playfair Display, serif'
          }}>Our Gallery</h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>Experience the beauty of Kodaikanal through our lens</p>
        </div>
        <div style={{
          width: '100%',
          height: '700px',
          background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <CircularGallery
            items={[
              { image: '/gallery-1.jpg', text: 'Waterfall Adventure' },
              { image: '/gallery-2.jpg', text: 'Friends & Views' },
              { image: '/gallery-3.jpg', text: 'Mountain Picnic' },
              { image: '/gallery-4.jpg', text: 'Sunset Clouds' }
            ]}
            bend={2.5}
            textColor="#ffffff"
            borderRadius={0.08}
            font="bold 28px Inter, sans-serif"
            scrollSpeed={2.5}
            scrollEase={0.08}
          />
        </div>
        <div style={{
          padding: '40px 20px',
          textAlign: 'center',
          color: '#666',
          fontSize: '0.95rem'
        }}>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="testimonials section-large">
        <div className="container">
          <div className="section-header">
            <h2>Guest Testimonials</h2>
            <p>What our guests say about their journey</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "An absolutely magical experience! The A-Frame cottage was stunning, and waking up
                to the sounds of the forest was pure bliss. Can't wait to return!"
              </p>
              <p className="testimonial-author">Sarah & Michael</p>
              <p className="testimonial-location">Bangalore</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Dinosaur Park was perfect for our family. The kids loved the themed accommodations,
                and we appreciated the thoughtful design and peaceful surroundings."
              </p>
              <p className="testimonial-author">The Sharma Family</p>
              <p className="testimonial-location">Mumbai</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "A true escape from city life. The luxury tents at Mowgli Camp exceeded our expectations.
                The campfire nights and forest walks were unforgettable."
              </p>
              <p className="testimonial-author">Priya & Raj</p>
              <p className="testimonial-location">Chennai</p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="contact section-large">
        <div className="container">
          <div className="section-header">
            <h2>Location & Contact</h2>
            <p>Plan your journey to the forest</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <div className="contact-item">
                <span>📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Kodaikanal Forest Region, Tamil Nadu</p>
                </div>
              </div>
              <div className="contact-item">
                <span>📧</span>
                <div>
                  <strong>Email</strong>
                  <p>hello@journeyofkodai.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span>📱</span>
                <div>
                  <strong>Phone</strong>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="contact-actions">
                <a href="tel:+919876543210" className="btn btn-white">Call Now</a>
                <a href="https://wa.me/919876543210" className="btn btn-secondary">WhatsApp</a>
                <a href="mailto:hello@journeyofkodai.com" className="btn btn-secondary">Email</a>
              </div>
            </div>
            <div className="map-placeholder">
              <p>📍 Map Location</p>
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="footer" >
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Journey of Kodai</h3>
              <p>
                Experience the magic of forest living. Two unique properties,
                countless memories waiting to be made.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📍</a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#properties">Properties</a></li>
                <li><a href="#experiences">Experiences</a></li>
                <li><a href="#gallery">Gallery</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Properties</h4>
              <ul>
                <li><a href="#mowgli">Mowgli Camp</a></li>
                <li><a href="#dinosaur">Dinosaur Park</a></li>
                <li><a href="#contact">Book Now</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cancellation Policy</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Journey of Kodai. All rights reserved. Crafted with 💚 for nature lovers.</p>
          </div>
        </div>
      </footer >

      {/* Property Details Modal */}
      {selectedProperty && (
        <PropertyDetails
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div >
  );
}

export default App;
