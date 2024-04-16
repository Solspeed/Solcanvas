"use client"
import { useState } from 'react';
import supabase from '../../supabase'

const OnboardingForm = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from('onboarding').insert([{ name, bio }]);
      if (error) {
        throw error;
      }
      console.log('Data inserted successfully:', data);
      // You can add further logic here like showing success message, resetting form, etc.
    } catch (error:any) {
      console.error('Error inserting data:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default OnboardingForm;
