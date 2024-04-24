// TeamMemberForm.js
"use client";

import React, { useState } from "react";

function TeamMemberForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [twitter, setTwitter] = useState("");
  const [github, setGithub] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const teamMemberData = { name, image_url, twitter, github };
    onSubmit(teamMemberData);
    // Reset form fields
    setName("");
    setImageUrl("");
    setTwitter("");
    setGithub("");
  };  

  return (
    <div>
      <h2>Add Team Member</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={image_url}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
          required
        />
        <input
          type="text"
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
          placeholder="Twitter Link"
          required
        />
        <input
          type="text"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          placeholder="GitHub Link"
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TeamMemberForm;
