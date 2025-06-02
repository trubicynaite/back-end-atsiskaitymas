import { Outlet } from 'react-router';

const MainOutlet = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainOutlet;