import SearchIcon from '../assets/icons/Search.svg'
import CompassIcon from '../assets/icons/Compas.svg'
import SettingsIcon from '../assets/icons/Settings.svg'
import LineIcon from '../assets/icons/Line 2.svg'
import GridIcon from '../assets/icons/Group 234.svg'
import InfoIcon from '../assets/icons/Info circle.svg'
import ZoomInIcon from '../assets/icons/Zoom in.svg'
import ZoomOutIcon from '../assets/icons/Zoom out.svg'


export const Icons = () => {
    return (
        <div className="icons-container">
            <div className="top-icons">
                <div className="search-icon single-icon">
                    <img src={SearchIcon} alt="Search Icon"/>
                </div>

                <div className="compass-icon single-icon">
                    <img src={CompassIcon} alt="Compass Icon"/>
                </div>

                <div className="settings-icon single-icon">
                    <img src={SettingsIcon} alt="Settings Icon"/>
                </div>
            </div>

            <div className="bottom-icons">
                <div className="dist-icons double-icons">
                    <div className="line-icon .double-single-icon">
                        <img src={LineIcon} alt="Line Icon" />
                    </div>

                    <div className="grid-icon .double-single-icon">
                        <img src={GridIcon} alt="Group Icon"/>
                    </div>
                    
                    
                </div>
                <div className="info-icon single-icon">
                    <img src={InfoIcon} alt="Info Icon" />
                </div>
                <div className="zoom-icons double-icons">
                <div className="zoomin-icon .double-single-icon">
                    <img src={ZoomInIcon} alt="Zoom In Icon"/>
                </div>

                <div className="zoomout-icon .double-single-icon">
                    <img src={ZoomOutIcon} alt="Zoom Out Icon"/>
                </div>

                </div>
            </div>
            
        </div>
    );
};