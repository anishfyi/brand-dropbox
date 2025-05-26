import React from 'react';
import Layout from '../components/layout/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-sharp-grotesk font-medium mb-4">
          Dropbox Brand Guidelines
        </h1>
        <p className="text-lg mb-8">
          At Dropbox, our Brand Guidelines help us infuse everything we make with identity. 
          From icons to illustration, logos to language, this collection is the foundation 
          for how Dropbox looks, feels, and sounds like Dropbox.
        </p>
      </div>
    </Layout>
  );
};

export default Home; 