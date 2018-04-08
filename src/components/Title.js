import React from 'react'
import { Section, Heading, Text } from '@hackclub/design-system'
import '../App.css'
import data from './../data.json'

const Title = () => (
  <Section bg="accent">
    <Heading f={7}>
      <Text fontSize={84}>
        {data.name}
      </Text>
      <Text fontSize={4}>
        {data.description}
      </Text>
    </Heading>
  </Section>
)

export default Title
