import React from 'react';
import { ThemeProvider } from '@hackclub/design-system'
import './App.css';

import Footer from './components/Footer'

export default () => (
  <ThemeProvider>
    <Footer />
  </ThemeProvider>
)
