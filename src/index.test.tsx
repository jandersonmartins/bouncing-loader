import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import { render } from '@testing-library/react'
import { BouncingLoader } from '.'

test('should render correctly', () => {
  const { container } = render(<BouncingLoader color='#3700B3' />)

  expect(container.firstChild).toMatchSnapshot()
})
