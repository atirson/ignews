import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/client'
import { SubscribeButton } from '.'

jest.mock('next-auth/client')

describe('SignInButton component', () => {
  it('renders correctly', () => {
    const useSessionMocked = useSession as jest.Mock

    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SubscribeButton />)

    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })

})

