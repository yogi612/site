import ClientLoginPage from "./ClientLoginPage"

export const metadata = {
  title: "Login - Finonest",
  description: "Login to your Finonest account",
}

export default function LoginPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return <ClientLoginPage searchParams={searchParams} />
}
