import {Page} from "pages/main";

export const meta = () => {
    return [
        {title: 'RRF template'},
        {content: 'Welcome to React Router!', name: 'description'},
    ];
};

const Home = () => {
    return (
        <>
            <Page/>
        </>
    );
};

export default Home;