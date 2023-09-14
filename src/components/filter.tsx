import { ChangeEvent, useEffect, useState } from "react"
import { Input, Select, BtnSearch, InputWrapper, FilterWrapper } from "@/styles"
import { setupFilter } from "@pages/coin/reducer"
import { default as SearchIcon } from "@/assets/icons/search"
import { useMediaQuery, useAppDispatch, useDebounce } from "@hooks"

import Skeleton from "react-loading-skeleton"

function Loading({ variant }: { variant: string }) {
  const isMobile = variant === "mobile"

  return (
    <FilterWrapper>
      <Skeleton
        width={isMobile ? "100%" : 215}
        height={isMobile ? 38 : 40}
        borderRadius={4}
      />
      <Skeleton
        width={isMobile ? "100%" : 296}
        height={isMobile ? 39 : 40}
        borderRadius={4}
      />
      <Skeleton
        width={isMobile ? "100%" : 82}
        height={isMobile ? 37 : 40}
        borderRadius={4}
      />
    </FilterWrapper>
  )
}

export default function Filter({
  loading,
  onSearch,
}: {
  loading: boolean
  onSearch: () => void
}) {
  const [filter, setFilter] = useState<any>({})

  const dispatch = useAppDispatch()
  const isMobile = useMediaQuery("(width < 576px)")
  const debouncedFilter = useDebounce(filter, 300)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFilter({ key: e.target.name, value: e.target.value })
  }

  function handleSearch() {
    onSearch()
  }

  useEffect(() => {
    dispatch(setupFilter(filter))
  }, [debouncedFilter])

  if (loading) {
    return <Loading variant={isMobile ? "mobile" : ""} />
  }

  return (
    <FilterWrapper>
      <Select name="type" id="type" required onChange={handleChange}>
        <option value="" disabled hidden>
          Select
        </option>
        <option value="all">All</option>
        <option value="coin">Coin</option>
        <option value="token">Token</option>
      </Select>
      <InputWrapper>
        <SearchIcon />
        <Input
          name="name"
          type="search"
          placeholder="Search"
          autoComplete="off"
          onKeyUp={({ key }) => key === "Enter" && handleSearch()}
          onChange={handleChange}
        />
      </InputWrapper>
      <BtnSearch type="button" onClick={handleSearch}>
        Search
      </BtnSearch>
    </FilterWrapper>
  )
}
