import { FunctionalComponent, h } from 'preact';
import tw from "twin.macro"
import Quote from '../../components/Quote';
import SavedQuotes from '../../components/SavedQuotes';

const Home: FunctionalComponent = () =>
{

    return (
        <div tw="flex flex-col md:flex-row h-full items-stretch flex-1">
            <div tw="flex-1 flex-shrink-0"><Quote /></div>
            <SavedQuotes />
        </div>
    );
};

export default Home;
