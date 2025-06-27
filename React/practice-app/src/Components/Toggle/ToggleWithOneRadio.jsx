import React, { useState } from 'react';

const RadioToggle = () => {
  const [status, setStatus] = useState('off');

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Radio Toggle</h2>

      <label>
        <input
          type="radio"
          value="on"
          name="toggle"
          checked={status === 'on'}
          onChange={handleChange}
        />
        ON
      </label>

      <label style={{ marginLeft: '20px' }}>
        <input
          type="radio"
          value="off"
          name="toggle"
          checked={status === 'off'}
          onChange={handleChange}
        />
        OFF
      </label>

      <div style={{ marginTop: '20px' }}>
        {status === 'on' ? (
          <p>Status is <strong>ON ✅</strong></p>
        ) : (
          <p>Status is <strong>OFF ❌</strong></p>
        )}
      </div>
    </div>
  );
};

export default RadioToggle;
