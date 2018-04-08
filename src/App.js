import React from 'react';
import { ThemeProvider } from '@hackclub/design-system'
import './App.css';

import Footer from './components/Footer'
import Title from './components/Title'
import Lyrics from './components/Lyrics'

export default () => (
  <ThemeProvider>
    <Title />
    <Lyrics />
    <Footer />
  </ThemeProvider>
)
