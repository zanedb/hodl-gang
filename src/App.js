import React from 'react';
import { ThemeProvider } from '@hackclub/design-system'
import './App.css';

import Footer from './components/Footer'
import Title from './components/Title'

export default () => (
  <ThemeProvider>
    <Title />
    <Footer />
  </ThemeProvider>
)
