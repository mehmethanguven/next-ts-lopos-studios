import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import { Header } from '@/components/header/Header'

describe('Home', () => {
  it('should to match snapshot', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('renders a heading', () => {
    render(<Header />)

    const heading = screen.getByRole('heading', {
      name: /impressive experiences that deliver/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
