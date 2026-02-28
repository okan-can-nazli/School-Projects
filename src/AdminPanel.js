import { useState } from "react";

function AdminPanel() {
  const [users, setUsers] = useState([
    { id: 1, name: "Ali Yılmaz", email: "ali@hacettepe.edu", role: "Engineer", status: "Active" },
    { id: 2, name: "Ayşe Kara", email: "ayse@ankara.edu", role: "Healthcare", status: "Active" },
    { id: 3, name: "Mehmet Can", email: "mehmet@itu.edu", role: "Engineer", status: "Suspended" },
  ]);

  const [posts, setPosts] = useState([
    { id: 1, title: "Looking for cardiologist", domain: "Cardiology", status: "Active", city: "Ankara" },
    { id: 2, title: "Need ML engineer", domain: "Radiology", status: "Active", city: "Istanbul" },
    { id: 3, title: "AI skin detection", domain: "Dermatology", status: "Expired", city: "Ankara" },
  ]);

  const suspendUser = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === "Active" ? "Suspended" : "Active" } : u));
  };

  const removePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <div style={{ maxWidth: "900px", margin: "40px auto", padding: "20px" }}>
      <h2>Admin Panel</h2>
      <a href="/dashboard">← Back to Dashboard</a>

      <h3>User Management</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "30px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Email</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Role</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Status</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.name}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.email}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.role}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.status}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <button onClick={() => suspendUser(user.id)}
                  style={{ padding: "4px 10px", backgroundColor: user.status === "Active" ? "#dc3545" : "#28a745", color: "white", border: "none", borderRadius: "4px" }}>
                  {user.status === "Active" ? "Suspend" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Post Management</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Title</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Domain</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>City</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Status</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{post.title}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{post.domain}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{post.city}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{post.status}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <button onClick={() => removePost(post.id)}
                  style={{ padding: "4px 10px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "4px" }}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;