import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faCircleHalfStroke, faArrowLeft, faArrowRight, faCode } from "@fortawesome/free-solid-svg-icons"
import './App.css';
import Video from "./e.mp4";
import dota from "./dota.png";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {

  let activeIndex = 0;
  const slides = document.getElementsByTagName("article");
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/Build/build.loader.js",
    dataUrl: "build/Build/build.data",
    frameworkUrl: "build/Build/build.framework.js",
    codeUrl: "build/Build/build.wasm",
  });
  function handleLeftClick(){
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
          nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
          
    currentSlide.dataset.status = "after";
    
    nextSlide.dataset.status = "becoming-active-from-before";
    
    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
  }
  function handleRightClick(){
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
          nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
    
    currentSlide.dataset.status = "before";
    
    nextSlide.dataset.status = "becoming-active-from-after";
    
    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
  }
  return <div className="App">
     <nav>
        <div id="nav-logo-section" className="nav-section">
          <a href="#">
          <FontAwesomeIcon icon={faCode}  size="lg" />
          </a>
          <a href="https://sv.wikipedia.org/wiki/Pontus" target="_blank">
          <h4>Pontus</h4>
          </a>
        </div>
        <div id="nav-link-section" className="nav-section">
        <a href="https://www.linkedin.com/in/pontus-nilsson-528a0b160/" target="_blank">
          ABOUT
          </a>  
          <a href="https://www.linkedin.com/in/pontus-nilsson-528a0b160/" target="_blank">
            WORK
          </a>
        </div>
        <div id="nav-social-section" className="nav-section">
          <a href="https://www.dotabuff.com/players/41917000" target="_blank">
          <img src={dota} />
          </a>
        </div>
        <div id="nav-contact-section" className="nav-section">
        <a href="#">
          <FontAwesomeIcon  icon={faCircleHalfStroke}  size="lg" />
          </a>
        </div>
      </nav>

      <main>
    <article data-index="0" data-status="active">
      <Unity unityProvider={unityProvider} className="Unity-container"/>
    <div className="article-description-section article-section">
      <p>
        This a project made in <a className="source-link" href="https://unity.com/" target="_blank">Unity</a> built for WebGL. Drag the window to see the animation playing <a className="yt-link" href="https://youtu.be/nG2IyH43xMU" target="_blank"><i className="fa-brands fa-youtube"></i></a>.
      </p>
    </div>
    <div className="article-title-section article-section">
      <h2>A slow day by the sea</h2>
    </div>
    <div className="article-nav-section article-section">
      <button className="article-nav-button" type="button" onClick={handleLeftClick}>
      <FontAwesomeIcon  icon={faArrowLeft}  size="lg" />
      </button>
      <button className="article-nav-button" type="button"onClick={handleRightClick}>
      <FontAwesomeIcon  icon={faArrowRight}  size="lg" />
      </button>
    </div>
  </article>
  <article data-index="1" data-status="inactive">    
  <div className="article-image-section article-section"> </div>
  {/* <video id="bgVideo" src={Video} controls preload="true"  autoPlay loop muted>
   </video> */}
  {/* <img src={Video} alt="loading..." style={{width: "100%"}} /> */}
    <div className="article-description-section article-section">
      <p>E is a game made with <a className="source-link" href="https://unity.com/" target="_blank">Unity</a> built for PC. E is a 2.5D platformer inspired by real life experiences, a girl powered by crisps, fighting her nemesises.</p>
    </div>
    <div className="article-title-section article-section">
        <h2>E the game</h2>
      <i className="fa-light fa-plus-large"></i>
    </div>
      <div className="article-nav-section article-section">
      <button className="article-nav-button" type="button" onClick={handleLeftClick}>
      <FontAwesomeIcon  icon={faArrowLeft}  size="lg" />
      </button>
      <button className="article-nav-button" type="button"onClick={handleRightClick}>
      <FontAwesomeIcon  icon={faArrowRight}  size="lg" />
      </button>
    </div>
  </article>
  <article data-index="2" data-status="inactive">    
    <div className="article-image-section article-section"> </div>
    <div className="article-description-section article-section">
      <p>A social media mockup made in <a className="source-link" href="https://figma.com/" target="_blank">Figma</a>, to be used in a <a className="source-link" href="https://spline.design/" target="_blank">Spline</a> web project for research purposes.  </p>
    </div>
    <div className="article-title-section article-section">
      <h2>Devcord</h2>
      <i className="fa-light fa-plus-large"></i>
    </div>
    <div className="article-nav-section article-section">
      <button className="article-nav-button" type="button" onClick={handleLeftClick}>
      <FontAwesomeIcon  icon={faArrowLeft}  size="lg" />
      </button>
      <button className="article-nav-button" type="button"onClick={handleRightClick}>
      <FontAwesomeIcon  icon={faArrowRight}  size="lg" />
      </button>
    </div>
  </article>
  {/* <article data-index="3" data-status="inactive">    
    <div className="article-image-section article-section"></div>
    <div className="article-description-section article-section">
      <p>
        The blobiest of blobs nestled deep in the heart of outer space. Well, technically the universe is both infinite and homogeneous so there isn't really a heart, per se.
      </p>
    </div>
    <div className="article-title-section article-section">
      <h2>Super Space Blob</h2>
      <i className="fa-light fa-plus-large"></i>
    </div>
    <div className="article-nav-section article-section">
      <button className="article-nav-button" type="button" onClick={handleLeftClick}>
      <FontAwesomeIcon  icon={faArrowLeft}  size="lg" />
      </button>
      <button className="article-nav-button" type="button"onClick={handleRightClick}>
      <FontAwesomeIcon  icon={faArrowRight}  size="lg" />
      </button>
    </div>
  </article> */}
      </main>
    
    </div>
}

export default App;
