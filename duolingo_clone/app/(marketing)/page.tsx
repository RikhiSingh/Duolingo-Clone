import { Header } from "./header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        This is the marketing page
      </main>
    </div>
  )
}
