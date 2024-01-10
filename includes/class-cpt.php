<?php

class SoftDocs_CPT {

	private static $instance = null;

	public function __construct() {
		add_action( 'init', [ $this, 'register_post_type' ] );
		add_action( 'init', [ $this, 'register_taxonomy' ] );

		//add category image
		add_action( 'docs_category_add_form_fields', [ $this, 'add_category_image' ], 10 );
		add_action( 'docs_category_edit_form_fields', [ $this, 'edit_category_image' ], 10, 2 );
		add_action( 'created_docs_category', [ $this, 'save_category_image' ], 10, 2 );
		add_action( 'edited_docs_category', [ $this, 'updated_category_image' ], 10, 2 );
		
		//add category order
		add_action( 'docs_category_add_form_fields', [ $this, 'soft_docs_add_category_order' ], 10 );
		add_action( 'docs_category_edit_form_fields', [ $this, 'soft_docs_edit_category_order' ], 10, 2 );
		add_action( 'created_docs_category', [ $this, 'soft_docs_save_category_order' ], 10, 2 );
		add_action( 'edited_docs_category', [ $this, 'soft_docs_update_category_order' ], 10, 2 );

		//add category column in admin
		add_filter( 'manage_edit-docs_category_columns', [ $this, 'add_category_column' ] );
		add_filter( 'manage_docs_category_custom_column', [ $this, 'add_category_column_content' ], 10, 3 );
	}

	public function register_post_type() {
		$labels = [
			'name'               => _x( 'Doc', 'post type general name', 'soft-docs' ),
			'singular_name'      => _x( 'Doc', 'post type singular name', 'soft-docs' ),
			'menu_name'          => _x( 'Docs', 'admin menu', 'soft-docs' ),
			'name_admin_bar'     => _x( 'Doc', 'add new on admin bar', 'soft-docs' ),
			'add_new'            => _x( 'Add New', 'doc', 'soft-docs' ),
			'add_new_item'       => __( 'Add New Doc', 'soft-docs' ),
			'new_item'           => __( 'New Doc', 'soft-docs' ),
			'edit_item'          => __( 'Edit Doc', 'soft-docs' ),
			'view_item'          => __( 'View Doc', 'soft-docs' ),
			'all_items'          => __( 'All Docs', 'soft-docs' ),
			'search_items'       => __( 'Search Docs', 'soft-docs' ),
			'parent_item_colon'  => __( 'Parent Docs:', 'soft-docs' ),
			'not_found'          => __( 'No docs found.', 'soft-docs' ),
			'not_found_in_trash' => __( 'No docs found in Trash.', 'soft-docs' )
		];

		$args = [
			'labels'             => $labels,
			'description'        => __( 'Description.', 'soft-docs' ),
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => [ 'slug' => 'docs' ],
			'capability_type'    => 'post',
			'has_archive'        => false,
			'hierarchical'       => false,
			'menu_position'      => null,
			'menu_icon'          => 'dashicons-media-document',
			'supports'           => [ 'title', 'editor', 'thumbnail', 'page-attributes' ]
		];

		register_post_type( 'docs', $args );
	}

	public function register_taxonomy() {
		$labels = [
			'name'              => _x( 'Doc Categories', 'taxonomy general name', 'soft-docs' ),
			'singular_name'     => _x( 'Doc Category', 'taxonomy singular name', 'soft-docs' ),
			'search_items'      => __( 'Search Doc Categories', 'soft-docs' ),
			'all_items'         => __( 'All Doc Categories', 'soft-docs' ),
			'parent_item'       => __( 'Parent Doc Category', 'soft-docs' ),
			'parent_item_colon' => __( 'Parent Doc Category:', 'soft-docs' ),
			'edit_item'         => __( 'Edit Doc Category', 'soft-docs' ),
			'update_item'       => __( 'Update Doc Category', 'soft-docs' ),
			'add_new_item'      => __( 'Add New Doc Category', 'soft-docs' ),
			'new_item_name'     => __( 'New Doc Category Name', 'soft-docs' ),
			'menu_name'         => __( 'Doc Category', 'soft-docs' ),
		];

		$args = [
			'hierarchical'      => true,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => [ 'slug' => 'docs-category' ],
		];

		register_taxonomy( 'docs_category', [ 'docs' ], $args );
	}

	//add category image
	public function add_category_image( $taxonomy ) { ?>
        <div class="form-field term-group">
            <label for="category-image-id"><?php _e( 'Image', 'soft-docs' ); ?></label>
            <input type="hidden" id="category-image-id" name="category-image-id" class="custom_media_url" value="">
            <div id="category-image-wrapper"></div>
            <p>
                <button class="button button-secondary softdocs_tax_media_button" id="softdocs_tax_media_button"
                        data-uploader_title="Select Image"
                        data-uploader_button_text="Select Image"><?php _e( 'Add Image', 'soft-docs' ); ?></button>

                <button class="button button-link-delete softdocs_tax_media_remove"><?php _e( 'Remove Image', 'soft-docs' ); ?></button>
            </p>
        </div>
	<?php }

	public function edit_category_image( $term, $taxonomy ) {
		$image_id = get_term_meta( $term->term_id, 'category-image-id', true );

		?>
        <tr class="form-field term-group-wrap">
            <th scope="row">
                <label for="category-image-id"><?php _e( 'Image', 'soft-docs' ); ?></label>
            </th>
            <td>
                <input type="hidden" id="category-image-id" name="category-image-id" value="<?php echo $image_id; ?>">
                <div id="category-image-wrapper">
					<?php if ( $image_id ) { ?>
						<?php echo wp_get_attachment_image( $image_id, 'thumbnail' ); ?>
					<?php } ?>
                </div>
                <p>
                    <button class="button button-secondary softdocs_tax_media_button" id="softdocs_tax_media_button"
                            data-uploader_title="Select Image"
                            data-uploader_button_text="Select Image"><?php _e( 'Add Image', 'soft-docs' ); ?></button>

                    <button class="button button-link-delete softdocs_tax_media_remove <?php echo $image_id ? 'show' : ''; ?>"><?php _e( 'Remove Image', 'soft-docs' ); ?></button>
                </p>
            </td>
        </tr>
	<?php }

	public function save_category_image( $term_id, $tt_id ) {
		if ( isset( $_POST['category-image-id'] ) && '' !== $_POST['category-image-id'] ) {
			$image = $_POST['category-image-id'];
			add_term_meta( $term_id, 'category-image-id', $image, true );
		}
	}

	public function updated_category_image( $term_id, $tt_id ) {
		if ( isset( $_POST['category-image-id'] ) && '' !== $_POST['category-image-id'] ) {
			$image = $_POST['category-image-id'];
			update_term_meta( $term_id, 'category-image-id', $image );
		} else {
			update_term_meta( $term_id, 'category-image-id', '' );
		}
	}

	//add category order
	public function soft_docs_add_category_order( $taxonomy ){?>
		<div class="form-field term-group">
			<tr class="form-field">
				<th scope="row" valign="top">
					<label for="order"><?php echo esc_html__('Order', 'soft-docs'); ?></label>
				</th>
				<td>
					<input type="number" name="order" id="order" value="" placeholder="<?php echo esc_attr__('Enter your order number', 'soft-docs'); ?>" />
					<p class="description"><?php echo esc_html__('Enter the order for this category.', 'soft-docs'); ?></p>
				</td>
			</tr>
		</div>
	<?php }	
	
	// edit category order
	public function soft_docs_edit_category_order( $taxonomy ){
		$order = get_term_meta($taxonomy->term_id, 'order', true);
		?>
		<div class="form-field term-group">
			<tr class="form-field">
				<th scope="row" valign="top">
					<label for="order"><?php echo esc_html__('Order', 'soft-docs'); ?></label>
				</th>
				<td>
					<input type="number" name="order" id="order" value="<?php echo esc_attr($order); ?>" placeholder="<?php echo esc_attr__('Enter your order number', 'soft-docs'); ?>" />
					<p class="description"><?php echo esc_html__('Enter the order for this category.', 'soft-docs'); ?></p>
				</td>
			</tr>
		</div>
	<?php }

	// save category order
	public function soft_docs_save_category_order( $term_id ){
		if (isset($_POST['order'])) {
			update_term_meta($term_id, 'order', sanitize_text_field($_POST['order']));
		}
	}

	// update category order
	public function soft_docs_update_category_order( $term_id ) {
		if (isset($_POST['order'])) {
			update_term_meta($term_id, 'order', sanitize_text_field($_POST['order']));
		} else {
			delete_term_meta($term_id, 'order');
		}
	}

	public function add_category_column( $columns ) {
		$new_columns = [];

		foreach ( $columns as $key => $title ) {
			if ( 'cb' === $key ) {
				$new_columns['cb']    = $title;
				$new_columns['image'] = __( 'Image', 'soft-docs' );
			} else {
				$new_columns[ $key ] = $title;
			}
		}

		return $new_columns;
	}

	public function add_category_column_content( $content, $column_name, $term_id ) {
		if ( 'image' === $column_name ) {
			$image_id = get_term_meta( $term_id, 'category-image-id', true );
			if ( $image_id ) {
				$content .= wp_get_attachment_image( $image_id, [ 48, 48 ] );
			}
		}

		return $content;
	}


	public static function instance() {
		if ( null === self::$instance ) {
			self::$instance = new self;
		}

		return self::$instance;
	}

}

SoftDocs_CPT::instance();