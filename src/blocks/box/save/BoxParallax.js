const { Component } = wp.element;

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

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
            bgImage = `url(${
                bgImgObject.sizes ? bgImgObject.sizes.full.url : bgImgObject.url
            }) center/cover no-repeat`,

            bgStyles = {
                opacity: bgOpacity,
                background: bgImage
            };

        return parallaxEnabled ? (
            <ParallaxProvider>
                <Parallax
                    className="u-full_cover_absolute"
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
