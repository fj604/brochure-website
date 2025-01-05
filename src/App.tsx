import React from 'react';
import Header from './components/Header';
import MissionSection from './components/MissionSection';
import ServicesSection from './components/ServicesSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import '@aws-amplify/ui-react/styles.css';
import './styles.css';

const App: React.FC = () => (
  <div className="app-container">
    <Header />
    <main className="main-content">
      <MissionSection />
      <ServicesSection />
      <ContactForm />
    </main>
    <Footer />
  </div>
);

export default App;