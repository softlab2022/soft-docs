<section class="docs-container">

    <div class="docs-text">
        <h1>What are you looking for?</h1>
    </div>

    <div class="form">
        <form action="#" method="POST">
            <input type="text" placeholder="Search for topic or question....">
            <select class="form-select">
                <option selected value="">All Categories</option>

				<?php
				$args = array(
					'taxonomy'   => 'docs_category',
					'hide_empty' => false,
				);

				$categories = get_categories( $args );

				foreach ( $categories as $category ) {
					echo '<option value="' . $category->slug . '">' . $category->name . '</option>';
				}

				?>
            </select>

            <div class="btns">
                <a href="#" class=" btn-primary" type="submit"><i class="fa-solid fa-magnifying-glass"></i>
                    Search</a>
            </div>
        </form>
    </div>

    <div class="docs-main">
		<?php

		foreach ( $categories as $category ) {
			$name        = $category->name;
			$slug        = $category->slug;
			$count       = $category->count;
			$description = $category->description;
			$term_id     = $category->term_id;
			$term_link   = get_term_link( $category );
			$image_id    = get_term_meta( $term_id, 'category-image-id', true );

			$args = array(
				'post_type'      => 'docs',
				'posts_per_page' => - 1,
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

				?>
                <div class="docs-item">
                    <div class="item-head">
                        <div class="item-text">
                            <a href="<?php echo $slug; ?>">
								<?php
								if ( $image_id ) {
									echo wp_get_attachment_image( $image_id );
								}
								?>
                                <span class="category-name"><?php echo $name ?></span>
                                <span class="docs-count"><?php echo $count; ?></span>
                            </a>
                        </div>
                    </div>

                    <div class="docs-products">
						<?php
						while ( $query->have_posts() ) {
							$query->the_post();
							$post_id = get_the_ID();
							$title   = get_the_title();
							$link    = get_the_permalink();
							$image   = get_the_post_thumbnail_url( $post_id, 'full' );
							?>
                            <a href="<?php echo $link; ?>">
                                <img class="doc-icon" src="<?php echo SOFT_DOCS_ASSETS; ?>/images/doc-icon.png">
                                <span class="doc-title"><?php echo $title; ?></span>
                            </a>
						<?php } ?>
                    </div>
                    <div class="docs-butt">
                        <a href="<?php echo $slug; ?>">Explore More</a>
                    </div>
                </div>
			<?php }
		} ?>
    </div>
</section>
