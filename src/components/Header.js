import Link from 'next/link'
import SwitchTheme from './SwitchTheme'

export default function Header() {
  return (
    <header className="pt-20 pb-12">
      <p className="text-3xl font-bold dark:text-white text-center">
        <Link href="/">
          <a>Matheus Ramos</a>
        </Link>
      </p>

      <nav class="flex font-medium items-center justify-between flex-wrap bg-teal p-6">
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <p className="text-xl dark:text-white text-center block mt-4 lg:inline-block lg:mt-0 text-teal-lighter  mr-4">
              <Link href="/">
                <a>Home</a>
              </Link>
            </p>

            <p className="text-xl dark:text-white text-center block mt-4 lg:inline-block lg:mt-0 text-teal-lighter mr-4">
              <Link href="/about">
                <a>About</a>
              </Link>
            </p>

            <p className="text-xl dark:text-white text-center block mt-4 lg:inline-block lg:mt-0 text-teal-lighter mr-4">
              <Link href="/">
                <a>Contact</a>
              </Link>
            </p>

          </div>
          <div className="m-8" >
            <SwitchTheme />
          </div>
        </div>

      </nav>
    </header>
  )
}