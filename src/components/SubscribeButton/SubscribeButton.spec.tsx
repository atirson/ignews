import { fireEvent, render, screen } from '@testing-library/react'
import { useSession, signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { SubscribeButton } from '.'

jest.mock('next-auth/client')

describe('SignInButton component', () => {
  it('renders correctly', () => {
    const useSessionMocked = useSession as jest.Mock

    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SubscribeButton />)

    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })

  it('redirects user to sign in when not authenticated', () => {
    const signInMocked = signIn as jest.Mock

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()

  })

  it('redirects to posts when user already has a subscription', () => {
    const useRouterMocked =  useRouter as jest.Mock
    const useSessionMocked = useSession as jest.Mock

    useSessionMocked.mockReturnValueOnce([{user: {name: 'John Doe', email: 'john.doe@example.com'}, activeSubscription: 'fake-active' ,expires: 'fake-expires'}, false])

    const pushMock = jest.fn()

    useRouterMocked.mockReturnValueOnce({ push: pushMock  })

    render(<SubscribeButton />)

    const subscribeButton = screen.getByText('Subscribe now')

    fireEvent.click(subscribeButton)

    expect(useRouterMocked).toHaveBeenCalled()
  })
})

