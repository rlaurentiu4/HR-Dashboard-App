import React from 'react';
import DashSvg from '../assets/undraw_celebration_0jvk.svg';

class DashboardView extends React.Component {
  render() {
    return (
      <>
        <div className="dashboard_ctn main_ctn anim-view-ctn">
          <div className="perf_first_ctn">
            <div>
              <h1>Performance insights</h1>
              <p className="description_dash">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                quis tortor nunc. Fusce eget accumsan orci, at viverra ipsum. In
                urna erat, tincidunt sit amet pulvinar a, suscipit et tortor.
                Integer condimentum risus erat, eget rhoncus risus venenatis
                dignissim.
              </p>
            </div>
            <div>
              <img src={DashSvg} alt="" />
            </div>
          </div>

          <div className="performance_ctn_cards">
            <div className="_card">
              <div>
                <h2>Lorem ipsum</h2>
                <p className="description_dash">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  quis tortor nunc. Fusce eget accumsan orci, at viverra ipsum.
                  In urna erat, tincidunt sit amet pulvinar a, suscipit et
                  tortor. Integer condimentum risus erat, eget rhoncus risus
                  venenatis dignissim.
                </p>
              </div>
              <div>data</div>
            </div>
            <div className="_card">
              <div>
                <h2>Lorem ipsum</h2>
                <p className="description_dash">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  quis tortor nunc. Fusce eget accumsan orci, at viverra ipsum.
                  In urna erat, tincidunt sit amet pulvinar a, suscipit et
                  tortor. Integer condimentum risus erat, eget rhoncus risus
                  venenatis dignissim.
                </p>
              </div>
              <div>data</div>
            </div>
            <div className="_card">
              <div>
                <h2>Lorem ipsum</h2>
                <p className="description_dash">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  quis tortor nunc. Fusce eget accumsan orci, at viverra ipsum.
                  In urna erat, tincidunt sit amet pulvinar a, suscipit et
                  tortor. Integer condimentum risus erat, eget rhoncus risus
                  venenatis dignissim.
                </p>
              </div>
              <div>data</div>
            </div>
            <div className="_card">
              <div>
                <h2>Lorem ipsum</h2>
                <p className="description_dash">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  quis tortor nunc. Fusce eget accumsan orci, at viverra ipsum.
                  In urna erat, tincidunt sit amet pulvinar a, suscipit et
                  tortor. Integer condimentum risus erat, eget rhoncus risus
                  venenatis dignissim.
                </p>
              </div>
              <div>data</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DashboardView;
