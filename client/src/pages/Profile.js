import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import './styles/profile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatar from '../assets/avatar.jpg';
import UsersService from '../services/UsersService';
import UserAds from '../components/UserAds';
import Menu from '../utilities/menu';
import Settings from '../components/Settings';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import ComingSoon from '../components/ComingSoon';
// import Loading from '../components/Loading';

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

const Profile = () => {
  const [ screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [ activeMenu, setActiveMenu] = useState('adverts');
  const [ hideActiveMenu, setHideActiveMenu ] = useState(true);
  const [ userAds, setUserAds ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ hasError, setHasError ] = useState(false);
  
  useLayoutEffect(() => {
    const handleScreenResize = () => { setScreenWidth(window.innerWidth);}
    window.addEventListener('resize', handleScreenResize);
    return () => { window.removeEventListener('resize', handleScreenResize)}
  }, []);

  const getUserAds = useCallback( async() => {
    setIsLoading(true);
    setHasError(false);
    try {
      const { data } = await UsersService.getUserAds(currentUser.userId);
      console.log(data);
      setUserAds(data);
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  }, []);
  
  useEffect(() => {
    getUserAds();
  }, [getUserAds]);
  

  return (
    <section id='profile'>
        <div className="container-fluid">
        <div className="container-row">
          {/* Left  */}
          <div className={`left-container ${ screenWidth < 768 && hideActiveMenu ? '' : 'hide'} `}>
            <div className="profile-container">
              <div className="profile-picture-wrapper">
                <img className='profile-picture' src={currentUser.hasDisplayPicture ? currentUser.displayPicture.url : avatar} alt="" />
              </div>
              <p className="name text-center w-100 my-2">{currentUser.name}</p>
              <p className="phone-number text-center w-100 mt-2">{currentUser.phone}</p>
            </div>

            <div className="menu-container">
              {
                Menu().map((item, index) => (
                  <div onClick={() => {
                    setActiveMenu(item.name);
                    setHideActiveMenu(false);
                  }} key={index} name={item.name} className="menu-wrapper">
                    <div className="icon-wrapper">
                      <FontAwesomeIcon className='icon' icon={item.icon} />
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))
              }
            </div>
          </div>
          {/* Right */}
          <div className={`right-container ${ screenWidth < 768 && !hideActiveMenu ? '' : 'hide'}`}>
            { screenWidth < 768 && <div className="arrow-icon-wrapper my-3">
              <FontAwesomeIcon onClick={() => setHideActiveMenu(true)} icon={faChevronCircleLeft} />
            </div> }
            { activeMenu === 'adverts' && <UserAds hideActiveMenu={hideActiveMenu} activeMenu={activeMenu} screenWidth={screenWidth} isLoading={isLoading} hasError={hasError}  userAds={userAds}/> }
            { activeMenu === 'settings' && <Settings hasError={hasError} isLoading={isLoading} currentUser={currentUser} /> }
            { activeMenu === 'feedback' && <ComingSoon hasError={hasError} isLoading={isLoading} currentUser={currentUser} /> }
            { activeMenu === 'performance' && <ComingSoon hasError={hasError} isLoading={isLoading} currentUser={currentUser} /> }
            { activeMenu === 'notifications' && <ComingSoon hasError={hasError} isLoading={isLoading} currentUser={currentUser} /> }
            
          </div>
        </div>
        </div>
    </section>
  )
}

export default Profile;