
import useTitle from '../../hooks/useTitle';
import AllServices from './AllServices';

const Services = () => {
    useTitle('Services')
    return (
        <div>
            <AllServices ></AllServices>
        </div>
    );
};

export default Services;