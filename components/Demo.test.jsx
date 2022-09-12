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

    expect(screen.queryByText('content')).toBeInTheDocument()
  })
  it('should not render children when check returns false', () => {
    render(
      <RestrictedContent check={() => false}>
        content
      </RestrictedContent>
    )

    expect(screen.queryByText('content')).not.toBeInTheDocument()
  })
})

describe('Welcome', () => {
  it('should show welcome message with name', () => {
    render(
      <Welcome name='my name' />
    )

    expect(screen.queryByText('Welcome, my name')).toBeInTheDocument()
  })
})

describe('WelcomeWithUpdates', () => {
  it('should show welcome message with name', () => {
    render(
      <WelcomeWithUpdates name='my name' updates={[]} />
    )

    expect(screen.queryByText('Welcome, my name')).toBeInTheDocument()
  })
  it('should not show update count if zero', () => {
    render(
      <WelcomeWithUpdates name='my name' updates={[]} />
    )

    expect(screen.queryByText('You have 0 updates')).not.toBeInTheDocument()
  })
  it('should show update count if greater than zero', () => {
    render(
      <WelcomeWithUpdates name='my name' updates={['update 1', 'update 2']} />
    )

    expect(screen.queryByText('You have 2 updates!')).toBeInTheDocument()
  })
})

// Integration tests
describe('App', () => {
  it('should use 👶 for 18 or less', async () => {
    render(<App />)

    const select = screen.getByLabelText('Current user')
    await userEvent.selectOptions(select, 'Alli (age: 16)')

    expect(screen.queryByText(/👶/)).toBeInTheDocument()
  })
  it('should use 🧒 for 18-20', async () => {
    render(<App />)

    const select = screen.getByLabelText('Current user')
    await userEvent.selectOptions(select, 'Henry (age: 20)')

    expect(screen.queryByText(/🧒/)).toBeInTheDocument()
  })
  it('should use 🧑 for 21+', async () => {
    render(<App />)

    const select = screen.getByLabelText('Current user')
    await userEvent.selectOptions(select, 'Luz (age: 22)')

    expect(screen.queryByText(/🧑/)).toBeInTheDocument()
  })
})
