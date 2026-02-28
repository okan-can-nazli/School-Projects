import { useState } from "react";

function MeetingRequest() {
  const [message, setMessage] = useState("");
  const [ndaAccepted, setNdaAccepted] = useState(false);
  const [timeSlot1, setTimeSlot1] = useState("");
  const [timeSlot2, setTimeSlot2] = useState("");

  const handleSubmit = () => {
    if (!ndaAccepted) {
      alert("You must accept the NDA to proceed!");
      return;
    }
    if (!message) {
      alert("Please write a message!");
      return;
    }
    if (!timeSlot1) {
      alert("Please propose at least one time slot!");
      return;
    }
    alert("Meeting request sent successfully!");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <a href="/post-detail">← Back to Post</a>
      <h2>Request a Meeting</h2>
      <p><strong>Post:</strong> Looking for cardiologist</p>

      <h3>Your Message</h3>
      <textarea
        placeholder="Introduce yourself and explain your interest..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ display: "block", width: "100%", height: "100px", padding: "8px", marginBottom: "15px" }}
      />

      <h3>Propose Time Slots</h3>
      <input type="datetime-local" value={timeSlot1}
        onChange={(e) => setTimeSlot1(e.target.value)}
        style={{ display: "block", width: "100%", padding: "8px", marginBottom: "10px" }} />
      <input type="datetime-local" value={timeSlot2}
        onChange={(e) => setTimeSlot2(e.target.value)}
        style={{ display: "block", width: "100%", padding: "8px", marginBottom: "15px" }} />

      <div style={{ backgroundColor: "#f5f5f5", padding: "15px", borderRadius: "8px", marginBottom: "15px" }}>
        <h4>NDA Agreement</h4>
        <p style={{ fontSize: "13px" }}>By accepting, you agree not to disclose any confidential information shared during or after this meeting without written consent.</p>
        <label>
          <input type="checkbox" checked={ndaAccepted}
            onChange={(e) => setNdaAccepted(e.target.checked)} />
          {" "}I accept the NDA terms
        </label>
      </div>

      <button onClick={handleSubmit}
        style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px" }}>
        Send Meeting Request
      </button>
    </div>
  );
}

export default MeetingRequest;