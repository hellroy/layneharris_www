import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Past work</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              var myJSONString = JSON.stringify(item.content);
              var myEscapedJSONString = item.content.escapeSpecialChars();
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={"#"+item.id}>
                      <img src={`${item.imgurl}`} className="item-img" alt={item.name}/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description + " overlay"}</p>
                        </div>
                      </div>
                      <div id={item.id} class="white-popup mfp-hide">
                      <h5>{item.name}</h5>
                          <p>{item.description  + " popup"}</p>
                      <img src={`${item.imgurl}`} className="item-img" alt={item.name}/>
                              {myEscapedJSONString}
                          </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }

}

String.prototype.escapeSpecialChars = function() {
  return this.replace(/\\n/g, "\\n")
             .replace(/\\'/g, "\\'")
             .replace(/\\"/g, '\\"')
             .replace(/\\&/g, "\\&")
             .replace(/\\r/g, "\\r")
             .replace(/\\t/g, "\\t")
             .replace(/\\b/g, "\\b")
             .replace(/\\f/g, "\\f");
};