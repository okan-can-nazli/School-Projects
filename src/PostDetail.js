function PostDetail() {
  const post = {
    id: 1,
    title: "Looking for cardiologist",
    domain: "Cardiology",
    explanation: "We are developing an AI-based heart monitoring system and need clinical expertise.",
    expertise: "Cardiologist with ICU experience",
    stage: "Prototype",
    commitment: "10 hours/week",
    confidentiality: "public",
    city: "Ankara",
    country: "Turkey",
    role: "Engineer",
    status: "Active"
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <a href="/dashboard">← Back to Dashboard</a>
      <h2>{post.title}</h2>
      <p><strong>Status:</strong> {post.status}</p>
      <p><strong>Domain:</strong> {post.domain}</p>
      <p><strong>Explanation:</strong> {post.explanation}</p>
      <p><strong>Expertise Needed:</strong> {post.expertise}</p>
      <p><strong>Project Stage:</strong> {post.stage}</p>
      <p><strong>Commitment:</strong> {post.commitment}</p>
      <p><strong>Location:</strong> {post.city}, {post.country}</p>
      <p><strong>Confidentiality:</strong> {post.confidentiality === "public" ? "Public Pitch" : "Details in Meeting Only"}</p>
      <br/>
      <button onClick={() => window.location.href="/meeting-request"} style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px" }}>
        Request Meeting
      </button>
    </div>
  );
}

export default PostDetail;