<?php

function softdocs_get_template( $template_name, $args = array(), $template_path = 'soft-docs', $default_path = '' ) {

	/* Add php file extension to the template name */
	$template_name = $template_name . '.php';

	/* Extract the args to variables */
	if ( $args && is_array( $args ) ) {
		extract( $args );
	}

	/* Look within passed path within the theme - this is high priority. */
	$template = locate_template( array( trailingslashit( $template_path ) . $template_name ) );

	/* Get default template. */
	if ( ! $template && false !== $default_path ) {
		$default_path = $default_path ? $default_path : SOFT_DOCS_TEMPLATES;
		if ( file_exists( trailingslashit( $default_path ) . $template_name ) ) {
			$template = trailingslashit( $default_path ) . $template_name;
		}
	}

	// Return what we found.
	include( apply_filters( 'softdocs_locate_template', $template, $template_name, $template_path ) );

}
