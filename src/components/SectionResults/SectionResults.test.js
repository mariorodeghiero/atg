import { render, screen } from '@testing-library/react'

import SectionResults from '.'

describe('<SectionResults />', () => {
  it('should render the heading', () => {
    const { container } = render(<SectionResults />)

    expect(screen.getByRole('heading', { name: /SectionResults/i })).toBeInTheDocument()
  })
})
