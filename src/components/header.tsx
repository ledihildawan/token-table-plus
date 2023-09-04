import { useLocation, matchPath } from "react-router-dom"
import {
  HeaderWrapper,
  NavigationList,
  NavigationWrapper,
  NavigationLink,
  NavigationListItem,
} from "../styles"

export default function Header() {
  const { pathname } = useLocation()

  return (
    <HeaderWrapper>
      <NavigationWrapper>
        <NavigationList>
          <NavigationListItem $active={matchPath("/", pathname)}>
            <NavigationLink to="/">Home</NavigationLink>
          </NavigationListItem>
          <NavigationListItem $active={matchPath("/coin/*", pathname)}>
            <NavigationLink to="/coin">Coin List</NavigationLink>
          </NavigationListItem>
        </NavigationList>
      </NavigationWrapper>
    </HeaderWrapper>
  )
}
