import React from 'react';
import { Link } from 'react-router-dom';

import DashSvg from '../assets/undraw_celebration_0jvk.svg';

class DashboardView extends React.Component {
  render() {
    return (
      <>
        <div className="main_ctn anim-view-ctn">
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
              <div className="anim-view-ctn">
                <Link to="/applicantView">
                  <h2>Applicants</h2>
                </Link>
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
              <div className="anim-view-ctn">
                <Link to="/jobsView">
                  <h2>Jobs</h2>
                </Link>
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
              <div className="anim-view-ctn">
                <Link to="/interviewView">
                  <h2>Interviews</h2>
                </Link>
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
