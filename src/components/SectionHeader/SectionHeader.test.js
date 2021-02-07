import { render, screen } from '@testing-library/react'

import SectionHeader from '.'

describe('<SectionHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<SectionHeader />)

    expect(screen.getByRole('heading', { name: /SectionHeader/i })).toBeInTheDocument()
  })
})
