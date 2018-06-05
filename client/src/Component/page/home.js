
import React from 'react';
class Home extends React.Component {
  render() {
      return (
        <div>
          <div className="content display-container">
            <div className="mySlides animate-fading">
              <a ><img src="source/img/product/slider/1.jpg" style={{width: '100%'}} />
                <div className="slide-caption-left">
                  <h1><strong>Porsche</strong></h1>
                </div>
              </a>
            </div>
            <div className="mySlides animate-fading">
              <img src="source/img/product/slider/2.jpg" style={{width: '100%'}} />
              <div className="slide-caption-left">
                <h1><strong>Lamporghini</strong></h1>
              </div>
            </div>
            <div className="mySlides animate-fading">
              <a href="#"><img src="source/img/product/slider/3.jpg" style={{width: '100%'}} />
                <div className="slide-caption-left">
                  <h1><strong>Ferrari</strong></h1>
                </div>
              </a>
            </div>
            <div className="mySlides animate-fading">
              <a href="#"><img src="source/img/product/slider/4.jpg" style={{width: '100%'}} />
                <div className="slide-caption-left">
                  <h1><strong>Lexus</strong></h1>
                </div>
              </a>
            </div>
            <div className="mySlides animate-fading">
              <a href="#"><img src="source/img/product/slider/5.jpg" style={{width: '100%'}} />
                <div className="slide-caption-left">
                  <h1><strong>Audi</strong></h1>
                </div>
              </a>
            </div>
            <div className="progress-bar" style={{width: '100%'}}>
              <div id="myBar" className="progress-bar-run" style={{width: '0%'}} />
            </div>
            {/* <div class="slide-caption-right">
          <h1><strong>Trần Ngọc Quốc</strong></h1>
          <h2>1560453</h2>
          <h3>15CK4</h3>
      </div> */}
            <div className="center container section large text-white display-middle" style={{width: '100%'}}>
              <div className="left hover-text-khaki" onclick="moveSlide(-1)">❮</div>
              <div className="right hover-text-khaki" onclick="moveSlide(1)">❯</div>
            </div>
            <div className="center container section large text-white display-bottommiddle">
              <span className="mybadge demo border-badge transparent hover-white" onclick="currentDiv(1)" />
              <span className="mybadge demo border-badge transparent hover-white" onclick="currentDiv(2)" />
              <span className="mybadge demo border-badge transparent hover-white" onclick="currentDiv(3)" />
              <span className="mybadge demo border-badge transparent hover-white" onclick="currentDiv(4)" />
              <span className="mybadge demo border-badge transparent hover-white" onclick="currentDiv(5)" />
            </div>
          </div>
          <div style={{height: '10%'}}>&nbsp;</div>
          {/*?php
        include('Highlights.php');
            ?*/}
            <script src="source/js/slider.js"></script>
        </div>
      );
    }
  }
  export default Home;