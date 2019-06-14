import React, {Component} from 'react';
import MapGL, {Marker} from 'react-map-gl';
import { Image,OverlayTrigger} from 'react-bootstrap';
const appToken = "pk.eyJ1Ijoic2FuZ3Nha2F3aXJhIiwiYSI6ImNqdXBhajZmeTBudXg0NG50YjdhcDF2amUifQ.NmC56k1T54xEKGmlrFOxRA"
/* global window */

const renderTooltip = props => (
    <div
      {...props}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        padding: '2px 10px',
        color: 'white',
        borderRadius: 3,
        ...props.style,
      }}
    >
      Simple tooltip
    </div>
  );

export default class Map extends Component {

  state = {
    style: 'mapbox://styles/mapbox/light-v9',
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude:  -7.2539,
      longitude: 112.7442,
      zoom: 12
    },cctv:[
        {
            nama:"cctv",
            lat:-7.270,
            long:112.7902,
            icon:"icon/cctv.png",
            link:"http://cctv.balitower.co.id/Menteng-025-700503_2/embed.html?proto=hls"
        },
        {
            nama:"cctv",
            lat:-7.2450,
            long:112.7422,
            icon:"icon/cctv.png",
            link:"http://cctv.balitower.co.id/Gondangdia-001-700051_1/embed.html"
        },
        {
            nama:"cctv",
            lat:-7.2319,
            long:112.7862,
            icon:"icon/cctv.png",
            link:"http://cctv.balitower.co.id/Gondangdia-001-700051_2/embed.html"
        },
        {
            nama:"cctv",
            lat:-7.2500,
            long:112.762,
            icon:"icon/cctv.png",
            link:"http://cctv.balitower.co.id/Gondangdia-001-700051_3/embed.html"
        },
        {   nama:"cctv",
            lat:-7.2250,
            long:112.6862,
            icon:"icon/cctv.png",
            link:"http://cctv.balitower.co.id/Gondangdia-001-700051_4/embed.html"
        },
        {   
            nama:"cctv",
            lat:-7.2130,
            long:112.6562,
            icon:"icon/cctv.png",
            link:" http://cctv.balitower.co.id/Bendungan-Hilir-003-700014_2/embed.html"
        },
        {   
            nama:"kebakaran",
            lat:-7.2612,
            long:112.6962,
            icon:"img/kebakaran.png",
            link:" http://cctv.balitower.co.id/Bendungan-Hilir-003-700014_2/embed.html"
        },
        {   
            nama:"kebakaran",
            lat:-7.2690,
            long:112.6622,
            icon:"img/kebakaran.png",
            link:" http://cctv.balitower.co.id/Bendungan-Hilir-003-700014_2/embed.html"
        },
    ]
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  onStyleChange = (style) => {
    this.setState({style});
  }

  _onViewportChange = (viewport) => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  }

  _resize = () => {
    this._onViewportChange({
      width: window.innerWidth -20,
      height: window.innerHeight - 20
    });
  }

  render() {
    return (
      <div>
        {/* <MapStylePicker onStyleChange={this.onStyleChange} currentStyle={this.state.style}/> */}
        <MapGL
          {...this.state.viewport}
          mapStyle={this.state.style}
          onViewportChange={viewport => this._onViewportChange(viewport)}
          mapboxApiAccessToken={appToken}
        >
             {   this.state.cctv.map((value)=>{
            return(
                <div>
                     <OverlayTrigger
                        placement="right-start"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                        >
                            <Marker latitude={value.lat} longitude={value.long} offsetLeft={-20} offsetTop={-10}>
                                <a href={value.link}target="_blank" rel="noopener noreferrer">
                                <img src={value.icon} style={{width:'20px'}} alt="#"></img>
                                </a>
                            </Marker>
                        
                    </OverlayTrigger>
                </div>
            )
        })
        }
         <Image src="img/Logo TrafficNet.png" style={{width:"180px",height:"60px",padding:"10px"}}></Image>
        </MapGL>
      </div>
    );
  }
}