import logo from '../../assets/logo.png';

const Logo: React.FC = () => {
    return (
        <img
            src={logo}
            alt="Logo"
            style={{
                height: 60,
            }}
        />
    );
};

export default Logo;
