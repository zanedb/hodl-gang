import React from 'react'
import { Box, Link as A } from '@hackclub/design-system'
import '../App.css'

const Footer = () => (
  <Box p={3} align="center" fontSize={3} color="white" bg="#dacc3e">
    Created by{' '}
    <A href="https://keybase.io/zanedb" underline>
      @zanedb
    </A>
  </Box>
)

export default Footer
