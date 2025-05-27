import { accordionData } from '../utils/content';
import { useState } from 'react';

// Style objects
const accordionStyles = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const accordionCardStyles = {
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  marginBottom: '16px',
  overflow: 'hidden',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 20px',
  backgroundColor: '#f8f9fa',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  ':hover': {
    backgroundColor: '#e9ecef',
  },
};

const iconStyles = {
  fontSize: '20px',
  fontWeight: 'bold',
};

const contentStyles = {
  padding: '0 20px',
  maxHeight: '0',
  overflow: 'hidden',
  transition: 'max-height 0.3s ease, padding 0.3s ease',
};

const activeContentStyles = {
  ...contentStyles,
  maxHeight: '500px',
  padding: '20px',
};

const cardInfoStyles = {
  margin: '0',
  lineHeight: '1.6',
};

const Accordion = () => {
  return (
    <div style={accordionStyles}>
      {accordionData.map(({ title, content }, index) => (
        <SingleAccordion key={index} title={title} content={content} />
      ))}
    </div>
  );
};

const SingleAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section style={accordionCardStyles}>
      <div
        style={{
          ...headerStyles,
          backgroundColor: isActive ? '#e9ecef' : headerStyles.backgroundColor,
        }}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <p style={iconStyles}>{isActive ? '-' : '+'}</p>
      </div>
      <div style={isActive ? activeContentStyles : contentStyles}>
        {isActive && <p style={cardInfoStyles}>{content}</p>}
      </div>
    </section>
  );
};

export default Accordion;
