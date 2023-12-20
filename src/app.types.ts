export interface AppProps {
  title: string
}

export interface Name {
  first: string
  last: string
}

export interface Login {
  uuid: string
}

export interface Users {
  login: Login
  name: Name
  email: string
}
