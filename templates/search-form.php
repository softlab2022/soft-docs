<?php
$args = array(
	'taxonomy'   => 'docs_category',
	'hide_empty' => false,
);

$categories = get_categories( $args );

?>

<div class="softdocs-search-wrap">

    <div class="softdocs-search-label">
        <label for="search-keyword">What are you looking for?</label>
        <p>Search here to get answers to you questions.</p>
    </div>

    <form id="softdocs-search-form" class="softdocs-search-form">
        <input name="s" id="search-keyword" class="softdocs-search-field" autocomplete="off" type="text"
               placeholder="Search for topics or questions....">

        <select class="category-select">
            <option selected>All Categories</option>
			<?php

			if ( ! empty( $categories ) ) {
				foreach ( $categories as $category ) {
					echo '<option value="' . $category->slug . '">' . $category->name . '</option>';
				}
			}

			?>
        </select>

        <button class="softdocs-btn softdocs-search-submit">


            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <g>
                        <circle cx="11.7666" cy="11.7666" r="8.98856" stroke="#130F26" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.0183 18.4851L21.5423 22" stroke="#130F26" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </g>
                </g>
            </svg>


            <span>Search</span>
        </button>

    </form>

</div>