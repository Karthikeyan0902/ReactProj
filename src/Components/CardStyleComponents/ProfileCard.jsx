import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  max-width: 300px;
  margin: auto;
  background: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const Header = styled.header`
  background-color: #3b82f6;
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const Content = styled.div`
  padding: 1rem;

  h2 {
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    color: #4b5563;
  }
`;

const Footer = styled.footer`
  background-color: #f3f4f6;
  text-align: center;
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

const ProfileCard = ({ header, title, content, footer }) => {
  return (
    <CardWrapper>
      <Header>{header}</Header>
      <Content>
        <h2>{title}</h2>
        <p>{content}</p>
      </Content>
      <Footer>{footer}</Footer>
    </CardWrapper>
  );
};

export default ProfileCard;
