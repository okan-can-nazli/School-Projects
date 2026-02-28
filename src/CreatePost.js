import { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [domain, setDomain] = useState("");
  const [explanation, setExplanation] = useState("");
  const [expertise, setExpertise] = useState("");
  const [stage, setStage] = useState("idea");
  const [commitment, setCommitment] = useState("");
  const [confidentiality, setConfidentiality] = useState("public");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = () => {
    if (!title || !domain || !explanation) {
      alert("Please fill in all required fields!");
      return;
    }
    alert("Post created successfully!");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <h2>Create New Post</h2>
      <input type="text" placeholder="Title *" value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px" }} />
      <input type="text" placeholder="Working Domain (e.g. Cardiology) *" value={domain}
        onChange={(e) => setDomain(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px" }} />
      <textarea placeholder="Short Explanation *" value={explanation}
        onChange={(e) => setExplanation(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px", height: "100px" }} />
      <input type="text" placeholder="Expertise Needed" value={expertise}
        onChange={(e) => setExpertise(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px" }} />
      <select value={stage} onChange={(e) => setStage(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px" }}>
        <option value="idea">Idea</option>
        <option value="concept">Concept Validation</option>
        <option value="prototype">Prototype Developed</option>
        <option value="pilot">Pilot Testing</option>
        <option value="predeployment">Pre-Deployment</option>
      </select>
      <input type="text" placeholder="Level of Commitment" value={commitment}
        onChange={(e) => setCommitment(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px" }} />
      <select value={confidentiality} onChange={(e) => setConfidentiality(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px" }}>
        <option value="public">Public Short Pitch</option>
        <option value="private">Details in Meeting Only</option>
      </select>
      <input type="text" placeholder="City" value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px" }} />
      <input type="text" placeholder="Country" value={country}
        onChange={(e) => setCountry(e.target.value)}
        style={{ display: "block", width: "100%", marginBottom: "10px", padding: "8px" }} />
      <button onClick={handleSubmit} style={{ padding: "8px 20px" }}>Create Post</button>
      <a href="/dashboard" style={{ marginLeft: "15px" }}>Cancel</a>
    </div>
  );
}

export default CreatePost;