import React, { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [resp, setResp] = useState(null);

  const send = async () => {
    const form = new FormData();
    form.append("file", file);
    const res = await axios.post("http://localhost:8000/analyze", form);
    setResp(res.data);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>VisionDock Frontend</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={send}>Upload</button>

      <pre>{resp && JSON.stringify(resp, null, 2)}</pre>
    </div>
  );
}

export default App;
