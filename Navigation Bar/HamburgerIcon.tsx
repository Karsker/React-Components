'use child'
import './NavigationBar.css'
const HamburgerIcon:React.FC = () => {   
    return (
        <div className="flex flex-col" id="hamburger">
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
        </div>
    );
}

export default HamburgerIcon;