import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('should render the title', () => {
    const { container } = render(<Header title="atg"/>)

    expect(screen.getByRole('heading', { name: /atg/i })).toBeInTheDocument()
  })
})