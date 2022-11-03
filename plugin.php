<?php
/**
 * Plugin Name:  Soft Docs
 * Plugin URI:  https://softlabbd.com/soft-docs/
 * Description: Documentation & Knowledge Base Plugin
 * Version:     1.0.0
 * Author:      SoftLab
 * Author URI:  https://softlabbd.com/
 * Text Domain: soft-docs
 * Domain Path: /languages/*
 */

// don't call the file directly
if ( ! defined( 'ABSPATH' ) ) {
	wp_die( __( 'You can\'t access this page', 'soft-docs' ) );
}

/** define constants */
define( 'SOFT_DOCS_VERSION', '1.0.0' );
define( 'SOFT_DOCS_FILE', __FILE__ );
define( 'SOFT_DOCS_PATH', dirname( SOFT_DOCS_FILE ) );
define( 'SOFT_DOCS_INCLUDES', SOFT_DOCS_PATH . '/includes' );
define( 'SOFT_DOCS_URL', plugins_url( '', SOFT_DOCS_FILE ) );
define( 'SOFT_DOCS_ASSETS', SOFT_DOCS_URL . '/assets' );
define( 'SOFT_DOCS_TEMPLATES', SOFT_DOCS_PATH . '/templates' );


//Include the base plugin file.
include_once SOFT_DOCS_INCLUDES . '/class-base.php';