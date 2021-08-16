import { FunctionalComponent, h } from 'preact';
import tw from "twin.macro"

const Header: FunctionalComponent = () =>
{
    return (
        <header tw="w-full flex justify-between items-center bg-indigo-600 text-white p-4">
            <h1 tw="text-4xl font-bold">Rick and Morty quote generator</h1>
            {/* <nav tw="space-x-2 text-lg">
                <Link href="/">
                    Home
                </Link>
                <Link href="/profile">
                    Me
                </Link>
                <Link href="/profile/john">
                    John
                </Link>
            </nav> */}
        </header>
    );
};

export default Header;
