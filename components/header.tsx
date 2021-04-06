import React from 'react'
import Link from 'next/link';
export default function Header() {
    return (
        <header className="sticky top-0 w-full">
            <nav className="flex h-16 items-center border-b-2 w-full bg-white ">
                <ul className="flex w-full justify-center">
                    <li className="mr-3">
                        <Link href="/about">
                            <a className="inline-block border border-white rounded hover:border-gray-200 text-black transition hover:bg-gray-200 py-1 px-3" >About</a>
                        </Link>
                    </li>
                    <li className="mr-3">
                        <Link href="/blog">
                            <a className="inline-block border border-white rounded hover:border-gray-200 text-black transition hover:bg-gray-200 py-1 px-3" >Blog</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}
