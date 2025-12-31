import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PropertyDetails.css';

const RoomGallery = ({ images, roomName, onImageClick }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 200;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="room-gallery-container">
            <button className="gallery-nav-btn prev-btn" onClick={() => scroll('left')}>‹</button>
            <div className="room-gallery" ref={scrollRef}>
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`${roomName} detail ${i + 1}`}
                        className="room-gallery-img"
                        onClick={() => onImageClick(img, i)}
                    />
                ))}
            </div>
            <button className="gallery-nav-btn next-btn" onClick={() => scroll('right')}>›</button>
        </div>
    );
};

const PropertyDetails = ({ property, onClose }) => {
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [viewImage, setViewImage] = useState(null); // { src, images, index, room }
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(2);

    if (!property) return null;

    const handleBooking = (room) => {
        setSelectedRoom(room);
    };

    const handleSubmitBooking = (e) => {
        e.preventDefault();
        alert(`Booking request submitted for ${selectedRoom.name}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}`);
    };

    const handleNextImage = (e) => {
        e.stopPropagation();
        if (!viewImage) return;
        const newIndex = (viewImage.index + 1) % viewImage.images.length;
        setViewImage({ ...viewImage, src: viewImage.images[newIndex], index: newIndex });
    };

    const handlePrevImage = (e) => {
        e.stopPropagation();
        if (!viewImage) return;
        const newIndex = (viewImage.index - 1 + viewImage.images.length) % viewImage.images.length;
        setViewImage({ ...viewImage, src: viewImage.images[newIndex], index: newIndex });
    };

    return (
        <AnimatePresence>
            <motion.div
                className="property-details-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="property-details-container"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button className="close-details-btn" onClick={onClose}>
                        ✕
                    </button>

                    {/* Header */}
                    <div className="property-details-header">
                        <img src={property.image} alt={property.name} className="property-details-hero" />
                        <div className="property-details-title-section">
                            <h1>{property.name}</h1>
                            <p className="property-location">📍 {property.location}</p>
                            <p className="property-description">{property.description}</p>
                        </div>
                    </div>

                    {/* Amenities */}
                    <div className="property-amenities-section">
                        <h2>Amenities & Features</h2>
                        <div className="amenities-grid">
                            {property.amenities.map((amenity, index) => (
                                <div key={index} className="amenity-item">
                                    <span className="amenity-icon">{amenity.icon}</span>
                                    <span>{amenity.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Available Rooms */}
                    <div className="rooms-section">
                        <h2>Available Accommodations</h2>
                        <div className="rooms-grid">
                            {property.rooms.map((room, index) => (
                                <div key={index} className="room-card">
                                    <img src={room.image} alt={room.name} className="room-image" />
                                    <div className="room-info">
                                        <h3>{room.name}</h3>
                                        <p className="room-description">{room.description}</p>

                                        {/* Room Gallery */}
                                        {room.subImages && (
                                            <RoomGallery
                                                images={room.subImages}
                                                roomName={room.name}
                                                onImageClick={(img, i) => setViewImage({ src: img, images: room.subImages, index: i, room: room })}
                                            />
                                        )}

                                        <div className="room-features">
                                            <span>👥 {room.capacity} Guests</span>
                                            <span>🛏️ {room.beds}</span>
                                            <span>📏 {room.size}</span>
                                        </div>
                                        <div className="room-price-section">
                                            <div className="room-price">
                                                <span className="price-amount">₹{room.price}</span>
                                                <span className="price-period">/night</span>
                                            </div>
                                            <button
                                                className="btn btn-primary book-room-btn"
                                                onClick={() => handleBooking(room)}
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Booking Modal */}
                    {selectedRoom && (
                        <div className="booking-modal-overlay" onClick={() => setSelectedRoom(null)}>
                            <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
                                <button className="close-modal-btn" onClick={() => setSelectedRoom(null)}>✕</button>
                                <h2>Book {selectedRoom.name}</h2>
                                <form onSubmit={handleSubmitBooking} className="booking-form">
                                    <div className="form-group">
                                        <label>Check-in Date</label>
                                        <input
                                            type="date"
                                            value={checkIn}
                                            onChange={(e) => setCheckIn(e.target.value)}
                                            required
                                            min={new Date().toISOString().split('T')[0]}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Check-out Date</label>
                                        <input
                                            type="date"
                                            value={checkOut}
                                            onChange={(e) => setCheckOut(e.target.value)}
                                            required
                                            min={checkIn || new Date().toISOString().split('T')[0]}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Number of Guests</label>
                                        <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                                            {[...Array(selectedRoom.capacity)].map((_, i) => (
                                                <option key={i + 1} value={i + 1}>{i + 1} Guest{i > 0 ? 's' : ''}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="booking-summary">
                                        <p>Price per night: <strong>₹{selectedRoom.price}</strong></p>
                                    </div>
                                    <button type="submit" className="btn btn-primary submit-booking-btn">
                                        Confirm Booking
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Image Lightbox Overlay */}
                    {viewImage && (
                        <div className="lightbox-overlay" onClick={() => setViewImage(null)}>
                            <button className="lightbox-close-btn" onClick={() => setViewImage(null)}>✕</button>

                            {/* Navigation Buttons */}
                            <button className="lightbox-nav-btn prev" onClick={handlePrevImage}>‹</button>
                            <img src={viewImage.src} alt="Full view" className="lightbox-image" onClick={(e) => e.stopPropagation()} />
                            <button className="lightbox-nav-btn next" onClick={handleNextImage}>›</button>

                            {/* Book Now Button in Lightbox */}
                            {viewImage.room && (
                                <button
                                    className="lightbox-book-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        const roomToBook = viewImage.room;
                                        setViewImage(null);
                                        // Slight delay to allow lightbox to close smoothly before opening booking modal
                                        setTimeout(() => handleBooking(roomToBook), 100);
                                    }}
                                >
                                    Book This {viewImage.room.name.includes('Package') ? 'Package' : 'Room'}
                                </button>
                            )}
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PropertyDetails;
