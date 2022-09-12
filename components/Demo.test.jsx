import App, { RestrictedContent, Welcome, WelcomeWithUpdates } from './Demo'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Unit tests

describe('RestrictedContent', () => {
  it('should render children when check returns true', () => {
    render(
      <RestrictedContent check={() => true}>
        content
      </RestrictedContent>
    )

    expect(screen.getByText('content')).toBeInTheDocument()
  })
})
