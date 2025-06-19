import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserCheckIn = () => {
  const [form, setForm] = useState({ name: '', phone: '' });

  const handleNameChange = (e) => {
    const value = e.target.value;
    // Allow only letters and spaces
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setForm({ ...form, name: value });
    } else {
      toast.warning(' Only letters are allowed in the name field.');
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setForm({ ...form, phone: value });
    } else {
      toast.warning(' Only numbers are allowed in the mobile number field.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.name.trim() === '' || form.phone.trim() === '') {
      toast.error('❌ Name and phone cannot be empty.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/queue/join', form);
      toast.success(`🎟️ Joined queue! Ticket ID: ${res.data._id}`);
      setForm({ name: '', phone: '' });
    } catch (error) {
      console.error('Error joining queue:', error);
      toast.error('Failed to join the queue.');
    }
  };

  return (
    <div className="content" style={{ textAlign: 'center' }}>
      <div style={{
  background: '#f5f7ff',
  border: '1px solid #d0d7ff',
  borderRadius: '12px',
  padding: '24px',
  maxWidth: '100%',
  margin: '0 auto 40px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
}}>
  <h1 style={{ color: '#003366', marginBottom: '30px', fontWeight: '700' }}>Grab Your Digital Token</h1>

  <p style={{ color: '#000000', fontSize: '16px' }}>
    Let us handle the line. Get notified when it's your turn — no crowd, no chaos.
  </p>
</div>

      <h2 style={{ color: '#003366', marginBottom: '30px' }}> Hop In the Queue</h2>

      <form onSubmit={handleSubmit} style={{ display: 'inline-block', maxWidth: '400px', width: '100%' }}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={handleNameChange}
          required
          style={{
            display: 'block',
            width: '100%',
            padding: '12px',
            marginBottom: '20px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />
        <input
          placeholder="Mobile number"
          value={form.phone}
          onChange={handlePhoneChange}
          required
          style={{
            display: 'block',
            width: '100%',
            padding: '12px',
            marginBottom: '20px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Join Queue
        </button>
      </form>
    </div>
  );
};

export default UserCheckIn;
