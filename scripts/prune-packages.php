<?php

$wp_cli_packages = file(
	dirname( __DIR__ ) . '/repositories.txt',
	FILE_IGNORE_NEW_LINES
);

// Filter out lines for packages that are available on packagist.org

$wp_cli_only = array_filter(
	$wp_cli_packages,
	function ( $repo_url ) {
		$package_name = str_replace( 'https://github.com/', '', $repo_url );
		$packagist_res = json_decode(
			file_get_contents( "https://packagist.org/search.json?q={$package_name}" )
		);

		if ( ! $packagist_res ) {
			throw new Exception( "Invalid package search results for $package_name" );
		}

		// If no results, the package wasn't found on packagist!
		if ( ! $packagist_res->total ) {
			return true;
		}

		// Iterate over the results to ensure an exact match since search results return fuzzy matches.
		foreach ( $packagist_res->results as $p ) {
			if ( $p->name === $package_name ) {
				return false;
			}
		}

		// If we got this far, there were results but none that matched the specific package we were looking for.
		return true;
	}
);

// Output the filtered list of repositories
// which now only include packages that are on the wp-cli package index.
echo join( "\n", $wp_cli_only ) . "\n";
