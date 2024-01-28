import {Country, Currency} from "shared/const/common";

export interface Profile{
  username: string,
  firstName: string,
  lastName: string,
  age: number,
  currency: Currency,
  country: Country,
  city: string
}
export interface ProfileSchema{
  data?: Profile
  isLoading: boolean
  error?: string
  readonly : boolean
}