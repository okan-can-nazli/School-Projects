function Dashboard() {
  const posts = [
    { id: 1, title: "Looking for cardiologist", role: "Engineer", domain: "Cardiology", city: "Ankara", stage: "Prototype" },
    { id: 2, title: "Need ML engineer for diagnostics", role: "Healthcare", domain: "Radiology", city: "Istanbul", stage: "Idea" },
    { id: 3, title: "AI skin detection project", role: "Engineer", domain: "Dermatology", city: "Ankara", stage: "Pilot" },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <h2>Health AI Platform</h2>
      <button style={{ float: "right", padding: "8px 16px" }}>+ New Post</button>
      <h3>Available Posts</h3>
      {posts.map((post) => (
        <div key={post.id} style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "10px", borderRadius: "8px" }}>
          <h4>{post.title}</h4>
          <p>Domain: {post.domain} | City: {post.city} | Stage: {post.stage}</p>
          <button style={{ padding: "6px 12px" }}>View Details</button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;