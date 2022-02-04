import { render } from '@testing-library/react'
import { ActiveLink } from '.'

test('Active link renders correctly', () => {
  const { debug } = render(
    <ActiveLink href="/" activeClassName="active">
      <a>Home</a>
    </ActiveLink>
  )

  debug()
})