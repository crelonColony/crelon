import React from "react";
import Logo from "../assets/network.png"
const RentalCard = () => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img
          src={Logo} // replace with actual image url
          alt="Premium Family House"
          style={styles.image}
        />
        <div style={styles.forRentBadge}>For Rent</div>
        <div style={styles.iconGroup}>
          <button style={styles.iconBtn}>🗺️</button>
          <button style={styles.iconBtn}>❤️</button>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.priceRow}>
          <h2 style={styles.price}>$2,500</h2>
          <span style={styles.priceDuration}>/ years</span>
          <div style={styles.rating}>
            <span style={styles.star}>⭐</span> 4.9 / 5.0
          </div>
        </div>

        <h3 style={styles.title}>Premium Family House</h3>
        <p style={styles.address}>
          6391 Elgin St. Celina, Delaware 10299
        </p>

        <div style={styles.infoRow}>
          <div style={styles.infoItem}>
            <span style={styles.icon}>🛏️</span> 4 bedroom
          </div>
          <div style={styles.infoItem}>
            <span style={styles.icon}>🛁</span> 3 bathroom
          </div>
          <div style={styles.infoItem}>
            <span style={styles.icon}>🏊‍♂️</span> 1 private pool
          </div>
        </div>

        <div style={styles.contactRow}>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg" // replace with actual photo url
            alt="Thom Jason"
            style={styles.contactImage}
          />
          <div>
            <div style={styles.contactName}>Thom Jason <span style={styles.verified}>✔️</span></div>
            <div style={styles.contactPhone}>(209) 009-0108</div>
          </div>
          <button style={styles.callBtn} title="Call Thom Jason">📞</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: 400,
    borderRadius: 12,
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fff",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  forRentBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "4px 12px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "600",
  },
  iconGroup: {
    position: "absolute",
    bottom: 12,
    right: 12,
    display: "flex",
    gap: 10,
  },
  iconBtn: {
    backgroundColor: "#fff",
    borderRadius: "50%",
    border: "none",
    padding: 8,
    cursor: "pointer",
    fontSize: 18,
    boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
  },
  content: {
    padding: 16,
  },
  priceRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 6,
  },
  price: {
    margin: 0,
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
  },
  priceDuration: {
    fontSize: 14,
    color: "#555",
  },
  rating: {
    marginLeft: "auto",
    backgroundColor: "#ffe599",
    borderRadius: 16,
    padding: "2px 10px",
    fontWeight: "600",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    gap: 4,
    color: "#7a5300",
  },
  star: {
    fontSize: 16,
  },
  title: {
    margin: "8px 0 4px",
    fontWeight: "700",
    fontSize: 18,
  },
  address: {
    margin: "0 0 14px",
    fontSize: 14,
    color: "#666",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    color: "#333",
    fontWeight: "600",
    fontSize: 14,
  },
  icon: {
    fontSize: 18,
  },
  contactRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    borderTop: "1px solid #ddd",
    paddingTop: 12,
  },
  contactImage: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    objectFit: "cover",
  },
  contactName: {
    fontWeight: "700",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  verified: {
    color: "#1e90ff",
    fontSize: 14,
  },
  contactPhone: {
    fontSize: 13,
    color: "#555",
  },
  callBtn: {
    marginLeft: "auto",
    backgroundColor: "#e0f7e9",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    width: 36,
    height: 36,
    fontSize: 18,
  },
};

export default RentalCard;
