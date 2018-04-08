import React from 'react';
import { ThemeProvider } from '@hackclub/design-system'
import './App.css';

import Title from './components/Title'
import Embed from './components/Embed'
import Lyrics from './components/Lyrics'
import Footer from './components/Footer'

export default () => (
  <ThemeProvider>
    <Title />
    <Embed />
    <Lyrics />
    <Footer />
  </ThemeProvider>
)
