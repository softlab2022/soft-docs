<?php

$name        = $category->name;
$slug        = $category->slug;
$count       = $category->count;
$description = $category->description;
$term_id     = $category->term_id;
$term_link   = get_term_link( $category );
$image_id    = get_term_meta( $term_id, 'category-image-id', true );


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
			'orderby'        => 'menu_order',
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

		if ( $query->have_posts() ) {
			while ( $query->have_posts() ) {
				$query->the_post();
				$post_id = get_the_ID();
				$title   = get_the_title();
				$link    = get_the_permalink();
				$image   = get_the_post_thumbnail_url( $post_id, 'full' );
				?>
                <a href="<?php echo $link; ?>" class="docs-list-item">
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