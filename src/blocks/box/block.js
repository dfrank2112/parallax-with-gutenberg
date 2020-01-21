// WordPress
const
    { __ } = wp.i18n,
    { registerBlockType } = wp.blocks;

// Plugin
import edit from './edit';
import save from './save/save';
import * as icon from './icon';
import namespace from '../../namespace';
import attributes from './attributes';

registerBlockType(`${ namespace }/box`, {
    title: __('Box', namespace),
    icon: {
        src: icon.block
    },
    keywords: [
        __('Parallax', namespace),
        __('Content', namespace),
        __('Background Image', namespace),
    ],
    category: 'common',
    attributes,
    edit,
    save
});
