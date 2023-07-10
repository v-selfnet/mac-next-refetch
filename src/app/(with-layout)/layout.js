
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const WithoutLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='p-10'>{children}</div>
           <Footer></Footer>
        </div>
    );
};

export default WithoutLayout;