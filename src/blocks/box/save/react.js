// WordPress
const { render } = wp.element;

// Plugin
import namespace from '../../../namespace';

// Block
import BoxParallax from './BoxParallax';

const boxBlocks = document.querySelectorAll(
    `.wp-block-${ namespace }-box`
);

boxBlocks.forEach(block => {
    const
        attributes = {
            bgImgObject: JSON.parse(block.dataset.bgimgobject),
            bgImgOpacity: parseInt(block.dataset.bgimgopacity),
            parallaxEnabled: block.dataset.parallaxenabled === 'true'
        },
        blockMount = block.querySelector('.block__react');

    render(
        <BoxParallax
            { ...attributes }
        />,
        blockMount
    );
});
