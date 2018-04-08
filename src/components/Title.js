import React from 'react'
import { Section, Heading } from '@hackclub/design-system'
import '../App.css'
import data from './../data.json'

const Title = () => (
  <Section bg="accent">
    <Heading f={7}>
      {data.name}
    </Heading>
  </Section>
)

export default Title
