<?php
function jab_block_assets()
{
    $style_path = plugin_dir_url( __FILE__ ) . '../build/css/blocks-save.css';
    $react_path = plugin_dir_url( __FILE__ ) . '../build/js/react.min.js';

    // Styles
    wp_enqueue_style('jab-block-save-style', $style_path, '');

    // React
    wp_enqueue_script('jab-react-js', $react_path, ['wp-editor'], null, true);
}
add_action('enqueue_block_assets', 'jab_block_assets');

function jab_editor_assets()
{
    $blocks_path = plugin_dir_url( __FILE__ ) . '../build/js/blocks.min.js';
    $style_path = plugin_dir_url( __FILE__ ) . '../build/css/blocks-edit.css';

    // Register our block script with WordPress
    wp_enqueue_script('jab-block-js', $blocks_path, [ 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ], true);

    // Register our block's editor-specific CSS
    wp_enqueue_style('jab-block-editor-style', $style_path, [ 'wp-edit-blocks' ]);
}
add_action('enqueue_block_editor_assets', 'jab_editor_assets');
