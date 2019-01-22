import React from 'react'

import Avatar from '../components/Avatar';
import Title from '../components/Title';
import List from '../components/List';

const SUMMARY_DATA = [
  '3+ years of experience in Web-Development',
  'Strong knowledge of Browser/Node.js',
  'Good knowledge in web technologies HTML/CSS/JavaScript(es6/TypeScript)',
  'Strong knowledge of build web-application',
  'Experience in development web-interface',
];

const IndexPage = () => (
  <main>
    <Avatar />
    <Title>Summary</Title>
    <List data={SUMMARY_DATA} />
  </main>
)

export default IndexPage
