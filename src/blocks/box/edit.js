// WordPress
const
    { __ } = wp.i18n,
    { Fragment } = wp.element,
    { MediaUpload, InspectorControls, InnerBlocks } = wp.blockEditor,
    { PanelBody, RangeControl, ToggleControl } = wp.components;

// Plugin
import namespace from '../../namespace';

// Block
import BoxParallax from './save/BoxParallax';

const edit = ({ className, attributes, setAttributes }) => {
    const

        // Deconstruct attributes
        {
            bgImgObject,
            bgImgOpacity,
            backgroundColor,
            parallaxEnabled
        } = attributes,

        // Runs when bgImgObject is an empty object
        chooseMedia = ({ open }) => {
            return (
                <button
                    onClick={ open }
                    className={ `button--${ namespace }` }
                >
                    { __('Choose Media', namespace) }
                </button>
            )
        },

        // Runs when bgImgObject has media data assigned
        removeMedia = () => {
            return (
                <button
                    className={ `button--${ namespace }` }
                    onClick={ () => {
                        setAttributes({
                            bgImgObject: {}
                        });
                    } }
                >
                    { __('Remove Media', namespace) }
                </button>
            )
        },

        // Assigns media data to bgImgObject
        onSelectMedia = (media) => {
            setAttributes({
                bgImgObject: media
            });
        };

    // Editor View
    return (
        <Fragment>
            <InspectorControls>
                <PanelBody
                    title={ __('Background Settings', namespace) }
                    initialOpen={ false }
                >
                    <MediaUpload
                        onSelect={ bgImgObject => onSelectMedia(bgImgObject) }
                        value={ bgImgObject && bgImgObject.id }
                        render={ bgImgObject && bgImgObject.id ? removeMedia : chooseMedia }
                    />

                    <ToggleControl
                        label={ __('Parallax Enabled?', namespace) }
                        checked={ parallaxEnabled }
                        onChange={ parallaxEnabled => setAttributes({ parallaxEnabled }) }
                    />

                    <RangeControl
                        label={ __('Image Opacity', namespace) }
                        value={ bgImgOpacity }
                        onChange={ bgImgOpacity => setAttributes({ bgImgOpacity }) }
                        min={ 1 }
                        max={ 10 }
                    />
                </PanelBody>
            </InspectorControls>

            <section
                className={
                    `${ className } 
                    wp-block--${ namespace } 
                    is-back-end
                    u-relative_hidden`
                }
                style={ {
                    background: backgroundColor !== '' ? backgroundColor : 'none',
                } }
            >

                { /** Background **/ }
                <div className="block__react u-full_cover_absolute">
                    <BoxParallax
                        { ...attributes }
                    />
                </div>

                { /** Content **/ }
                <div className="block__inner">
                    <InnerBlocks />
                </div>
            </section>
        </Fragment>
    );
};
export default edit;
