import { useEffect, useState } from 'react';
import arrow from './arrow.png';
import logo from './logo.png';
import './App.css';

const localization = {
  EN: {
    menu: 'MENU',
    about: 'About',
    contacts: 'Contacts',
    subHeader: 'Building company',
    mainHeader: 'Key development - ',
    tagline1: 'we are watching in ',
    tagline2: 'future',
    projects: 'Projects',
    info1: '204 successfully finished projects',
    info2: '320 built objects',
  },
  RU: {
    menu: 'Меню',
    about: 'О Компании',
    contacts: 'Контакты',
    subHeader: 'Строительная компания',
    mainHeader: 'Key development - ',
    tagline1: 'мы смотрим в ',
    tagline2: 'будущее',
    projects: 'Проекты',
    info1: '204 успешно выполненых проекта',
    info2: '320 спроектированых обьекта',
  }
};

function App() {
  const [language, setLanguage] = useState('RU');
  const [menuClassName, setMenuClassName] = useState('stick');
  const [isLangMenuVisible, setLangMenuIsVisible] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(1);

  const [animationClassNames, setAnimationState] = useState({
    footer: 'footer',
    infoItem1: 'info-item 1',
    infoItem2: 'info-item 2',
    infoItem3: 'info-item 3',
    button: 'next-page-button-container',
    secondScreen: 'Second-screen',
    secondScreenContainer: 'secondScreenContainer',
    secondScreenHeader: 'header',
    secondScreenSubheader: 'second-screen-subheader',
    secondScreenContent: 'second-screen-content',
  });

  useEffect(() => {
      fetch('https://reqres.in/api/users?page=2').then((response) => {
          response.json().then(json => {
              const url = json?.ad?.url
              console.log(url)
          })
      })


    setTimeout(() => {
      setAnimationState({
        footer: 'footer visible',
        infoItem1: 'info-item 1',
        infoItem2: 'info-item 2',
        infoItem3: 'info-item 3',
        button: 'next-page-button-container',
        secondScreen: 'Second-screen',
        secondScreenContainer: 'secondScreenContainer',
        secondScreenHeader: 'header',
        secondScreenSubheader: 'second-screen-subheader',
        secondScreenContent: 'second-screen-content',
      })
    }, 1000);
    setTimeout(() => {
      setAnimationState({
        footer: 'footer visible',
        infoItem1: 'info-item 1 visible',
        infoItem2: 'info-item 2',
        infoItem3: 'info-item 3',
        button: 'next-page-button-container',
        secondScreen: 'Second-screen',
        secondScreenContainer: 'secondScreenContainer',
        secondScreenHeader: 'header',
        secondScreenSubheader: 'second-screen-subheader',
        secondScreenContent: 'second-screen-content',
      })
    }, 2200);
    setTimeout(() => {
      setAnimationState({
        footer: 'footer visible',
        infoItem1: 'info-item 1 visible',
        infoItem2: 'info-item 2 visible',
        infoItem3: 'info-item 3',
        button: 'next-page-button-container',
        secondScreen: 'Second-screen',
        secondScreenContainer: 'secondScreenContainer',
        secondScreenHeader: 'header',
        secondScreenSubheader: 'second-screen-subheader',
        secondScreenContent: 'second-screen-content',
      })
    }, 2400);
    setTimeout(() => {
      setAnimationState({
        footer: 'footer visible',
        infoItem1: 'info-item 1 visible',
        infoItem2: 'info-item 2 visible',
        infoItem3: 'info-item 3 visible',
        button: 'next-page-button-container',
        secondScreen: 'Second-screen',
        secondScreenContainer: 'secondScreenContainer',
        secondScreenHeader: 'header',
        secondScreenSubheader: 'second-screen-subheader',
        secondScreenContent: 'second-screen-content',
      })
    }, 2600);
    setTimeout(() => {
      setAnimationState({
        footer: 'footer visible',
        infoItem1: 'info-item 1 visible',
        infoItem2: 'info-item 2 visible',
        infoItem3: 'info-item 3 visible',
        button: 'next-page-button-container visible',
        secondScreen: 'Second-screen',
        secondScreenContainer: 'secondScreenContainer',
        secondScreenHeader: 'header',
        secondScreenSubheader: 'second-screen-subheader',
        secondScreenContent: 'second-screen-content',
      })
    }, 2800);
  }, []);

  const openSecondScreen = () => {
    setAnimationState({
      footer: 'footer visible full',
      infoItem1: 'info-item 1 visible',
      infoItem2: 'info-item 2 visible',
      infoItem3: 'info-item 3 visible',
      button: 'next-page-button-container visible',
      secondScreen: 'Second-screen',
      secondScreenContainer: 'secondScreenContainer',
      secondScreenHeader: 'header',
      secondScreenSubheader: 'second-screen-subheader',
      secondScreenContent: 'second-screen-content',
    });
    setTimeout(() => {
      setAnimationState({
        footer: 'footer none',
        infoItem1: 'info-item 1 visible',
        infoItem2: 'info-item 2 visible',
        infoItem3: 'info-item 3 visible',
        button: 'next-page-button-container visible',
        secondScreen: 'Second-screen visible',
        secondScreenContainer: 'secondScreenContainer',
        secondScreenHeader: 'header',
        secondScreenSubheader: 'second-screen-subheader',
        secondScreenContent: 'second-screen-content',
      })
    }, 2000);
    setTimeout(() => {
      setCurrentScreen(2)
    }, 3000);
    setTimeout(() => {
      setAnimationState({
        footer: 'footer none',
        infoItem1: 'info-item 1 visible',
        infoItem2: 'info-item 2 visible',
        infoItem3: 'info-item 3 visible',
        button: 'next-page-button-container visible',
        secondScreen: 'Second-screen visible',
        secondScreenContainer: 'secondScreenContainer visible',
        secondScreenHeader: 'header',
        secondScreenSubheader: 'second-screen-subheader',
        secondScreenContent: 'second-screen-content',
      })
    }, 3200);
    setTimeout(() => {
      setAnimationState({
        footer: 'footer none',
        infoItem1: 'info-item 1 visible',
        infoItem2: 'info-item 2 visible',
        infoItem3: 'info-item 3 visible',
        button: 'next-page-button-container visible',
        secondScreen: 'Second-screen visible',
        secondScreenContainer: 'secondScreenContainer visible',
        secondScreenHeader: 'header visible',
        secondScreenSubheader: 'second-screen-subheader',
        secondScreenContent: 'second-screen-content',
      })
    }, 3400);
    setTimeout(() => {
      setAnimationState({
        footer: 'footer none',
        infoItem1: 'info-item 1 visible',
        infoItem2: 'info-item 2 visible',
        infoItem3: 'info-item 3 visible',
        button: 'next-page-button-container visible',
        secondScreen: 'Second-screen visible',
        secondScreenContainer: 'secondScreenContainer visible',
        secondScreenHeader: 'header visible',
        secondScreenSubheader: 'second-screen-subheader visible',
        secondScreenContent: 'second-screen-content',
      })
    }, 3600);
    setTimeout(() => {
      setAnimationState({
        footer: 'footer none',
        infoItem1: 'info-item 1 visible',
        infoItem2: 'info-item 2 visible',
        infoItem3: 'info-item 3 visible',
        button: 'next-page-button-container visible',
        secondScreen: 'Second-screen visible',
        secondScreenContainer: 'secondScreenContainer visible',
        secondScreenHeader: 'header visible',
        secondScreenSubheader: 'second-screen-subheader visible',
        secondScreenContent: 'second-screen-content visible',
      })
    }, 3800);
  };

  const toggleMenu = () => {
    setMenuClassName(menuClassName === 'stick' ? 'stick opened' : 'stick')
  };
  const toggleLangMenu = () => {
    setLangMenuIsVisible(!isLangMenuVisible)
  };
  const chooseLanguage = (lang) => {
    setLangMenuIsVisible(false);
    setLanguage(lang);
  };
  const arrowClassName = isLangMenuVisible ? 'arrow up' : 'arrow';
  const headerClassName = currentScreen === 1 ? 'header' : 'header dark';
  const langMenuClassName = isLangMenuVisible ? 'lang-menu visible' : 'lang-menu';

  return (
    <div className="App">
      <div className={'First-screen'}>
        <header className={headerClassName}>
          <div className="logo-container">
            <img
              alt={'key logo'}
              className={'logo'}
              src={logo}
            />
          </div>
          <div className="navigation">
            <a href="#" className="nav-item">{localization[language].about}</a>
            <a href="#" className="nav-item">{localization[language].contacts}</a>
          </div>
          <div
            onClick={toggleMenu}
            className="menu"
          >
            <div className="menu-button">
              <div className={menuClassName}/>
              <div className={menuClassName}/>
            </div>
            <p>{localization[language].menu}</p>
          </div>
          <div
            className="lang-container"
          >
            <div
              className="lang"
              onClick={toggleLangMenu}
            >
            <p>{language}</p>
            <div className={arrowClassName}/>
            </div>
            <ul className={langMenuClassName}>
              <li onClick={() => chooseLanguage('RU')}>RU</li>
              <li onClick={() => chooseLanguage('EN')}>EN</li>
            </ul>
          </div>
        </header>
        <div className="App-header"/>
        <div className="landing">
          <div className="landing-header"></div>
          <div className="date"></div>
        </div>
        <main className={'main'}>
          <div className="main-left">
            <div className={'company-title-container'}>
              <h5>{localization[language].subHeader}</h5>
              <div className="main-title-container">
                <h1>{localization[language].mainHeader.toUpperCase()}</h1>
                <p>{localization[language].tagline1.toUpperCase()}</p>
                <p>{localization[language].tagline2.toUpperCase()}</p>

              </div>
            </div>
          </div>
          <div className="main-right">


          </div>
        </main>
        <footer>
          <div className={animationClassNames.footer}>
            <p className={animationClassNames.infoItem1}>{localization[language].projects.toUpperCase()}</p>
            <p className={animationClassNames.infoItem2}>{localization[language].info1}</p>
            <p className={animationClassNames.infoItem3}>{localization[language].info2}</p>
            <div className={animationClassNames.button}>
              <div
                onClick={openSecondScreen}
                className={'next-page-button'}
              >
                <img src={arrow} />
              </div>
            </div>
          </div>
          <div
            className={animationClassNames.secondScreen}
          >
            <div className={animationClassNames.secondScreenContainer}>
              <div className="second-screen-header">
                <span className={animationClassNames.secondScreenHeader}>ПРОЕКТЫ</span>
                <div className={animationClassNames.secondScreenSubheader}>
                <span>Вдохновляющие</span>
                <span>Для комфортной жизни</span>
                </div>
              </div>
              <div className={animationClassNames.secondScreenContent}>
                <div className={'project-pic'}>
                </div>
                <div className={'project-info'}>
                  <h2>ЖК "Район"</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab amet consectetur dicta earum harum impedit laborum nemo nobis numquam officia officiis quia
                    quo rem repudiandae, similique suscipit tempora ullam voluptatem.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
