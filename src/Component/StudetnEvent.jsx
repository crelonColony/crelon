import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentSidebar from "./DashboardNavbar";
import "../Style/StudentEvent.css"
import EventCard from "../Component/EventCard";
import Search from "../Component/Search";
function StudentEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const config = token
          ? { headers: { Authorization: `Bearer ${token}` } }
          : {}; // allow public access if no token
        const { data } = await axios.get("http://localhost:5000/api/events", config);
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
        if (error.response?.status === 401) {
          alert("Unauthorized — please log in first.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [token]);

  const handleRegister = async (event) => {
    try {
      // Paid Event → Razorpay
      if (event.type === "paid") {
        const orderResponse = await axios.post(
          "http://localhost:5000/api/payment/create-order",
          { amount: event.price },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const { amount, id: order_id, currency } = orderResponse.data;

        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          amount: amount.toString(),
          currency,
          name: "Crelon Event Registration",
          description: `Register for ${event.title}`,
          order_id,
          handler: async (response) => {
            const verifyResponse = await axios.post(
              "http://localhost:5000/api/payment/verify-payment",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                eventId: event._id,
              },
              { headers: { Authorization: `Bearer ${token}` } }
            );
            if (verifyResponse.status === 200) {
              alert("🎉 Payment successful! You're registered for this event.");
            }
          },
          theme: { color: "#5468ff" },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } else {
        // Free Event
        const res = await axios.post(
          `http://localhost:5000/api/events/${event._id}/register`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (res.status === 200) {
          alert("🎉 Successfully registered for free event!");
        }
      }
    } catch (error) {
      console.error("Error registering for event:", error);
      alert("Something went wrong during registration.");
    }
  };

  if (loading) return <p className="loading">Loading events...</p>;

  const latestEvents = events.slice(-3).reverse();

  return (
    <div className="dashboard-container">
      <StudentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <Search/>
        <h1 className="event-heading">Upcoming Events</h1>

      {/* Latest Events */}
      <section className="latest-events">
        
        <div className="event-grid">
          {latestEvents.map((event) => (
            <EventCard
              key={event._id}
              image={`http://localhost:5000${event.image}`}
              // category="Workshop"
              // status="Upcoming"
              title={event.title}
              description={event.description}
              date={new Date(event.date).toLocaleDateString()}
              location={event.location}
              spots={`${event.registeredStudents?.length || 0} / 25 spots`}
              button={event.type === "paid" ? `Pay ₹${event.price}` : "Register Free"}
              onClick={() => handleRegister(event)}
            />
          ))}
        </div>
      </section>

      {/* All Events */}
      <section className="all-events">
        <h2>All Events</h2>
        <div className="event-grid">
          {events.map((event) => (
            // <div className="event-card" key={event._id}>
            //   <img
            //     src={`http://localhost:5000${event.image}`}
            //     alt={event.title}
            //     className="event-image"
            //   />
            //   <div className="event-info">
            //     <h3>{event.title}</h3>
            //     <p>{event.description}</p>
            //     <p>
            //       <strong>Mentor:</strong> {event.mentorName || "TBA"}
            //     </p>
            //     <p>
            //       <strong>Date:</strong>{" "}
            //       {new Date(event.date).toLocaleDateString()}
            //     </p>
            //     <button onClick={() => handleRegister(event)} className="register-btn">
            //       {event.type === "paid"
            //         ? `Pay ₹${event.price}`
            //         : "Register Free"}
            //     </button>
            //   </div>
            // </div>
            <EventCard
              key={event._id}
              image={`http://localhost:5000${event.image}`}
              // category="Workshop"
              // status="Upcoming"
              title={event.title}
              description={event.description}
              date={new Date(event.date).toLocaleDateString()}
              location={event.location}
              spots={`${event.registeredStudents?.length || 0} / 25 spots`}

              button={event.type === "paid" ? `Pay ₹${event.price}` : "Register Free"}
              onClick={() => handleRegister(event)}
            />
          ))}
        </div>
      </section>
      </main>
    </div>
  );
}

export default StudentEvents;
