import React from 'react';

class footer extends React.Component{
    render () {
      return (
        <div>
          <footer className="footer" style={{minHeight: 100, background: '#262626', color: 'white'}}>
            <div className="container">
              <div className="row" style={{padding: '2%'}}>
                <div className="col-md-4">
                  <p>Địa Chỉ: 38/3 Nguyễn Thị Định Quận 2 TP Hồ Chí Minh</p>
                  <p>Email: <a href="#">salonquan2.gmail.com</a></p>
                </div>
                <div className="col-md-4">
                  <p>hotline: 19001585</p>
                  <p>hotline: 19001584</p>
                  <p>hotline: 19001580</p>
                </div>
                <div className="col-md-4">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3332230304263!2d106.75613831418262!3d10.785770261971956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317525d807027693%3A0xa1baa4caac02a09f!2zMzgvMyBOZ3V54buFbiBUaOG7iyDEkOG7i25oLCBCw6xuaCBUcsawbmcgVMOieSwgUXXhuq1uIDIsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1510992216180" width={350} height={200} frameBorder={0} style={{border: 0}} allowFullScreen />
                </div>
              </div>
            </div>
          </footer>
          
        </div>
      );
    }
  }
  export default footer;
