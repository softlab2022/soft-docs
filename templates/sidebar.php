<?php

$name        = $category->name;
$slug        = $category->slug;
$count       = $category->count;
$description = $category->description;
$term_id     = $category->term_id;
$term_link   = get_term_link( $category );
$image_id    = get_term_meta( $term_id, 'category-image-id', true );

$current_post_id = get_the_ID();

?>


<aside class="softdocs-sidebar">
    <div class="sidebar-title">
        <a href="<?php echo $term_link; ?>">
			<?php
			if ( $image_id ) {
				echo wp_get_attachment_image( $image_id );
			}
			?>
            <span class="category-name"><?php echo $name ?></span>
            <span class="docs-count"><?php echo $count; ?></span>
        </a>
    </div>

    <div class="docs-list">
		<?php
		$args = array(
			'post_type'      => 'docs',
			'posts_per_page' => - 1,
            'orderby'        => array(
                'menu_order' => 'ASC',
                'date'       => 'ASC',
            ),
			'order'          => 'ASC',
			'tax_query'      => array(
				array(
					'taxonomy' => 'docs_category',
					'field'    => 'slug',
					'terms'    => $slug,
				),
			),
		);

		$query = new WP_Query( $args );

		$displayed_child_categories = array();

		if ( $query->have_posts() ) {
			$current_section = '';
			while ( $query->have_posts() ) {
				$query->the_post();
				$post_id = get_the_ID();
				$title   = get_the_title();
				$link    = get_the_permalink();
				$image   = get_the_post_thumbnail_url( $post_id, 'full' );

				$active = $current_post_id == $post_id ? 'active' : '';

				$parent_cat = get_the_terms($post_id, 'docs_category');

				$child_cats = array_filter($parent_cat, function ($cat) {
					return $cat->parent != 0;
				});

				foreach ($child_cats as $child_cat) {
					$child_term_id = $child_cat->term_id;
					$child_term_name = $child_cat->name;
		
					if ($current_section !== $child_term_name) {
						if (!empty($current_section)) {
							echo '</div></div>';
						}
						echo '<div class="docs-section">';
						echo '<div class="docs-section-title">' . esc_html($child_term_name) . '<span class="docs-caret"></span></div>';
						echo '<div class="docs-section-content">';
						$current_section = $child_term_name;
					}
				}
				?>
                <a href="<?php echo $link; ?>"
                   class="docs-list-item <?php echo $active; ?>">
                    <img class="doc-icon" src="<?php echo SOFT_DOCS_ASSETS; ?>/images/doc-icon.png" alt="doc">
                    <span class="doc-title"><?php echo $title; ?></span>
                </a>
				<?php
			}

			wp_reset_postdata();
		}

		?>
    </div>
</aside>