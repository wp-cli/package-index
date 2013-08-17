<?php

// generates satis.json from repositories.txt

define( 'JSON_PATH', './satis.json' );

function read_repos() {
	$urls = explode( "\n", file_get_contents( './repositories.txt' ) );

	$repos = array();

	foreach ( $urls as $url ) {
		$url = trim( $url );

		if ( "" === $url )
			continue;

		$repos[] = array( "type" => "vcs", "url" => $url );
	}

	return $repos;
}

file_put_contents( JSON_PATH, json_encode( array(
	"name" => "WP-CLI",
	"homepage" => "http://wp-cli.org/package-index/",
	"require-all" => true,
	"output-dir" => "web",
	"repositories" => read_repos(),
) ) );

printf( "Generated %s file.\n", JSON_PATH );
