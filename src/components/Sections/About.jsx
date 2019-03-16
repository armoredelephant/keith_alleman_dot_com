import React from 'react';

const AboutSection = () => {
    return (
        <React.Fragment>
            <section id="about" className="a-section section-about">
                <div className="section-about-left">
                    {/** will have an image over two blocks behind it */}
                    <div className="block-one"></div>
                    <div className="block-two"></div>
                    <img src=""></img>
                </div>
                <div className="section-about-right">
                    <div className="section-header section-about-header">
                        <h2>About</h2>
                    </div>
                    <div className="section-about-paragraph">
                        <p>
                            {/** About para. */}
                        </p>
                    </div>
                </div>
                
            </section>
        </React.Fragment>
    )
}

export default AboutSection;