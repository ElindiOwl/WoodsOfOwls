import {Landing} from "pages/landing";

export const meta = () => {
    return [
        {title: 'RRF template'},
        {content: 'Welcome to React Router!', name: 'description'},
    ];
};

const Home = () => {
    return (
        <>
            <Landing/>
        </>
    );
};

export default Home;