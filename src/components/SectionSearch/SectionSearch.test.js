import { render, screen } from '@testing-library/react'

import SectionSearch from '.'

describe('<SectionSearch />', () => {
  it('should render the heading', () => {
    const { container } = render(<SectionSearch />)

    expect(screen.getByRole('heading', { name: /SectionSearch/i })).toBeInTheDocument()
  })
})
