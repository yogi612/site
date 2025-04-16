import ClientLoginPage from "./ClientLoginPage"

export const metadata = {
  title: "Login - Finonest",
  description: "Login to your Finonest account",
}

interface SearchParams {
  [key: string]: string | string[] | undefined
}

interface LoginPageProps {
  searchParams: SearchParams
}

export default function LoginPage({ searchParams }: LoginPageProps) {
  return <ClientLoginPage searchParams={searchParams} />
}
