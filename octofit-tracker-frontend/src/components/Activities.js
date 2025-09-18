import React, { useEffect, useState } from 'react';

const Activities = () => {

  if (!process.env.REACT_APP_CODESPACE_NAME) {
    console.error('REACT_APP_CODESPACE_NAME is not set!');
  }
  const [activities, setActivities] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Activities API endpoint:', apiUrl);
        console.log('Fetched activities:', results);
      });
  }, [apiUrl]);

  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map((activity, idx) => (
          <li key={idx}>{activity.name} ({activity.user} - {activity.team})</li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
