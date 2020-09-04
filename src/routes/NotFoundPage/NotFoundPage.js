import React  from 'react';
import { Section } from '../../helper';

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <Section className='NotFoundPage'>
        <h2>404 - Page not found</h2>
        <p>Try putting your thing down, flipping and reversing it.</p>
      </Section>
    )
  }
}
