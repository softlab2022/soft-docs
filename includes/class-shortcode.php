<?php

defined( 'ABSPATH' ) || exit();


class SoftDocs_Shortcode {
	/**
	 * @var null
	 */
	protected static $instance = null;

	public function __construct() {
		add_shortcode( 'documentation', [ $this, 'render_documentation' ] );
		add_shortcode( 'documentation_archive', [ $this, 'render_documentation_archive' ] );
		add_shortcode( 'documentation_single', [ $this, 'render_documentation_single' ] );
	}


	public function render_documentation( $atts = [], $data = null ) {
		ob_start();
		include_once SOFT_DOCS_TEMPLATES . '/documentation.php';

		return ob_get_clean();
	}

	public function render_documentation_archive( $atts = [], $data = null ) {
		ob_start();
		include_once SOFT_DOCS_TEMPLATES . '/archive.php';

		return ob_get_clean();
	}

	public function render_documentation_single( $atts = [], $data = null ) {
		ob_start();
		include_once SOFT_DOCS_TEMPLATES . '/single.php';

		return ob_get_clean();
	}


	/**
	 * @return SoftDocs_Shortcode|null
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

}

SoftDocs_Shortcode::instance();