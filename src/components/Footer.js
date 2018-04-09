import React from 'react'
import { Box, Link as A, Text } from '@hackclub/design-system'

const Footer = () => (
  <Box p={3} align="center" fontSize={4} color="white" bg="#dacc3e">
    Created by{' '}
    <A href="https://keybase.io/zanedb" underline>
      @zanedb
    </A>
    <Text fontSize={2}>
      (don't worry, it's ironic)
    </Text>
  </Box>
)

export default Footer
