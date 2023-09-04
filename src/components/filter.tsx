import { FilterWrapper } from "../styles"

export default function Filter() {
  return (
    <FilterWrapper>
      <select name="type" id="type">
        <option value="">Select</option>
        <option value="coin">Coin</option>
        <option value="token">Token</option>
      </select>
      <input type="text" placeholder="Search" />
      <button type="button">Search</button>
    </FilterWrapper>
  )
}
