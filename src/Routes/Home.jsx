import React, { useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { theme, data } = useContext(ContextGlobal);

  return (
    <main className={`home ${theme}`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {data.length > 0 ? (
          data.map((dentist) => (
            <Card 
              key={dentist.id} 
              id={dentist.id} 
              name={dentist.name} 
              username={dentist.username} 
              theme={theme}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
};

export default Home;
