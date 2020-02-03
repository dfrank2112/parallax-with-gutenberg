// WordPress
const { InnerBlocks } = wp.blockEditor;

// Plugin
import namespace from '../../../namespace';

// Block
import BoxParallax from './BoxParallax';

const save = ({ attributes, className }) => {
    const

        // Destructure attributes
        {
            bgImgObject,
            bgImgOpacity,
            backgroundColor,
            parallaxEnabled
        } = attributes;

    return (
        <section
            data-bgimgobject={ JSON.stringify(bgImgObject) }
            data-bgimgopacity={ bgImgOpacity }
            data-parallaxenabled={ parallaxEnabled }
            className={
                `${ className } wp-block--${ namespace } is-front-end`
            }
            style={ {
                background: backgroundColor ? backgroundColor : 'none',
            } }
        >

            { /** Background **/ }
            <div className="block__react u-full_cover_absolute">
                <BoxParallax
                    bgImgOBject={ bgImgObject }
                    bgImgOpacity={ bgImgOpacity }
                />
            </div>

            { /** Container **/ }
            <div className="block__inner">
                <InnerBlocks.Content />
            </div>
        </section>
    );
};

export default save;
