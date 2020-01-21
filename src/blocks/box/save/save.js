// WordPress
const { InnerBlocks } = wp.blockEditor;

// Plugin
import namespace from '../../../namespace';

const save = ({ attributes, className }) => {
    const

        // Destructure attributes
        {
            bgImgObject,
            bgImgOpacity,
            backgroundColor,
            parallaxEnabled
        } = attributes,

        // BG Opacity CSS
        bgOpacity = bgImgOpacity === 10 ? '1' : `0.${ bgImgOpacity }`,

        // BG Image CSS
        bgImage = `url(${
            bgImgObject.sizes ? bgImgObject.sizes.full.url : bgImgObject.url
        }) center/cover no-repeat`;

    return (
        <section
            data-bgimgobject={ JSON.stringify(bgImgObject) }
            data-bgimgopacity={ bgImgOpacity }
            data-parallaxenabled={ parallaxEnabled }
            className={
                `${ className } wp-block--${ namespace } is-front-end u-relative_hidden`
            }
            style={ {
                background: backgroundColor ? backgroundColor : 'none',
            } }
        >

            { /** Background **/ }
            <div className="block__react u-full_cover_absolute">
                <div
                    className="u-full_cover_absolute"
                    style={ {
                        background: bgImage,
                        opacity: bgOpacity
                    } }
                > </div>
            </div>

            { /** Container **/ }
            <div className="block__inner">
                <InnerBlocks.Content />
            </div>
        </section>
    );
};

export default save;
