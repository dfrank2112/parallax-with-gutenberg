const { Component } = wp.element;

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

class BoxParallax extends Component {
    render() {
        const
            {
                bgImgObject,
                bgImgOpacity,
                parallaxEnabled
            } = this.props,

            // BG Opacity CSS
            bgOpacity = bgImgOpacity === 10 ? '1' : `0.${ bgImgOpacity }`,

            // BG Image CSS
            bgImage = bgImgObject ? `url(${
                bgImgObject.sizes ? bgImgObject.sizes.full.url : bgImgObject.url
            }) center/cover no-repeat` : undefined,

            // Combined styles
            bgStyles = {
                background: bgImage,
                opacity: bgOpacity
            };

        return parallaxEnabled ? (
            <ParallaxProvider>
                <Parallax
                    styleInner={ bgStyles }
                    y={ [0, -17] }
                />
            </ParallaxProvider>
        ) : (
            <div
                className="u-full_cover_absolute"
                style={ bgStyles }
            > </div>
        )
    }
}

export default BoxParallax;
