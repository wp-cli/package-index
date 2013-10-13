


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>satis/views/jquery-2.0.0.js at master · composer/satis</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe118-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.36) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="4DAC1CE9:78F3:A68713E:5259E423" name="octolytics-dimension-request_id" /><meta content="145887" name="octolytics-actor-id" /><meta content="jmslbam" name="octolytics-actor-login" /><meta content="017fa2333e1573d6ccc687ce7d9430a2e69ea693ae7ceea05148edd1df74ba13" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="q+ZYOgfIXsjlmRL9L8dJLX24qaEmIpZKfWIukGtWkSQ=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-a5e031f5281a00e824c46bbb0ecbbc84605156ea.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-3fe403d0db22dd33cdbaedfd659caee3b1b22abd.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-5036c64d838328b79e082f548848e2898412e869.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-ebd9cc9a650951526861fa81910e3d79ef2481ee.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="0c945f270d68f7ef9b9cd7e4258fee15">

        <link data-pjax-transient rel='permalink' href='/composer/satis/blob/ee77b7e11df2fefec27742dea29113a9ccf9fcb4/views/jquery-2.0.0.js'>
  <meta property="og:title" content="satis"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/composer/satis"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="satis - Simple static Composer repository generator"/>

  <meta name="description" content="satis - Simple static Composer repository generator" />

  <meta content="837015" name="octolytics-dimension-user_id" /><meta content="composer" name="octolytics-dimension-user_login" /><meta content="3192821" name="octolytics-dimension-repository_id" /><meta content="composer/satis" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3192821" name="octolytics-dimension-repository_network_root_id" /><meta content="composer/satis" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/composer/satis/commits/master.atom" rel="alternate" title="Recent Commits to satis:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production macintosh vis-public  page-blob">
    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have unread notifications">
        <span class="mail-status unread"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="jmslbam"
      data-repo="composer/satis"
      data-branch="master"
      data-sha="da4cee2704137f2378297271088a740fdc02a5ff"
  >

    <input type="hidden" name="nwo" value="composer/satis" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/jmslbam" class="name">
        <img height="20" src="https://2.gravatar.com/avatar/2fa581b69fdbbecad075275cf79f064d?d=https%3A%2F%2Fidenticons.github.com%2Ff491f0cbcbd8ee752e8f3dff548d9b3c.png&amp;s=140" width="20" /> jmslbam
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings "
          title="Account settings ">
          <span class="octicon octicon-tools"></span>
        </a>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="composer/satis">This repository</span>
    </li>
    <li>
      <a href="/composer/satis/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="q+ZYOgfIXsjlmRL9L8dJLX24qaEmIpZKfWIukGtWkSQ=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="3192821" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/composer/satis/watchers">
        35
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/composer/satis/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/composer/satis/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/composer/satis/stargazers">309</a>
</div>

  </li>


        <li>
          <a href="/composer/satis/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/composer/satis/network" class="social-count">81</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/composer" class="url fn" itemprop="url" rel="author"><span itemprop="title">composer</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/composer/satis" class="js-current-repository js-repo-home-link">satis</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/composer/satis" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /composer/satis">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/composer/satis/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /composer/satis/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>19</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/composer/satis/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /composer/satis/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>5</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/composer/satis/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /composer/satis/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/composer/satis/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /composer/satis/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/composer/satis/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /composer/satis/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/composer/satis/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /composer/satis/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url "
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/composer/satis.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/composer/satis.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url open"
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:composer/satis.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:composer/satis.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/composer/satis" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/composer/satis" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="github-mac://openRepo/https://github.com/composer/satis" data-url="github-mac://openRepo/https://github.com/composer/satis" class="minibutton sidebar-button js-conduit-rewrite-url">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


              <a href="/composer/satis/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:ae4a038ba3e1d6292997a71a13ebd2df -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/composer/satis/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/composer/satis/blob/master/views/jquery-2.0.0.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/composer/satis" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">satis</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/composer/satis/tree/master/views" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">views</span></a></span><span class="separator"> / </span><strong class="final-path">jquery-2.0.0.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="views/jquery-2.0.0.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/composer/satis/contributors/master/views/jquery-2.0.0.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">executable file</span>
          <span>6 lines (6 sloc)</span>
        <span>83.095 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards js-conduit-mac-openfile-check"
               href="github-mac://openRepo/https://github.com/composer/satis?branch=master&amp;filepath=views%2Fjquery-2.0.0.js"
               data-url="github-mac://openRepo/https://github.com/composer/satis?branch=master&amp;filepath=views%2Fjquery-2.0.0.js"
               title="Open this file in GitHub for Mac">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped upwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/composer/satis/edit/master/views/jquery-2.0.0.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/composer/satis/raw/master/views/jquery-2.0.0.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/composer/satis/blame/master/views/jquery-2.0.0.js" class="button minibutton ">Blame</a>
          <a href="/composer/satis/commits/master/views/jquery-2.0.0.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped downwards"
             href="/composer/satis/delete/master/views/jquery-2.0.0.js"
             title="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>

            </td>
            <td class="blob-line-code">
                  <div class='line' id='LC1'>/*! jQuery v2.0.0 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license</div><div class='line' id='LC2'>//@ sourceMappingURL=jquery.min.map</div><div class='line' id='LC3'>*/</div><div class='line' id='LC4'>(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],f=&quot;2.0.0&quot;,p=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=f.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:(&lt;[\w\W]+&gt;)[^&gt;]*|#([\w-]*))$/,C=/^&lt;(\w+)\s*\/?&gt;(?:&lt;\/\1&gt;|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener(&quot;DOMContentLoaded&quot;,S,!1),e.removeEventListener(&quot;load&quot;,S,!1),x.ready()};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if(&quot;string&quot;==typeof e){if(r=&quot;&lt;&quot;===e.charAt(0)&amp;&amp;&quot;&gt;&quot;===e.charAt(e.length-1)&amp;&amp;e.length&gt;=3?[null,e,null]:T.exec(e),!r||!r[1]&amp;&amp;t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&amp;&amp;t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&amp;&amp;x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&amp;&amp;i.parentNode&amp;&amp;(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&amp;&amp;(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:&quot;&quot;,length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0&gt;e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0&gt;e?t:0);return this.pushStack(n&gt;=0&amp;&amp;t&gt;n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for(&quot;boolean&quot;==typeof s&amp;&amp;(l=s,s=arguments[1]||{},a=2),&quot;object&quot;==typeof s||x.isFunction(s)||(s={}),u===a&amp;&amp;(s=this,--a);u&gt;a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&amp;&amp;(l&amp;&amp;r&amp;&amp;(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&amp;&amp;x.isArray(n)?n:[]):o=n&amp;&amp;x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&amp;&amp;(s[t]=r));return s},x.extend({expando:&quot;jQuery&quot;+(f+Math.random()).replace(/\D/g,&quot;&quot;),noConflict:function(t){return e.$===x&amp;&amp;(e.$=u),t&amp;&amp;e.jQuery===x&amp;&amp;(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&amp;&amp;--x.readyWait&gt;0||(n.resolveWith(o,[x]),x.fn.trigger&amp;&amp;x(o).trigger(&quot;ready&quot;).off(&quot;ready&quot;)))},isFunction:function(e){return&quot;function&quot;===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&amp;&amp;e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&amp;&amp;isFinite(e)},type:function(e){return null==e?e+&quot;&quot;:&quot;object&quot;==typeof e||&quot;function&quot;==typeof e?l[m.call(e)]||&quot;object&quot;:typeof e},isPlainObject:function(e){if(&quot;object&quot;!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&amp;&amp;!y.call(e.constructor.prototype,&quot;isPrototypeOf&quot;))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||&quot;string&quot;!=typeof e)return null;&quot;boolean&quot;==typeof t&amp;&amp;(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&amp;&amp;[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&amp;&amp;x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||&quot;string&quot;!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,&quot;text/xml&quot;)}catch(r){t=undefined}return(!t||t.getElementsByTagName(&quot;parsererror&quot;).length)&amp;&amp;x.error(&quot;Invalid XML: &quot;+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&amp;&amp;(1===e.indexOf(&quot;use strict&quot;)?(t=o.createElement(&quot;script&quot;),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,&quot;ms-&quot;).replace(N,E)},nodeName:function(e,t){return e.nodeName&amp;&amp;e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o&gt;i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o&gt;i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?&quot;&quot;:v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&amp;&amp;(j(Object(e))?x.merge(n,&quot;string&quot;==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if(&quot;number&quot;==typeof n)for(;n&gt;i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s&gt;o;o++)r=!!t(e[o],o),n!==r&amp;&amp;i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o&gt;i;i++)r=t(e[i],i,n),null!=r&amp;&amp;(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&amp;&amp;(a[a.length]=r);return p.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return&quot;string&quot;==typeof t&amp;&amp;(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if(&quot;object&quot;===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&amp;&amp;(i=!0,x.isFunction(r)||(s=!0),l&amp;&amp;(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u&gt;a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),&quot;complete&quot;===o.readyState?setTimeout(x.ready):(o.addEventListener(&quot;DOMContentLoaded&quot;,S,!1),e.addEventListener(&quot;load&quot;,S,!1))),n.promise(t)},x.each(&quot;Boolean Number String Function Array Date RegExp Object Error&quot;.split(&quot; &quot;),function(e,t){l[&quot;[object &quot;+t+&quot;]&quot;]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&amp;&amp;t?!0:&quot;array&quot;===n||&quot;function&quot;!==n&amp;&amp;(0===t||&quot;number&quot;==typeof t&amp;&amp;t&gt;0&amp;&amp;t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,f,p,h,d,g,m,y=&quot;sizzle&quot;+-new Date,v=e.document,b={},w=0,T=0,C=ot(),k=ot(),N=ot(),E=!1,S=function(){return 0},j=typeof undefined,D=1&lt;&lt;31,A=[],L=A.pop,q=A.push,H=A.push,O=A.slice,F=A.indexOf||function(e){var t=0,n=this.length;for(;n&gt;t;t++)if(this[t]===e)return t;return-1},P=&quot;checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped&quot;,R=&quot;[\\x20\\t\\r\\n\\f]&quot;,M=&quot;(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+&quot;,W=M.replace(&quot;w&quot;,&quot;w#&quot;),$=&quot;\\[&quot;+R+&quot;*(&quot;+M+&quot;)&quot;+R+&quot;*(?:([*^$|!~]?=)&quot;+R+&quot;*(?:([&#39;\&quot;])((?:\\\\.|[^\\\\])*?)\\3|(&quot;+W+&quot;)|)|)&quot;+R+&quot;*\\]&quot;,B=&quot;:(&quot;+M+&quot;)(?:\\((([&#39;\&quot;])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|&quot;+$.replace(3,8)+&quot;)*)|.*)\\)|)&quot;,I=RegExp(&quot;^&quot;+R+&quot;+|((?:^|[^\\\\])(?:\\\\.)*)&quot;+R+&quot;+$&quot;,&quot;g&quot;),z=RegExp(&quot;^&quot;+R+&quot;*,&quot;+R+&quot;*&quot;),_=RegExp(&quot;^&quot;+R+&quot;*([&gt;+~]|&quot;+R+&quot;)&quot;+R+&quot;*&quot;),X=RegExp(R+&quot;*[+~]&quot;),U=RegExp(&quot;=&quot;+R+&quot;*([^\\]&#39;\&quot;]*)&quot;+R+&quot;*\\]&quot;,&quot;g&quot;),Y=RegExp(B),V=RegExp(&quot;^&quot;+W+&quot;$&quot;),G={ID:RegExp(&quot;^#(&quot;+M+&quot;)&quot;),CLASS:RegExp(&quot;^\\.(&quot;+M+&quot;)&quot;),TAG:RegExp(&quot;^(&quot;+M.replace(&quot;w&quot;,&quot;w*&quot;)+&quot;)&quot;),ATTR:RegExp(&quot;^&quot;+$),PSEUDO:RegExp(&quot;^&quot;+B),CHILD:RegExp(&quot;^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(&quot;+R+&quot;*(even|odd|(([+-]|)(\\d*)n|)&quot;+R+&quot;*(?:([+-]|)&quot;+R+&quot;*(\\d+)|))&quot;+R+&quot;*\\)|)&quot;,&quot;i&quot;),&quot;boolean&quot;:RegExp(&quot;^(?:&quot;+P+&quot;)$&quot;,&quot;i&quot;),needsContext:RegExp(&quot;^&quot;+R+&quot;*[&gt;+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(&quot;+R+&quot;*((?:-\\d)?\\d*)&quot;+R+&quot;*\\)|)(?=[^-]|$)&quot;,&quot;i&quot;)},J=/^[^{]+\{\s*\[native \w/,Q=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,et=/&#39;|\\/g,tt=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,nt=function(e,t){var n=&quot;0x&quot;+t-65536;return n!==n?t:0&gt;n?String.fromCharCode(n+65536):String.fromCharCode(55296|n&gt;&gt;10,56320|1023&amp;n)};try{H.apply(A=O.call(v.childNodes),v.childNodes),A[v.childNodes.length].nodeType}catch(rt){H={apply:A.length?function(e,t){q.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function it(e){return J.test(e+&quot;&quot;)}function ot(){var e,t=[];return e=function(n,i){return t.push(n+=&quot; &quot;)&gt;r.cacheLength&amp;&amp;delete e[t.shift()],e[n]=i}}function st(e){return e[y]=!0,e}function at(e){var t=c.createElement(&quot;div&quot;);try{return!!e(t)}catch(n){return!1}finally{t.parentNode&amp;&amp;t.parentNode.removeChild(t),t=null}}function ut(e,t,n,r){var i,o,s,a,u,f,d,g,x,w;if((t?t.ownerDocument||t:v)!==c&amp;&amp;l(t),t=t||c,n=n||[],!e||&quot;string&quot;!=typeof e)return n;if(1!==(a=t.nodeType)&amp;&amp;9!==a)return[];if(p&amp;&amp;!r){if(i=Q.exec(e))if(s=i[1]){if(9===a){if(o=t.getElementById(s),!o||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&amp;&amp;(o=t.ownerDocument.getElementById(s))&amp;&amp;m(t,o)&amp;&amp;o.id===s)return n.push(o),n}else{if(i[2])return H.apply(n,t.getElementsByTagName(e)),n;if((s=i[3])&amp;&amp;b.getElementsByClassName&amp;&amp;t.getElementsByClassName)return H.apply(n,t.getElementsByClassName(s)),n}if(b.qsa&amp;&amp;(!h||!h.test(e))){if(g=d=y,x=t,w=9===a&amp;&amp;e,1===a&amp;&amp;&quot;object&quot;!==t.nodeName.toLowerCase()){f=gt(e),(d=t.getAttribute(&quot;id&quot;))?g=d.replace(et,&quot;\\$&amp;&quot;):t.setAttribute(&quot;id&quot;,g),g=&quot;[id=&#39;&quot;+g+&quot;&#39;] &quot;,u=f.length;while(u--)f[u]=g+mt(f[u]);x=X.test(e)&amp;&amp;t.parentNode||t,w=f.join(&quot;,&quot;)}if(w)try{return H.apply(n,x.querySelectorAll(w)),n}catch(T){}finally{d||t.removeAttribute(&quot;id&quot;)}}}return kt(e.replace(I,&quot;$1&quot;),t,n,r)}o=ut.isXML=function(e){var t=e&amp;&amp;(e.ownerDocument||e).documentElement;return t?&quot;HTML&quot;!==t.nodeName:!1},l=ut.setDocument=function(e){var t=e?e.ownerDocument||e:v;return t!==c&amp;&amp;9===t.nodeType&amp;&amp;t.documentElement?(c=t,f=t.documentElement,p=!o(t),b.getElementsByTagName=at(function(e){return e.appendChild(t.createComment(&quot;&quot;)),!e.getElementsByTagName(&quot;*&quot;).length}),b.attributes=at(function(e){return e.className=&quot;i&quot;,!e.getAttribute(&quot;className&quot;)}),b.getElementsByClassName=at(function(e){return e.innerHTML=&quot;&lt;div class=&#39;a&#39;&gt;&lt;/div&gt;&lt;div class=&#39;a i&#39;&gt;&lt;/div&gt;&quot;,e.firstChild.className=&quot;i&quot;,2===e.getElementsByClassName(&quot;i&quot;).length}),b.sortDetached=at(function(e){return 1&amp;e.compareDocumentPosition(c.createElement(&quot;div&quot;))}),b.getById=at(function(e){return f.appendChild(e).id=y,!t.getElementsByName||!t.getElementsByName(y).length}),b.getById?(r.find.ID=function(e,t){if(typeof t.getElementById!==j&amp;&amp;p){var n=t.getElementById(e);return n&amp;&amp;n.parentNode?[n]:[]}},r.filter.ID=function(e){var t=e.replace(tt,nt);return function(e){return e.getAttribute(&quot;id&quot;)===t}}):(r.find.ID=function(e,t){if(typeof t.getElementById!==j&amp;&amp;p){var n=t.getElementById(e);return n?n.id===e||typeof n.getAttributeNode!==j&amp;&amp;n.getAttributeNode(&quot;id&quot;).value===e?[n]:undefined:[]}},r.filter.ID=function(e){var t=e.replace(tt,nt);return function(e){var n=typeof e.getAttributeNode!==j&amp;&amp;e.getAttributeNode(&quot;id&quot;);return n&amp;&amp;n.value===t}}),r.find.TAG=b.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if(&quot;*&quot;===e){while(n=o[i++])1===n.nodeType&amp;&amp;r.push(n);return r}return o},r.find.CLASS=b.getElementsByClassName&amp;&amp;function(e,t){return typeof t.getElementsByClassName!==j&amp;&amp;p?t.getElementsByClassName(e):undefined},d=[],h=[],(b.qsa=it(t.querySelectorAll))&amp;&amp;(at(function(e){e.innerHTML=&quot;&lt;select&gt;&lt;option selected=&#39;&#39;&gt;&lt;/option&gt;&lt;/select&gt;&quot;,e.querySelectorAll(&quot;[selected]&quot;).length||h.push(&quot;\\[&quot;+R+&quot;*(?:value|&quot;+P+&quot;)&quot;),e.querySelectorAll(&quot;:checked&quot;).length||h.push(&quot;:checked&quot;)}),at(function(e){var t=c.createElement(&quot;input&quot;);t.setAttribute(&quot;type&quot;,&quot;hidden&quot;),e.appendChild(t).setAttribute(&quot;t&quot;,&quot;&quot;),e.querySelectorAll(&quot;[t^=&#39;&#39;]&quot;).length&amp;&amp;h.push(&quot;[*^$]=&quot;+R+&quot;*(?:&#39;&#39;|\&quot;\&quot;)&quot;),e.querySelectorAll(&quot;:enabled&quot;).length||h.push(&quot;:enabled&quot;,&quot;:disabled&quot;),e.querySelectorAll(&quot;*,:x&quot;),h.push(&quot;,.*:&quot;)})),(b.matchesSelector=it(g=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&amp;&amp;at(function(e){b.disconnectedMatch=g.call(e,&quot;div&quot;),g.call(e,&quot;[s!=&#39;&#39;]:x&quot;),d.push(&quot;!=&quot;,B)}),h=h.length&amp;&amp;RegExp(h.join(&quot;|&quot;)),d=d.length&amp;&amp;RegExp(d.join(&quot;|&quot;)),m=it(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&amp;&amp;t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&amp;&amp;16&amp;e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,n){if(e===n)return E=!0,0;var r=n.compareDocumentPosition&amp;&amp;e.compareDocumentPosition&amp;&amp;e.compareDocumentPosition(n);return r?1&amp;r||!b.sortDetached&amp;&amp;n.compareDocumentPosition(e)===r?e===t||m(v,e)?-1:n===t||m(v,n)?1:u?F.call(u,e)-F.call(u,n):0:4&amp;r?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],l=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:u?F.call(u,e)-F.call(u,n):0;if(o===s)return lt(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)l.unshift(r);while(a[i]===l[i])i++;return i?lt(a[i],l[i]):a[i]===v?-1:l[i]===v?1:0},c):c},ut.matches=function(e,t){return ut(e,null,null,t)},ut.matchesSelector=function(e,t){if((e.ownerDocument||e)!==c&amp;&amp;l(e),t=t.replace(U,&quot;=&#39;$1&#39;]&quot;),!(!b.matchesSelector||!p||d&amp;&amp;d.test(t)||h&amp;&amp;h.test(t)))try{var n=g.call(e,t);if(n||b.disconnectedMatch||e.document&amp;&amp;11!==e.document.nodeType)return n}catch(r){}return ut(t,c,null,[e]).length&gt;0},ut.contains=function(e,t){return(e.ownerDocument||e)!==c&amp;&amp;l(e),m(e,t)},ut.attr=function(e,t){(e.ownerDocument||e)!==c&amp;&amp;l(e);var n=r.attrHandle[t.toLowerCase()],i=n&amp;&amp;n(e,t,!p);return i===undefined?b.attributes||!p?e.getAttribute(t):(i=e.getAttributeNode(t))&amp;&amp;i.specified?i.value:null:i},ut.error=function(e){throw Error(&quot;Syntax error, unrecognized expression: &quot;+e)},ut.uniqueSort=function(e){var t,n=[],r=0,i=0;if(E=!b.detectDuplicates,u=!b.sortStable&amp;&amp;e.slice(0),e.sort(S),E){while(t=e[i++])t===e[i]&amp;&amp;(r=n.push(i));while(r--)e.splice(n[r],1)}return e};function lt(e,t){var n=t&amp;&amp;e,r=n&amp;&amp;(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ct(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&amp;&amp;r.specified?r.value:e[t]===!0?t.toLowerCase():null}function ft(e,t,n){var r;return n?undefined:r=e.getAttribute(t,&quot;type&quot;===t.toLowerCase()?1:2)}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return&quot;input&quot;===n&amp;&amp;t.type===e}}function ht(e){return function(t){var n=t.nodeName.toLowerCase();return(&quot;input&quot;===n||&quot;button&quot;===n)&amp;&amp;t.type===e}}function dt(e){return st(function(t){return t=+t,st(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&amp;&amp;(n[i]=!(r[i]=n[i]))})})}i=ut.getText=function(e){var t,n=&quot;&quot;,r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if(&quot;string&quot;==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r];r++)n+=i(t);return n},r=ut.selectors={cacheLength:50,createPseudo:st,match:G,attrHandle:{},find:{},relative:{&quot;&gt;&quot;:{dir:&quot;parentNode&quot;,first:!0},&quot; &quot;:{dir:&quot;parentNode&quot;},&quot;+&quot;:{dir:&quot;previousSibling&quot;,first:!0},&quot;~&quot;:{dir:&quot;previousSibling&quot;}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(tt,nt),e[3]=(e[4]||e[5]||&quot;&quot;).replace(tt,nt),&quot;~=&quot;===e[2]&amp;&amp;(e[3]=&quot; &quot;+e[3]+&quot; &quot;),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),&quot;nth&quot;===e[1].slice(0,3)?(e[3]||ut.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*(&quot;even&quot;===e[3]||&quot;odd&quot;===e[3])),e[5]=+(e[7]+e[8]||&quot;odd&quot;===e[3])):e[3]&amp;&amp;ut.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&amp;&amp;e[2];return G.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&amp;&amp;Y.test(n)&amp;&amp;(t=gt(n,!0))&amp;&amp;(t=n.indexOf(&quot;)&quot;,n.length-t)-n.length)&amp;&amp;(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(tt,nt).toLowerCase();return&quot;*&quot;===e?function(){return!0}:function(e){return e.nodeName&amp;&amp;e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+&quot; &quot;];return t||(t=RegExp(&quot;(^|&quot;+R+&quot;)&quot;+e+&quot;(&quot;+R+&quot;|$)&quot;))&amp;&amp;C(e,function(e){return t.test(&quot;string&quot;==typeof e.className&amp;&amp;e.className||typeof e.getAttribute!==j&amp;&amp;e.getAttribute(&quot;class&quot;)||&quot;&quot;)})},ATTR:function(e,t,n){return function(r){var i=ut.attr(r,e);return null==i?&quot;!=&quot;===t:t?(i+=&quot;&quot;,&quot;=&quot;===t?i===n:&quot;!=&quot;===t?i!==n:&quot;^=&quot;===t?n&amp;&amp;0===i.indexOf(n):&quot;*=&quot;===t?n&amp;&amp;i.indexOf(n)&gt;-1:&quot;$=&quot;===t?n&amp;&amp;i.slice(-n.length)===n:&quot;~=&quot;===t?(&quot; &quot;+i+&quot; &quot;).indexOf(n)&gt;-1:&quot;|=&quot;===t?i===n||i.slice(0,n.length+1)===n+&quot;-&quot;:!1):!0}},CHILD:function(e,t,n,r,i){var o=&quot;nth&quot;!==e.slice(0,3),s=&quot;last&quot;!==e.slice(-4),a=&quot;of-type&quot;===t;return 1===r&amp;&amp;0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,h,d,g=o!==s?&quot;nextSibling&quot;:&quot;previousSibling&quot;,m=t.parentNode,v=a&amp;&amp;t.nodeName.toLowerCase(),x=!u&amp;&amp;!a;if(m){if(o){while(g){f=t;while(f=f[g])if(a?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;d=g=&quot;only&quot;===e&amp;&amp;!d&amp;&amp;&quot;nextSibling&quot;}return!0}if(d=[s?m.firstChild:m.lastChild],s&amp;&amp;x){c=m[y]||(m[y]={}),l=c[e]||[],h=l[0]===w&amp;&amp;l[1],p=l[0]===w&amp;&amp;l[2],f=h&amp;&amp;m.childNodes[h];while(f=++h&amp;&amp;f&amp;&amp;f[g]||(p=h=0)||d.pop())if(1===f.nodeType&amp;&amp;++p&amp;&amp;f===t){c[e]=[w,h,p];break}}else if(x&amp;&amp;(l=(t[y]||(t[y]={}))[e])&amp;&amp;l[0]===w)p=l[1];else while(f=++h&amp;&amp;f&amp;&amp;f[g]||(p=h=0)||d.pop())if((a?f.nodeName.toLowerCase()===v:1===f.nodeType)&amp;&amp;++p&amp;&amp;(x&amp;&amp;((f[y]||(f[y]={}))[e]=[w,p]),f===t))break;return p-=i,p===r||0===p%r&amp;&amp;p/r&gt;=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ut.error(&quot;unsupported pseudo: &quot;+e);return i[y]?i(t):i.length&gt;1?(n=[e,e,&quot;&quot;,t],r.setFilters.hasOwnProperty(e.toLowerCase())?st(function(e,n){var r,o=i(e,t),s=o.length;while(s--)r=F.call(e,o[s]),e[r]=!(n[r]=o[s])}):function(e){return i(e,0,n)}):i}},pseudos:{not:st(function(e){var t=[],n=[],r=s(e.replace(I,&quot;$1&quot;));return r[y]?st(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&amp;&amp;(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:st(function(e){return function(t){return ut(e,t).length&gt;0}}),contains:st(function(e){return function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)&gt;-1}}),lang:st(function(e){return V.test(e||&quot;&quot;)||ut.error(&quot;unsupported lang: &quot;+e),e=e.replace(tt,nt).toLowerCase(),function(t){var n;do if(n=p?t.lang:t.getAttribute(&quot;xml:lang&quot;)||t.getAttribute(&quot;lang&quot;))return n=n.toLowerCase(),n===e||0===n.indexOf(e+&quot;-&quot;);while((t=t.parentNode)&amp;&amp;1===t.nodeType);return!1}}),target:function(t){var n=e.location&amp;&amp;e.location.hash;return n&amp;&amp;n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===c.activeElement&amp;&amp;(!c.hasFocus||c.hasFocus())&amp;&amp;!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return&quot;input&quot;===t&amp;&amp;!!e.checked||&quot;option&quot;===t&amp;&amp;!!e.selected},selected:function(e){return e.parentNode&amp;&amp;e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName&gt;&quot;@&quot;||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Z.test(e.nodeName)},input:function(e){return K.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return&quot;input&quot;===t&amp;&amp;&quot;button&quot;===e.type||&quot;button&quot;===t},text:function(e){var t;return&quot;input&quot;===e.nodeName.toLowerCase()&amp;&amp;&quot;text&quot;===e.type&amp;&amp;(null==(t=e.getAttribute(&quot;type&quot;))||t.toLowerCase()===e.type)},first:dt(function(){return[0]}),last:dt(function(e,t){return[t-1]}),eq:dt(function(e,t,n){return[0&gt;n?n+t:n]}),even:dt(function(e,t){var n=0;for(;t&gt;n;n+=2)e.push(n);return e}),odd:dt(function(e,t){var n=1;for(;t&gt;n;n+=2)e.push(n);return e}),lt:dt(function(e,t,n){var r=0&gt;n?n+t:n;for(;--r&gt;=0;)e.push(r);return e}),gt:dt(function(e,t,n){var r=0&gt;n?n+t:n;for(;t&gt;++r;)e.push(r);return e})}};for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=ht(t);function gt(e,t){var n,i,o,s,a,u,l,c=k[e+&quot; &quot;];if(c)return t?0:c.slice(0);a=e,u=[],l=r.preFilter;while(a){(!n||(i=z.exec(a)))&amp;&amp;(i&amp;&amp;(a=a.slice(i[0].length)||a),u.push(o=[])),n=!1,(i=_.exec(a))&amp;&amp;(n=i.shift(),o.push({value:n,type:i[0].replace(I,&quot; &quot;)}),a=a.slice(n.length));for(s in r.filter)!(i=G[s].exec(a))||l[s]&amp;&amp;!(i=l[s](i))||(n=i.shift(),o.push({value:n,type:s,matches:i}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ut.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r=&quot;&quot;;for(;n&gt;t;t++)r+=e[t].value;return r}function yt(e,t,r){var i=t.dir,o=r&amp;&amp;&quot;parentNode&quot;===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,r,a){var u,l,c,f=w+&quot; &quot;+s;if(a){while(t=t[i])if((1===t.nodeType||o)&amp;&amp;e(t,r,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[y]||(t[y]={}),(l=c[i])&amp;&amp;l[0]===f){if((u=l[1])===!0||u===n)return u===!0}else if(l=c[i]=[f],l[1]=e(t,r,a)||n,l[1]===!0)return!0}}function vt(e){return e.length&gt;1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u&gt;a;a++)(o=e[a])&amp;&amp;(!n||n(o,r,i))&amp;&amp;(s.push(o),l&amp;&amp;t.push(a));return s}function bt(e,t,n,r,i,o){return r&amp;&amp;!r[y]&amp;&amp;(r=bt(r)),i&amp;&amp;!i[y]&amp;&amp;(i=bt(i,o)),st(function(o,s,a,u){var l,c,f,p=[],h=[],d=s.length,g=o||Ct(t||&quot;*&quot;,a.nodeType?[a]:a,[]),m=!e||!o&amp;&amp;t?g:xt(g,p,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&amp;&amp;n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(f=l[c])&amp;&amp;(y[h[c]]=!(m[h[c]]=f))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(f=y[c])&amp;&amp;l.push(m[c]=f);i(null,y=[],l,u)}c=y.length;while(c--)(f=y[c])&amp;&amp;(l=i?F.call(o,f):p[c])&gt;-1&amp;&amp;(o[l]=!(s[l]=f))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):H.apply(s,y)})}function wt(e){var t,n,i,o=e.length,s=r.relative[e[0].type],u=s||r.relative[&quot; &quot;],l=s?1:0,c=yt(function(e){return e===t},u,!0),f=yt(function(e){return F.call(t,e)&gt;-1},u,!0),p=[function(e,n,r){return!s&amp;&amp;(r||n!==a)||((t=n).nodeType?c(e,n,r):f(e,n,r))}];for(;o&gt;l;l++)if(n=r.relative[e[l].type])p=[yt(vt(p),n)];else{if(n=r.filter[e[l].type].apply(null,e[l].matches),n[y]){for(i=++l;o&gt;i;i++)if(r.relative[e[i].type])break;return bt(l&gt;1&amp;&amp;vt(p),l&gt;1&amp;&amp;mt(e.slice(0,l-1)).replace(I,&quot;$1&quot;),n,i&gt;l&amp;&amp;wt(e.slice(l,i)),o&gt;i&amp;&amp;wt(e=e.slice(i)),o&gt;i&amp;&amp;mt(e))}p.push(n)}return vt(p)}function Tt(e,t){var i=0,o=t.length&gt;0,s=e.length&gt;0,u=function(u,l,f,p,h){var d,g,m,y=[],v=0,x=&quot;0&quot;,b=u&amp;&amp;[],T=null!=h,C=a,k=u||s&amp;&amp;r.find.TAG(&quot;*&quot;,h&amp;&amp;l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&amp;&amp;(a=l!==c&amp;&amp;l,n=i);null!=(d=k[x]);x++){if(s&amp;&amp;d){g=0;while(m=e[g++])if(m(d,l,f)){p.push(d);break}T&amp;&amp;(w=N,n=++i)}o&amp;&amp;((d=!m&amp;&amp;d)&amp;&amp;v--,u&amp;&amp;b.push(d))}if(v+=x,o&amp;&amp;x!==v){g=0;while(m=t[g++])m(b,y,l,f);if(u){if(v&gt;0)while(x--)b[x]||y[x]||(y[x]=L.call(p));y=xt(y)}H.apply(p,y),T&amp;&amp;!u&amp;&amp;y.length&gt;0&amp;&amp;v+t.length&gt;1&amp;&amp;ut.uniqueSort(p)}return T&amp;&amp;(w=N,a=C),b};return o?st(u):u}s=ut.compile=function(e,t){var n,r=[],i=[],o=N[e+&quot; &quot;];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[y]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i&gt;r;r++)ut(e,t[r],n);return n}function kt(e,t,n,i){var o,a,u,l,c,f=gt(e);if(!i&amp;&amp;1===f.length){if(a=f[0]=f[0].slice(0),a.length&gt;2&amp;&amp;&quot;ID&quot;===(u=a[0]).type&amp;&amp;9===t.nodeType&amp;&amp;p&amp;&amp;r.relative[a[1].type]){if(t=(r.find.ID(u.matches[0].replace(tt,nt),t)||[])[0],!t)return n;e=e.slice(a.shift().value.length)}o=G.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],r.relative[l=u.type])break;if((c=r.find[l])&amp;&amp;(i=c(u.matches[0].replace(tt,nt),X.test(a[0].type)&amp;&amp;t.parentNode||t))){if(a.splice(o,1),e=i.length&amp;&amp;mt(a),!e)return H.apply(n,i),n;break}}}return s(e,f)(i,t,!p,n,X.test(e)),n}r.pseudos.nth=r.pseudos.eq;function Nt(){}Nt.prototype=r.filters=r.pseudos,r.setFilters=new Nt,b.sortStable=y.split(&quot;&quot;).sort(S).join(&quot;&quot;)===y,l(),[0,0].sort(S),b.detectDuplicates=E,at(function(e){if(e.innerHTML=&quot;&lt;a href=&#39;#&#39;&gt;&lt;/a&gt;&quot;,&quot;#&quot;!==e.firstChild.getAttribute(&quot;href&quot;)){var t=&quot;type|href|height|width&quot;.split(&quot;|&quot;),n=t.length;while(n--)r.attrHandle[t[n]]=ft}}),at(function(e){if(null!=e.getAttribute(&quot;disabled&quot;)){var t=P.split(&quot;|&quot;),n=t.length;while(n--)r.attrHandle[t[n]]=ct}}),x.find=ut,x.expr=ut.selectors,x.expr[&quot;:&quot;]=x.expr.pseudos,x.unique=ut.uniqueSort,x.text=ut.getText,x.isXMLDoc=ut.isXML,x.contains=ut.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e=&quot;string&quot;==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&amp;&amp;[],l=function(f){for(t=e.memory&amp;&amp;f,n=!0,s=i||0,i=0,o=a.length,r=!0;a&amp;&amp;o&gt;s;s++)if(a[s].apply(f[0],f[1])===!1&amp;&amp;e.stopOnFalse){t=!1;break}r=!1,a&amp;&amp;(u?u.length&amp;&amp;l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);&quot;function&quot;===r?e.unique&amp;&amp;c.has(n)||a.push(n):n&amp;&amp;n.length&amp;&amp;&quot;string&quot;!==r&amp;&amp;s(n)})})(arguments),r?o=a.length:t&amp;&amp;(i=n,l(t))}return this},remove:function(){return a&amp;&amp;x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))&gt;-1)a.splice(n,1),r&amp;&amp;(o&gt;=n&amp;&amp;o--,s&gt;=n&amp;&amp;s--)}),this},has:function(e){return e?x.inArray(e,a)&gt;-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!a||n&amp;&amp;!u||(r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[[&quot;resolve&quot;,&quot;done&quot;,x.Callbacks(&quot;once memory&quot;),&quot;resolved&quot;],[&quot;reject&quot;,&quot;fail&quot;,x.Callbacks(&quot;once memory&quot;),&quot;rejected&quot;],[&quot;notify&quot;,&quot;progress&quot;,x.Callbacks(&quot;memory&quot;)]],n=&quot;pending&quot;,r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&amp;&amp;e[t];i[o[1]](function(){var e=a&amp;&amp;a.apply(this,arguments);e&amp;&amp;x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+&quot;With&quot;](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&amp;&amp;s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+&quot;With&quot;](this===i?r:this,arguments),this},i[o[0]+&quot;With&quot;]=s.fireWith}),r.promise(i),e&amp;&amp;e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&amp;&amp;x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length&gt;1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r&gt;1)for(a=Array(r),u=Array(r),l=Array(r);r&gt;t;t++)n[t]&amp;&amp;x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement(&quot;input&quot;),r=o.createDocumentFragment(),i=o.createElement(&quot;div&quot;),s=o.createElement(&quot;select&quot;),a=s.appendChild(o.createElement(&quot;option&quot;));return n.type?(n.type=&quot;checkbox&quot;,t.checkOn=&quot;&quot;!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement(&quot;input&quot;),n.value=&quot;t&quot;,n.type=&quot;radio&quot;,t.radioValue=&quot;t&quot;===n.value,n.setAttribute(&quot;checked&quot;,&quot;t&quot;),n.setAttribute(&quot;name&quot;,&quot;t&quot;),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles=&quot;onfocusin&quot;in e,i.style.backgroundClip=&quot;content-box&quot;,i.cloneNode(!0).style.backgroundClip=&quot;&quot;,t.clearCloneStyle=&quot;content-box&quot;===i.style.backgroundClip,x(function(){var n,r,s=&quot;padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box&quot;,a=o.getElementsByTagName(&quot;body&quot;)[0];a&amp;&amp;(n=o.createElement(&quot;div&quot;),n.style.cssText=&quot;border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px&quot;,a.appendChild(n).appendChild(i),i.innerHTML=&quot;&quot;,i.style.cssText=&quot;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%&quot;,x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&amp;&amp;(t.pixelPosition=&quot;1%&quot;!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable=&quot;4px&quot;===(e.getComputedStyle(i,null)||{width:&quot;4px&quot;}).width,r=i.appendChild(o.createElement(&quot;div&quot;)),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width=&quot;0&quot;,i.style.width=&quot;1px&quot;,t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if(&quot;string&quot;==typeof t)o[t]=n;else if(x.isEmptyObject(o))this.cache[i]=t;else for(r in t)o[r]=t[r]},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){return t===undefined||t&amp;&amp;&quot;string&quot;==typeof t&amp;&amp;n===undefined?this.get(e,t):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i=this.key(e),o=this.cache[i];if(t===undefined)this.cache[i]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):t in o?r=[t]:(r=x.camelCase(t),r=r in o?[r]:r.match(w)||[]),n=r.length;while(n--)delete o[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){delete this.cache[this.key(e)]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&amp;&amp;(s=L.get(i),1===i.nodeType&amp;&amp;!q.get(i,&quot;hasDataAttrs&quot;))){for(n=i.attributes;n.length&gt;o;o++)r=n[o].name,0===r.indexOf(&quot;data-&quot;)&amp;&amp;(r=x.camelCase(r.substring(5)),P(i,r,s[r]));q.set(i,&quot;hasDataAttrs&quot;,!0)}return s}return&quot;object&quot;==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&amp;&amp;t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf(&quot;-&quot;)&amp;&amp;n!==undefined&amp;&amp;L.set(this,e,t)})},null,t,arguments.length&gt;1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&amp;&amp;1===e.nodeType)if(r=&quot;data-&quot;+t.replace(O,&quot;-$1&quot;).toLowerCase(),n=e.getAttribute(r),&quot;string&quot;==typeof n){try{n=&quot;true&quot;===n?!0:&quot;false&quot;===n?!1:&quot;null&quot;===n?null:+n+&quot;&quot;===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||&quot;fx&quot;)+&quot;queue&quot;,r=q.get(e,t),n&amp;&amp;(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||&quot;fx&quot;;var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)};&quot;inprogress&quot;===i&amp;&amp;(i=n.shift(),r--),o.cur=i,i&amp;&amp;(&quot;fx&quot;===t&amp;&amp;n.unshift(&quot;inprogress&quot;),delete o.stop,i.call(e,s,o)),!r&amp;&amp;o&amp;&amp;o.empty.fire()},_queueHooks:function(e,t){var n=t+&quot;queueHooks&quot;;return q.get(e,n)||q.access(e,n,{empty:x.Callbacks(&quot;once memory&quot;).add(function(){q.remove(e,[t+&quot;queue&quot;,n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return&quot;string&quot;!=typeof e&amp;&amp;(t=e,e=&quot;fx&quot;,n--),n&gt;arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);</div><div class='line' id='LC5'>x._queueHooks(this,e),&quot;fx&quot;===e&amp;&amp;&quot;inprogress&quot;!==n[0]&amp;&amp;x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||&quot;fx&quot;,this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||&quot;fx&quot;,[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};&quot;string&quot;!=typeof e&amp;&amp;(t=e,e=undefined),e=e||&quot;fx&quot;;while(s--)n=q.get(o[s],e+&quot;queueHooks&quot;),n&amp;&amp;n.empty&amp;&amp;(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length&gt;1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length&gt;1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=&quot;string&quot;==typeof e&amp;&amp;e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||&quot;&quot;).match(w)||[];a&gt;s;s++)if(n=this[s],r=1===n.nodeType&amp;&amp;(n.className?(&quot; &quot;+n.className+&quot; &quot;).replace(W,&quot; &quot;):&quot; &quot;)){o=0;while(i=t[o++])0&gt;r.indexOf(&quot; &quot;+i+&quot; &quot;)&amp;&amp;(r+=i+&quot; &quot;);n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||&quot;string&quot;==typeof e&amp;&amp;e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||&quot;&quot;).match(w)||[];a&gt;s;s++)if(n=this[s],r=1===n.nodeType&amp;&amp;(n.className?(&quot; &quot;+n.className+&quot; &quot;).replace(W,&quot; &quot;):&quot;&quot;)){o=0;while(i=t[o++])while(r.indexOf(&quot; &quot;+i+&quot; &quot;)&gt;=0)r=r.replace(&quot; &quot;+i+&quot; &quot;,&quot; &quot;);n.className=e?x.trim(r):&quot;&quot;}return this},toggleClass:function(e,t){var n=typeof e,i=&quot;boolean&quot;==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(&quot;string&quot;===n){var o,s=0,a=x(this),u=t,l=e.match(w)||[];while(o=l[s++])u=i?u:!a.hasClass(o),a[u?&quot;addClass&quot;:&quot;removeClass&quot;](o)}else(n===r||&quot;boolean&quot;===n)&amp;&amp;(this.className&amp;&amp;q.set(this,&quot;__className__&quot;,this.className),this.className=this.className||e===!1?&quot;&quot;:q.get(this,&quot;__className__&quot;)||&quot;&quot;)})},hasClass:function(e){var t=&quot; &quot;+e+&quot; &quot;,n=0,r=this.length;for(;r&gt;n;n++)if(1===this[n].nodeType&amp;&amp;(&quot; &quot;+this[n].className+&quot; &quot;).replace(W,&quot; &quot;).indexOf(t)&gt;=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i,o=x(this);1===this.nodeType&amp;&amp;(i=r?e.call(this,n,o.val()):e,null==i?i=&quot;&quot;:&quot;number&quot;==typeof i?i+=&quot;&quot;:x.isArray(i)&amp;&amp;(i=x.map(i,function(e){return null==e?&quot;&quot;:e+&quot;&quot;})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&amp;&amp;&quot;set&quot;in t&amp;&amp;t.set(this,i,&quot;value&quot;)!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&amp;&amp;&quot;get&quot;in t&amp;&amp;(n=t.get(i,&quot;value&quot;))!==undefined?n:(n=i.value,&quot;string&quot;==typeof n?n.replace($,&quot;&quot;):null==n?&quot;&quot;:n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o=&quot;select-one&quot;===e.type||0&gt;i,s=o?null:[],a=o?i+1:r.length,u=0&gt;i?a:o?i:0;for(;a&gt;u;u++)if(n=r[u],!(!n.selected&amp;&amp;u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute(&quot;disabled&quot;))||n.parentNode.disabled&amp;&amp;x.nodeName(n.parentNode,&quot;optgroup&quot;))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)&gt;=0)&amp;&amp;(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&amp;&amp;3!==s&amp;&amp;8!==s&amp;&amp;2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&amp;&amp;x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.boolean.test(t)?M:R)),n===undefined?i&amp;&amp;&quot;get&quot;in i&amp;&amp;null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&amp;&amp;&quot;set&quot;in i&amp;&amp;(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+&quot;&quot;),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&amp;&amp;t.match(w);if(o&amp;&amp;1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.boolean.test(n)&amp;&amp;(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&amp;&amp;&quot;radio&quot;===t&amp;&amp;x.nodeName(e,&quot;input&quot;)){var n=e.value;return e.setAttribute(&quot;type&quot;,t),n&amp;&amp;(e.value=n),t}}}},propFix:{&quot;for&quot;:&quot;htmlFor&quot;,&quot;class&quot;:&quot;className&quot;},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&amp;&amp;3!==s&amp;&amp;8!==s&amp;&amp;2!==s)return o=1!==s||!x.isXMLDoc(e),o&amp;&amp;(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&amp;&amp;&quot;set&quot;in i&amp;&amp;(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&amp;&amp;&quot;get&quot;in i&amp;&amp;null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute(&quot;tabindex&quot;)||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.boolean.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&amp;&amp;t.parentNode&amp;&amp;t.parentNode.selectedIndex,null}}),x.each([&quot;tabIndex&quot;,&quot;readOnly&quot;,&quot;maxLength&quot;,&quot;cellSpacing&quot;,&quot;cellPadding&quot;,&quot;rowSpan&quot;,&quot;colSpan&quot;,&quot;useMap&quot;,&quot;frameBorder&quot;,&quot;contentEditable&quot;],function(){x.propFix[this.toLowerCase()]=this}),x.each([&quot;radio&quot;,&quot;checkbox&quot;],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)&gt;=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute(&quot;value&quot;)?&quot;on&quot;:e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,f,p,h,d,g,m,y=q.get(e);if(y){n.handler&amp;&amp;(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&amp;&amp;x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||&quot;&quot;).match(w)||[&quot;&quot;],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||&quot;&quot;).split(&quot;.&quot;).sort(),d&amp;&amp;(p=x.event.special[d]||{},d=(o?p.delegateType:p.bindType)||d,p=x.event.special[d]||{},f=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&amp;&amp;x.expr.match.needsContext.test(o),namespace:g.join(&quot;.&quot;)},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,p.setup&amp;&amp;p.setup.call(e,i,g,a)!==!1||e.addEventListener&amp;&amp;e.addEventListener(d,a,!1)),p.add&amp;&amp;(p.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,f):h.push(f),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,h,d,g,m=q.hasData(e)&amp;&amp;q.get(e);if(m&amp;&amp;(u=m.events)){t=(t||&quot;&quot;).match(w)||[&quot;&quot;],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||&quot;&quot;).split(&quot;.&quot;).sort(),h){f=x.event.special[h]||{},h=(r?f.delegateType:f.bindType)||h,p=u[h]||[],a=a[2]&amp;&amp;RegExp(&quot;(^|\\.)&quot;+d.join(&quot;\\.(?:.*\\.|)&quot;)+&quot;(\\.|$)&quot;),s=o=p.length;while(o--)c=p[o],!i&amp;&amp;g!==c.origType||n&amp;&amp;n.guid!==c.guid||a&amp;&amp;!a.test(c.namespace)||r&amp;&amp;r!==c.selector&amp;&amp;(&quot;**&quot;!==r||!c.selector)||(p.splice(o,1),c.selector&amp;&amp;p.delegateCount--,f.remove&amp;&amp;f.remove.call(e,c));s&amp;&amp;!p.length&amp;&amp;(f.teardown&amp;&amp;f.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&amp;&amp;(delete m.handle,q.remove(e,&quot;events&quot;))}},trigger:function(t,n,r,i){var s,a,u,l,c,f,p,h=[r||o],d=y.call(t,&quot;type&quot;)?t.type:t,g=y.call(t,&quot;namespace&quot;)?t.namespace.split(&quot;.&quot;):[];if(a=u=r=r||o,3!==r.nodeType&amp;&amp;8!==r.nodeType&amp;&amp;!_.test(d+x.event.triggered)&amp;&amp;(d.indexOf(&quot;.&quot;)&gt;=0&amp;&amp;(g=d.split(&quot;.&quot;),d=g.shift(),g.sort()),c=0&gt;d.indexOf(&quot;:&quot;)&amp;&amp;&quot;on&quot;+d,t=t[x.expando]?t:new x.Event(d,&quot;object&quot;==typeof t&amp;&amp;t),t.isTrigger=i?2:3,t.namespace=g.join(&quot;.&quot;),t.namespace_re=t.namespace?RegExp(&quot;(^|\\.)&quot;+g.join(&quot;\\.(?:.*\\.|)&quot;)+&quot;(\\.|$)&quot;):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),p=x.event.special[d]||{},i||!p.trigger||p.trigger.apply(r,n)!==!1)){if(!i&amp;&amp;!p.noBubble&amp;&amp;!x.isWindow(r)){for(l=p.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&amp;&amp;h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&amp;&amp;!t.isPropagationStopped())t.type=s&gt;1?l:p.bindType||d,f=(q.get(a,&quot;events&quot;)||{})[t.type]&amp;&amp;q.get(a,&quot;handle&quot;),f&amp;&amp;f.apply(a,n),f=c&amp;&amp;a[c],f&amp;&amp;x.acceptData(a)&amp;&amp;f.apply&amp;&amp;f.apply(a,n)===!1&amp;&amp;t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||p._default&amp;&amp;p._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&amp;&amp;x.isFunction(r[d])&amp;&amp;!x.isWindow(r)&amp;&amp;(u=r[c],u&amp;&amp;(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&amp;&amp;(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,&quot;events&quot;)||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&amp;&amp;!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&amp;&amp;!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&amp;&amp;(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&amp;&amp;(e.result=r)===!1&amp;&amp;(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&amp;&amp;l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&amp;&amp;u.nodeType&amp;&amp;(!e.button||&quot;click&quot;!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||&quot;click&quot;!==e.type){for(r=[],n=0;a&gt;n;n++)o=t[n],i=o.selector+&quot; &quot;,r[i]===undefined&amp;&amp;(r[i]=o.needsContext?x(i,this).index(u)&gt;=0:x.find(i,this,null,[u]).length),r[i]&amp;&amp;r.push(o);r.length&amp;&amp;s.push({elem:u,handlers:r})}return t.length&gt;a&amp;&amp;s.push({elem:this,handlers:t.slice(a)}),s},props:&quot;altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which&quot;.split(&quot; &quot;),fixHooks:{},keyHooks:{props:&quot;char charCode key keyCode&quot;.split(&quot; &quot;),filter:function(e,t){return null==e.which&amp;&amp;(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:&quot;button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement&quot;.split(&quot; &quot;),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&amp;&amp;null!=t.clientX&amp;&amp;(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&amp;&amp;r.scrollLeft||i&amp;&amp;i.scrollLeft||0)-(r&amp;&amp;r.clientLeft||i&amp;&amp;i.clientLeft||0),e.pageY=t.clientY+(r&amp;&amp;r.scrollTop||i&amp;&amp;i.scrollTop||0)-(r&amp;&amp;r.clientTop||i&amp;&amp;i.clientTop||0)),e.which||s===undefined||(e.which=1&amp;s?1:2&amp;s?3:4&amp;s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return 3===e.target.nodeType&amp;&amp;(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&amp;&amp;this.focus?(this.focus(),!1):undefined},delegateType:&quot;focusin&quot;},blur:{trigger:function(){return this===V()&amp;&amp;this.blur?(this.blur(),!1):undefined},delegateType:&quot;focusout&quot;},click:{trigger:function(){return&quot;checkbox&quot;===this.type&amp;&amp;this.click&amp;&amp;x.nodeName(this,&quot;input&quot;)?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,&quot;a&quot;)}},beforeunload:{postDispatch:function(e){e.result!==undefined&amp;&amp;(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&amp;&amp;n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&amp;&amp;e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&amp;&amp;e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&amp;&amp;e.getPreventDefault()?U:Y):this.type=e,t&amp;&amp;x.extend(this,t),this.timeStamp=e&amp;&amp;e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&amp;&amp;e.preventDefault&amp;&amp;e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&amp;&amp;e.stopPropagation&amp;&amp;e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:&quot;mouseover&quot;,mouseleave:&quot;mouseout&quot;},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&amp;&amp;!x.contains(r,i))&amp;&amp;(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:&quot;focusin&quot;,blur:&quot;focusout&quot;},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&amp;&amp;o.addEventListener(e,r,!0)},teardown:function(){0===--n&amp;&amp;o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if(&quot;object&quot;==typeof e){&quot;string&quot;!=typeof t&amp;&amp;(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&amp;&amp;null==r?(r=t,n=t=undefined):null==r&amp;&amp;(&quot;string&quot;==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&amp;&amp;(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&amp;&amp;e.preventDefault&amp;&amp;e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+&quot;.&quot;+r.namespace:r.origType,r.selector,r.handler),this;if(&quot;object&quot;==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||&quot;function&quot;==typeof t)&amp;&amp;(n=t,t=undefined),n===!1&amp;&amp;(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=x.expr.match.needsContext,Q={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n,r,i=this.length;if(&quot;string&quot;!=typeof e)return t=this,this.pushStack(x(e).filter(function(){for(r=0;i&gt;r;r++)if(x.contains(t[r],this))return!0}));for(n=[],r=0;i&gt;r;r++)x.find(e,this[r],n);return n=this.pushStack(i&gt;1?x.unique(n):n),n.selector=(this.selector?this.selector+&quot; &quot;:&quot;&quot;)+e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n&gt;e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(Z(this,e||[],!0))},filter:function(e){return this.pushStack(Z(this,e||[],!1))},is:function(e){return!!e&amp;&amp;(&quot;string&quot;==typeof e?J.test(e)?x(e,this.context).index(this[0])&gt;=0:x.filter(e,this).length&gt;0:this.filter(e).length&gt;0)},closest:function(e,t){var n,r=0,i=this.length,o=[],s=J.test(e)||&quot;string&quot;!=typeof e?x(e,t||this.context):0;for(;i&gt;r;r++)for(n=this[r];n&amp;&amp;n!==t;n=n.parentNode)if(11&gt;n.nodeType&amp;&amp;(s?s.index(n)&gt;-1:1===n.nodeType&amp;&amp;x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length&gt;1?x.unique(o):o)},index:function(e){return e?&quot;string&quot;==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&amp;&amp;this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n=&quot;string&quot;==typeof e?x(e,t):x.makeArray(e&amp;&amp;e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function K(e,t){while((e=e[t])&amp;&amp;1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&amp;&amp;11!==t.nodeType?t:null},parents:function(e){return x.dir(e,&quot;parentNode&quot;)},parentsUntil:function(e,t,n){return x.dir(e,&quot;parentNode&quot;,n)},next:function(e){return K(e,&quot;nextSibling&quot;)},prev:function(e){return K(e,&quot;previousSibling&quot;)},nextAll:function(e){return x.dir(e,&quot;nextSibling&quot;)},prevAll:function(e){return x.dir(e,&quot;previousSibling&quot;)},nextUntil:function(e,t,n){return x.dir(e,&quot;nextSibling&quot;,n)},prevUntil:function(e,t,n){return x.dir(e,&quot;previousSibling&quot;,n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,&quot;iframe&quot;)?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return&quot;Until&quot;!==e.slice(-5)&amp;&amp;(r=n),r&amp;&amp;&quot;string&quot;==typeof r&amp;&amp;(i=x.filter(r,i)),this.length&gt;1&amp;&amp;(Q[e]||x.unique(i),&quot;p&quot;===e[0]&amp;&amp;i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&amp;&amp;(e=&quot;:not(&quot;+e+&quot;)&quot;),1===t.length&amp;&amp;1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&amp;&amp;9!==e.nodeType)if(1===e.nodeType){if(i&amp;&amp;x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&amp;&amp;e!==t&amp;&amp;n.push(e);return n}});function Z(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if(&quot;string&quot;==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)&gt;=0!==n})}var et=/&lt;(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^&gt;]*)\/&gt;/gi,tt=/&lt;([\w:]+)/,nt=/&lt;|&amp;#?\w+;/,rt=/&lt;(?:script|style|link)/i,it=/^(?:checkbox|radio)$/i,ot=/checked\s*(?:[^=]|=\s*.checked.)/i,st=/^$|\/(?:java|ecma)script/i,at=/^true\/(.*)/,ut=/^\s*&lt;!(?:\[CDATA\[|--)|(?:\]\]|--)&gt;\s*$/g,lt={option:[1,&quot;&lt;select multiple=&#39;multiple&#39;&gt;&quot;,&quot;&lt;/select&gt;&quot;],thead:[1,&quot;&lt;table&gt;&quot;,&quot;&lt;/table&gt;&quot;],tr:[2,&quot;&lt;table&gt;&lt;tbody&gt;&quot;,&quot;&lt;/tbody&gt;&lt;/table&gt;&quot;],td:[3,&quot;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&quot;,&quot;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&quot;],_default:[0,&quot;&quot;,&quot;&quot;]};lt.optgroup=lt.option,lt.tbody=lt.tfoot=lt.colgroup=lt.caption=lt.col=lt.thead,lt.th=lt.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&amp;&amp;this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ct(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ct(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&amp;&amp;this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&amp;&amp;this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(gt(n)),n.parentNode&amp;&amp;(t&amp;&amp;x.contains(n.ownerDocument,n)&amp;&amp;ht(gt(n,&quot;script&quot;)),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&amp;&amp;(x.cleanData(gt(e,!1)),e.textContent=&quot;&quot;);return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&amp;&amp;1===t.nodeType)return t.innerHTML;if(&quot;string&quot;==typeof e&amp;&amp;!rt.test(e)&amp;&amp;!lt[(tt.exec(e)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase()]){e=e.replace(et,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;);try{for(;r&gt;n;n++)t=this[n]||{},1===t.nodeType&amp;&amp;(x.cleanData(gt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&amp;&amp;this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&amp;&amp;(x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=p.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,f=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1&gt;=c||&quot;string&quot;!=typeof d||x.support.checkClone)&amp;&amp;ot.test(d))return this.each(function(r){var i=f.eq(r);g&amp;&amp;(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&amp;&amp;(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&amp;&amp;this),i=r.firstChild,1===r.childNodes.length&amp;&amp;(r=i),i)){for(o=x.map(gt(r,&quot;script&quot;),ft),s=o.length;c&gt;l;l++)a=r,l!==h&amp;&amp;(a=x.clone(a,!0,!0),s&amp;&amp;x.merge(o,gt(a,&quot;script&quot;))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,pt),l=0;s&gt;l;l++)a=o[l],st.test(a.type||&quot;&quot;)&amp;&amp;!q.access(a,&quot;globalEval&quot;)&amp;&amp;x.contains(u,a)&amp;&amp;(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(ut,&quot;&quot;)))}return this}}),x.each({appendTo:&quot;append&quot;,prependTo:&quot;prepend&quot;,insertBefore:&quot;before&quot;,insertAfter:&quot;after&quot;,replaceAll:&quot;replaceWith&quot;},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o&gt;=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&amp;&amp;11!==e.nodeType||x.isXMLDoc(e)))for(s=gt(a),o=gt(e),r=0,i=o.length;i&gt;r;r++)mt(o[r],s[r]);if(t)if(n)for(o=o||gt(e),s=s||gt(a),r=0,i=o.length;i&gt;r;r++)dt(o[r],s[r]);else dt(e,a);return s=gt(a,&quot;script&quot;),s.length&gt;0&amp;&amp;ht(s,!u&amp;&amp;gt(e,&quot;script&quot;)),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,f=e.length,p=t.createDocumentFragment(),h=[];for(;f&gt;c;c++)if(i=e[c],i||0===i)if(&quot;object&quot;===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(nt.test(i)){o=o||p.appendChild(t.createElement(&quot;div&quot;)),s=(tt.exec(i)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase(),a=lt[s]||lt._default,o.innerHTML=a[1]+i.replace(et,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;)+a[2],l=a[0];while(l--)o=o.firstChild;x.merge(h,o.childNodes),o=p.firstChild,o.textContent=&quot;&quot;}else h.push(t.createTextNode(i));p.textContent=&quot;&quot;,c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&amp;&amp;(u=x.contains(i.ownerDocument,i),o=gt(p.appendChild(i),&quot;script&quot;),u&amp;&amp;ht(o),n)){l=0;while(i=o[l++])st.test(i.type||&quot;&quot;)&amp;&amp;n.push(i)}return p},cleanData:function(e){var t,n,r,i=e.length,o=0,s=x.event.special;for(;i&gt;o;o++){if(n=e[o],x.acceptData(n)&amp;&amp;(t=q.access(n)))for(r in t.events)s[r]?x.event.remove(n,r):x.removeEvent(n,r,t.handle);L.discard(n),q.discard(n)}},_evalUrl:function(e){return x.ajax({url:e,type:&quot;GET&quot;,dataType:&quot;text&quot;,async:!1,global:!1,success:x.globalEval})}});function ct(e,t){return x.nodeName(e,&quot;table&quot;)&amp;&amp;x.nodeName(1===t.nodeType?t:t.firstChild,&quot;tr&quot;)?e.getElementsByTagName(&quot;tbody&quot;)[0]||e.appendChild(e.ownerDocument.createElement(&quot;tbody&quot;)):e}function ft(e){return e.type=(null!==e.getAttribute(&quot;type&quot;))+&quot;/&quot;+e.type,e}function pt(e){var t=at.exec(e.type);return t?e.type=t[1]:e.removeAttribute(&quot;type&quot;),e}function ht(e,t){var n=e.length,r=0;for(;n&gt;r;r++)q.set(e[r],&quot;globalEval&quot;,!t||q.get(t[r],&quot;globalEval&quot;))}function dt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&amp;&amp;(o=q.access(e),s=x.extend({},o),l=o.events,q.set(t,s),l)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r&gt;n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&amp;&amp;(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function gt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||&quot;*&quot;):e.querySelectorAll?e.querySelectorAll(t||&quot;*&quot;):[];return t===undefined||t&amp;&amp;x.nodeName(e,t)?x.merge([e],n):n}function mt(e,t){var n=t.nodeName.toLowerCase();&quot;input&quot;===n&amp;&amp;it.test(e.type)?t.checked=e.checked:(&quot;input&quot;===n||&quot;textarea&quot;===n)&amp;&amp;(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&amp;&amp;(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&amp;&amp;t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,&quot;body&quot;)||x(this).replaceWith(this.childNodes)}).end()}});var yt,vt,xt=/^(none|table(?!-c[ea]).+)/,bt=/^margin/,wt=RegExp(&quot;^(&quot;+b+&quot;)(.*)$&quot;,&quot;i&quot;),Tt=RegExp(&quot;^(&quot;+b+&quot;)(?!px)[a-z%]+$&quot;,&quot;i&quot;),Ct=RegExp(&quot;^([+-])=(&quot;+b+&quot;)&quot;,&quot;i&quot;),kt={BODY:&quot;block&quot;},Nt={position:&quot;absolute&quot;,visibility:&quot;hidden&quot;,display:&quot;block&quot;},Et={letterSpacing:0,fontWeight:400},St=[&quot;Top&quot;,&quot;Right&quot;,&quot;Bottom&quot;,&quot;Left&quot;],jt=[&quot;Webkit&quot;,&quot;O&quot;,&quot;Moz&quot;,&quot;ms&quot;];function Dt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=jt.length;while(i--)if(t=jt[i]+n,t in e)return t;return r}function At(e,t){return e=t||e,&quot;none&quot;===x.css(e,&quot;display&quot;)||!x.contains(e.ownerDocument,e)}function Lt(t){return e.getComputedStyle(t,null)}function qt(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a&gt;s;s++)r=e[s],r.style&amp;&amp;(o[s]=q.get(r,&quot;olddisplay&quot;),n=r.style.display,t?(o[s]||&quot;none&quot;!==n||(r.style.display=&quot;&quot;),&quot;&quot;===r.style.display&amp;&amp;At(r)&amp;&amp;(o[s]=q.access(r,&quot;olddisplay&quot;,Pt(r.nodeName)))):o[s]||(i=At(r),(n&amp;&amp;&quot;none&quot;!==n||!i)&amp;&amp;q.set(r,&quot;olddisplay&quot;,i?n:x.css(r,&quot;display&quot;))));for(s=0;a&gt;s;s++)r=e[s],r.style&amp;&amp;(t&amp;&amp;&quot;none&quot;!==r.style.display&amp;&amp;&quot;&quot;!==r.style.display||(r.style.display=t?o[s]||&quot;&quot;:&quot;none&quot;));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=Lt(e),i=t.length;i&gt;s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length&gt;1)},show:function(){return qt(this,!0)},hide:function(){return qt(this)},toggle:function(e){var t=&quot;boolean&quot;==typeof e;return this.each(function(){(t?e:At(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=yt(e,&quot;opacity&quot;);return&quot;&quot;===n?&quot;1&quot;:n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{&quot;float&quot;:&quot;cssFloat&quot;},style:function(e,t,n,r){if(e&amp;&amp;3!==e.nodeType&amp;&amp;8!==e.nodeType&amp;&amp;e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=Dt(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&amp;&amp;&quot;get&quot;in s&amp;&amp;(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,&quot;string&quot;===o&amp;&amp;(i=Ct.exec(n))&amp;&amp;(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o=&quot;number&quot;),null==n||&quot;number&quot;===o&amp;&amp;isNaN(n)||(&quot;number&quot;!==o||x.cssNumber[a]||(n+=&quot;px&quot;),x.support.clearCloneStyle||&quot;&quot;!==n||0!==t.indexOf(&quot;background&quot;)||(u[t]=&quot;inherit&quot;),s&amp;&amp;&quot;set&quot;in s&amp;&amp;(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=Dt(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&amp;&amp;&quot;get&quot;in s&amp;&amp;(i=s.get(e,!0,n)),i===undefined&amp;&amp;(i=yt(e,t,r)),&quot;normal&quot;===i&amp;&amp;t in Et&amp;&amp;(i=Et[t]),&quot;&quot;===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),yt=function(e,t,n){var r,i,o,s=n||Lt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&amp;&amp;(&quot;&quot;!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Tt.test(a)&amp;&amp;bt.test(t)&amp;&amp;(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ht(e,t,n){var r=wt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||&quot;px&quot;):t}function Ot(e,t,n,r,i){var o=n===(r?&quot;border&quot;:&quot;content&quot;)?4:&quot;width&quot;===t?1:0,s=0;for(;4&gt;o;o+=2)&quot;margin&quot;===n&amp;&amp;(s+=x.css(e,n+St[o],!0,i)),r?(&quot;content&quot;===n&amp;&amp;(s-=x.css(e,&quot;padding&quot;+St[o],!0,i)),&quot;margin&quot;!==n&amp;&amp;(s-=x.css(e,&quot;border&quot;+St[o]+&quot;Width&quot;,!0,i))):(s+=x.css(e,&quot;padding&quot;+St[o],!0,i),&quot;padding&quot;!==n&amp;&amp;(s+=x.css(e,&quot;border&quot;+St[o]+&quot;Width&quot;,!0,i)));return s}function Ft(e,t,n){var r=!0,i=&quot;width&quot;===t?e.offsetWidth:e.offsetHeight,o=Lt(e),s=x.support.boxSizing&amp;&amp;&quot;border-box&quot;===x.css(e,&quot;boxSizing&quot;,!1,o);if(0&gt;=i||null==i){if(i=yt(e,t,o),(0&gt;i||null==i)&amp;&amp;(i=e.style[t]),Tt.test(i))return i;r=s&amp;&amp;(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ot(e,t,n||(s?&quot;border&quot;:&quot;content&quot;),r,o)+&quot;px&quot;}function Pt(e){var t=o,n=kt[e];return n||(n=Rt(e,t),&quot;none&quot;!==n&amp;&amp;n||(vt=(vt||x(&quot;&lt;iframe frameborder=&#39;0&#39; width=&#39;0&#39; height=&#39;0&#39;/&gt;&quot;).css(&quot;cssText&quot;,&quot;display:block !important&quot;)).appendTo(t.documentElement),t=(vt[0].contentWindow||vt[0].contentDocument).document,t.write(&quot;&lt;!doctype html&gt;&lt;html&gt;&lt;body&gt;&quot;),t.close(),n=Rt(e,t),vt.detach()),kt[e]=n),n}function Rt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],&quot;display&quot;);return n.remove(),r}x.each([&quot;height&quot;,&quot;width&quot;],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&amp;&amp;xt.test(x.css(e,&quot;display&quot;))?x.swap(e,Nt,function(){return Ft(e,t,r)}):Ft(e,t,r):undefined},set:function(e,n,r){var i=r&amp;&amp;Lt(e);return Ht(e,n,r?Ot(e,t,r,x.support.boxSizing&amp;&amp;&quot;border-box&quot;===x.css(e,&quot;boxSizing&quot;,!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:&quot;inline-block&quot;},yt,[e,&quot;marginRight&quot;]):undefined}}),!x.support.pixelPosition&amp;&amp;x.fn.position&amp;&amp;x.each([&quot;top&quot;,&quot;left&quot;],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=yt(e,t),Tt.test(n)?x(e).position()[t]+&quot;px&quot;:n):undefined}}})}),x.expr&amp;&amp;x.expr.filters&amp;&amp;(x.expr.filters.hidden=function(e){return 0&gt;=e.offsetWidth&amp;&amp;0&gt;=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:&quot;&quot;,padding:&quot;&quot;,border:&quot;Width&quot;},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o=&quot;string&quot;==typeof n?n.split(&quot; &quot;):[n];for(;4&gt;r;r++)i[e+St[r]+t]=o[r]||o[r-2]||o[0];return i}},bt.test(e)||(x.cssHooks[e+t].set=Ht)});var Mt=/%20/g,Wt=/\[\]$/,$t=/\r?\n/g,Bt=/^(?:submit|button|image|reset|file)$/i,It=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,&quot;elements&quot;);return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&amp;&amp;!x(this).is(&quot;:disabled&quot;)&amp;&amp;It.test(this.nodeName)&amp;&amp;!Bt.test(e)&amp;&amp;(this.checked||!it.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace($t,&quot;\r\n&quot;)}}):{name:t.name,value:n.replace($t,&quot;\r\n&quot;)}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?&quot;&quot;:t,r[r.length]=encodeURIComponent(e)+&quot;=&quot;+encodeURIComponent(t)};if(t===undefined&amp;&amp;(t=x.ajaxSettings&amp;&amp;x.ajaxSettings.traditional),x.isArray(e)||e.jquery&amp;&amp;!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)zt(n,e[n],t,i);return r.join(&quot;&amp;&quot;).replace(Mt,&quot;+&quot;)};function zt(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||Wt.test(e)?r(e,i):zt(e+&quot;[&quot;+(&quot;object&quot;==typeof i?t:&quot;&quot;)+&quot;]&quot;,i,n,r)});else if(n||&quot;object&quot;!==x.type(t))r(e,t);else for(i in t)zt(e+&quot;[&quot;+i+&quot;]&quot;,t[i],n,r)}x.each(&quot;blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu&quot;.split(&quot; &quot;),function(e,t){x.fn[t]=function(e,n){return arguments.length&gt;0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,&quot;**&quot;):this.off(t,e||&quot;**&quot;,n)}});var _t,Xt,Ut=x.now(),Yt=/\?/,Vt=/#.*$/,Gt=/([?&amp;])_=[^&amp;]*/,Jt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Qt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Kt=/^(?:GET|HEAD)$/,Zt=/^\/\//,en=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,tn=x.fn.load,nn={},rn={},on=&quot;*/&quot;.concat(&quot;*&quot;);try{Xt=i.href}catch(sn){Xt=o.createElement(&quot;a&quot;),Xt.href=&quot;&quot;,Xt=Xt.href}_t=en.exec(Xt.toLowerCase())||[];function an(e){return function(t,n){&quot;string&quot;!=typeof t&amp;&amp;(n=t,t=&quot;*&quot;);var r,i=0,o=t.toLowerCase().match(w)||[];</div><div class='line' id='LC6'>if(x.isFunction(n))while(r=o[i++])&quot;+&quot;===r[0]?(r=r.slice(1)||&quot;*&quot;,(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function un(e,t,n,r){var i={},o=e===rn;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return&quot;string&quot;!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i[&quot;*&quot;]&amp;&amp;s(&quot;*&quot;)}function ln(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&amp;&amp;((i[n]?e:r||(r={}))[n]=t[n]);return r&amp;&amp;x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if(&quot;string&quot;!=typeof e&amp;&amp;tn)return tn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(&quot; &quot;);return a&gt;=0&amp;&amp;(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&amp;&amp;&quot;object&quot;==typeof t&amp;&amp;(i=&quot;POST&quot;),s.length&gt;0&amp;&amp;x.ajax({url:e,type:i,dataType:&quot;html&quot;,data:t}).done(function(e){o=arguments,s.html(r?x(&quot;&lt;div&gt;&quot;).append(x.parseHTML(e)).find(r):e)}).complete(n&amp;&amp;function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each([&quot;ajaxStart&quot;,&quot;ajaxStop&quot;,&quot;ajaxComplete&quot;,&quot;ajaxError&quot;,&quot;ajaxSuccess&quot;,&quot;ajaxSend&quot;],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Xt,type:&quot;GET&quot;,isLocal:Qt.test(_t[1]),global:!0,processData:!0,async:!0,contentType:&quot;application/x-www-form-urlencoded; charset=UTF-8&quot;,accepts:{&quot;*&quot;:on,text:&quot;text/plain&quot;,html:&quot;text/html&quot;,xml:&quot;application/xml, text/xml&quot;,json:&quot;application/json, text/javascript&quot;},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:&quot;responseXML&quot;,text:&quot;responseText&quot;,json:&quot;responseJSON&quot;},converters:{&quot;* text&quot;:String,&quot;text html&quot;:!0,&quot;text json&quot;:x.parseJSON,&quot;text xml&quot;:x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?ln(ln(e,x.ajaxSettings),t):ln(x.ajaxSettings,e)},ajaxPrefilter:an(nn),ajaxTransport:an(rn),ajax:function(e,t){&quot;object&quot;==typeof e&amp;&amp;(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),f=c.context||c,p=c.context&amp;&amp;(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),d=x.Callbacks(&quot;once memory&quot;),g=c.statusCode||{},m={},y={},v=0,b=&quot;canceled&quot;,T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Jt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2&gt;v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&amp;&amp;n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Xt)+&quot;&quot;).replace(Vt,&quot;&quot;).replace(Zt,_t[1]+&quot;//&quot;),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||&quot;*&quot;).toLowerCase().match(w)||[&quot;&quot;],null==c.crossDomain&amp;&amp;(a=en.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===_t[1]&amp;&amp;a[2]===_t[2]&amp;&amp;(a[3]||(&quot;http:&quot;===a[1]?&quot;80&quot;:&quot;443&quot;))===(_t[3]||(&quot;http:&quot;===_t[1]?&quot;80&quot;:&quot;443&quot;)))),c.data&amp;&amp;c.processData&amp;&amp;&quot;string&quot;!=typeof c.data&amp;&amp;(c.data=x.param(c.data,c.traditional)),un(nn,c,t,T),2===v)return T;u=c.global,u&amp;&amp;0===x.active++&amp;&amp;x.event.trigger(&quot;ajaxStart&quot;),c.type=c.type.toUpperCase(),c.hasContent=!Kt.test(c.type),r=c.url,c.hasContent||(c.data&amp;&amp;(r=c.url+=(Yt.test(r)?&quot;&amp;&quot;:&quot;?&quot;)+c.data,delete c.data),c.cache===!1&amp;&amp;(c.url=Gt.test(r)?r.replace(Gt,&quot;$1_=&quot;+Ut++):r+(Yt.test(r)?&quot;&amp;&quot;:&quot;?&quot;)+&quot;_=&quot;+Ut++)),c.ifModified&amp;&amp;(x.lastModified[r]&amp;&amp;T.setRequestHeader(&quot;If-Modified-Since&quot;,x.lastModified[r]),x.etag[r]&amp;&amp;T.setRequestHeader(&quot;If-None-Match&quot;,x.etag[r])),(c.data&amp;&amp;c.hasContent&amp;&amp;c.contentType!==!1||t.contentType)&amp;&amp;T.setRequestHeader(&quot;Content-Type&quot;,c.contentType),T.setRequestHeader(&quot;Accept&quot;,c.dataTypes[0]&amp;&amp;c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(&quot;*&quot;!==c.dataTypes[0]?&quot;, &quot;+on+&quot;; q=0.01&quot;:&quot;&quot;):c.accepts[&quot;*&quot;]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&amp;&amp;(c.beforeSend.call(f,T,c)===!1||2===v))return T.abort();b=&quot;abort&quot;;for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=un(rn,c,t,T)){T.readyState=1,u&amp;&amp;p.trigger(&quot;ajaxSend&quot;,[T,c]),c.async&amp;&amp;c.timeout&gt;0&amp;&amp;(s=setTimeout(function(){T.abort(&quot;timeout&quot;)},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2&gt;v))throw C;k(-1,C)}}else k(-1,&quot;No Transport&quot;);function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&amp;&amp;(v=2,s&amp;&amp;clearTimeout(s),n=undefined,i=a||&quot;&quot;,T.readyState=e&gt;0?4:0,l=e&gt;=200&amp;&amp;300&gt;e||304===e,o&amp;&amp;(b=cn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&amp;&amp;(w=T.getResponseHeader(&quot;Last-Modified&quot;),w&amp;&amp;(x.lastModified[r]=w),w=T.getResponseHeader(&quot;etag&quot;),w&amp;&amp;(x.etag[r]=w)),204===e?C=&quot;nocontent&quot;:304===e?C=&quot;notmodified&quot;:(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&amp;&amp;(C=&quot;error&quot;,0&gt;e&amp;&amp;(e=0))),T.status=e,T.statusText=(t||C)+&quot;&quot;,l?h.resolveWith(f,[m,C,T]):h.rejectWith(f,[T,C,y]),T.statusCode(g),g=undefined,u&amp;&amp;p.trigger(l?&quot;ajaxSuccess&quot;:&quot;ajaxError&quot;,[T,c,l?m:y]),d.fireWith(f,[T,C]),u&amp;&amp;(p.trigger(&quot;ajaxComplete&quot;,[T,c]),--x.active||x.event.trigger(&quot;ajaxStop&quot;)))}return T},getJSON:function(e,t,n){return x.get(e,t,n,&quot;json&quot;)},getScript:function(e,t){return x.get(e,undefined,t,&quot;script&quot;)}}),x.each([&quot;get&quot;,&quot;post&quot;],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&amp;&amp;(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function cn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while(&quot;*&quot;===u[0])u.shift(),r===undefined&amp;&amp;(r=e.mimeType||t.getResponseHeader(&quot;Content-Type&quot;));if(r)for(i in a)if(a[i]&amp;&amp;a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+&quot; &quot;+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&amp;&amp;u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&amp;&amp;(n[e.responseFields[o]]=t),!u&amp;&amp;r&amp;&amp;e.dataFilter&amp;&amp;(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if(&quot;*&quot;===o)o=u;else if(&quot;*&quot;!==u&amp;&amp;u!==o){if(s=l[u+&quot; &quot;+o]||l[&quot;* &quot;+o],!s)for(i in l)if(a=i.split(&quot; &quot;),a[1]===o&amp;&amp;(s=l[u+&quot; &quot;+a[0]]||l[&quot;* &quot;+a[0]])){s===!0?s=l[i]:l[i]!==!0&amp;&amp;(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&amp;&amp;e[&quot;throws&quot;])t=s(t);else try{t=s(t)}catch(f){return{state:&quot;parsererror&quot;,error:s?f:&quot;No conversion from &quot;+u+&quot; to &quot;+o}}}return{state:&quot;success&quot;,data:t}}x.ajaxSetup({accepts:{script:&quot;text/javascript, application/javascript, application/ecmascript, application/x-ecmascript&quot;},contents:{script:/(?:java|ecma)script/},converters:{&quot;text script&quot;:function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter(&quot;script&quot;,function(e){e.cache===undefined&amp;&amp;(e.cache=!1),e.crossDomain&amp;&amp;(e.type=&quot;GET&quot;)}),x.ajaxTransport(&quot;script&quot;,function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x(&quot;&lt;script&gt;&quot;).prop({async:!0,charset:e.scriptCharset,src:e.url}).on(&quot;load error&quot;,n=function(e){t.remove(),n=null,e&amp;&amp;i(&quot;error&quot;===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&amp;&amp;n()}}}});var pn=[],hn=/(=)\?(?=&amp;|$)|\?\?/;x.ajaxSetup({jsonp:&quot;callback&quot;,jsonpCallback:function(){var e=pn.pop()||x.expando+&quot;_&quot;+Ut++;return this[e]=!0,e}}),x.ajaxPrefilter(&quot;json jsonp&quot;,function(t,n,r){var i,o,s,a=t.jsonp!==!1&amp;&amp;(hn.test(t.url)?&quot;url&quot;:&quot;string&quot;==typeof t.data&amp;&amp;!(t.contentType||&quot;&quot;).indexOf(&quot;application/x-www-form-urlencoded&quot;)&amp;&amp;hn.test(t.data)&amp;&amp;&quot;data&quot;);return a||&quot;jsonp&quot;===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(hn,&quot;$1&quot;+i):t.jsonp!==!1&amp;&amp;(t.url+=(Yt.test(t.url)?&quot;&amp;&quot;:&quot;?&quot;)+t.jsonp+&quot;=&quot;+i),t.converters[&quot;script json&quot;]=function(){return s||x.error(i+&quot; was not called&quot;),s[0]},t.dataTypes[0]=&quot;json&quot;,o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&amp;&amp;(t.jsonpCallback=n.jsonpCallback,pn.push(i)),s&amp;&amp;x.isFunction(o)&amp;&amp;o(s[0]),s=o=undefined}),&quot;script&quot;):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var dn=x.ajaxSettings.xhr(),gn={0:200,1223:204},mn=0,yn={};e.ActiveXObject&amp;&amp;x(e).on(&quot;unload&quot;,function(){for(var e in yn)yn[e]();yn=undefined}),x.support.cors=!!dn&amp;&amp;&quot;withCredentials&quot;in dn,x.support.ajax=dn=!!dn,x.ajaxTransport(function(e){var t;return x.support.cors||dn&amp;&amp;!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&amp;&amp;s.overrideMimeType&amp;&amp;s.overrideMimeType(e.mimeType),e.crossDomain||n[&quot;X-Requested-With&quot;]||(n[&quot;X-Requested-With&quot;]=&quot;XMLHttpRequest&quot;);for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&amp;&amp;(delete yn[o],t=s.onload=s.onerror=null,&quot;abort&quot;===e?s.abort():&quot;error&quot;===e?r(s.status||404,s.statusText):r(gn[s.status]||s.status,s.statusText,&quot;string&quot;==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t(&quot;error&quot;),t=yn[o=mn++]=t(&quot;abort&quot;),s.send(e.hasContent&amp;&amp;e.data||null)},abort:function(){t&amp;&amp;t()}}:undefined});var vn,xn,bn=/^(?:toggle|show|hide)$/,wn=RegExp(&quot;^(?:([+-])=|)(&quot;+b+&quot;)([a-z%]*)$&quot;,&quot;i&quot;),Tn=/queueHooks$/,Cn=[Dn],kn={&quot;*&quot;:[function(e,t){var n,r,i=this.createTween(e,t),o=wn.exec(t),s=i.cur(),a=+s||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(x.cssNumber[e]?&quot;&quot;:&quot;px&quot;),&quot;px&quot;!==r&amp;&amp;a){a=x.css(i.elem,e,!0)||n||1;do u=u||&quot;.5&quot;,a/=u,x.style(i.elem,e,a+r);while(u!==(u=i.cur()/s)&amp;&amp;1!==u&amp;&amp;--l)}i.unit=r,i.start=a,i.end=o[1]?a+(o[1]+1)*n:n}return i}]};function Nn(){return setTimeout(function(){vn=undefined}),vn=x.now()}function En(e,t){x.each(t,function(t,n){var r=(kn[t]||[]).concat(kn[&quot;*&quot;]),i=0,o=r.length;for(;o&gt;i;i++)if(r[i].call(e,t,n))return})}function Sn(e,t,n){var r,i,o=0,s=Cn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=vn||Nn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u&gt;s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1&gt;o&amp;&amp;u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:vn||Nn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r&gt;n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(jn(c,l.opts.specialEasing);s&gt;o;o++)if(r=Cn[o].call(l,e,c,l.opts))return r;return En(l,c),x.isFunction(l.opts.start)&amp;&amp;l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function jn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&amp;&amp;(i=o[1],o=e[n]=o[0]),n!==r&amp;&amp;(e[r]=o,delete e[n]),s=x.cssHooks[r],s&amp;&amp;&quot;expand&quot;in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(Sn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=[&quot;*&quot;]):e=e.split(&quot; &quot;);var n,r=0,i=e.length;for(;i&gt;r;r++)n=e[r],kn[n]=kn[n]||[],kn[n].unshift(t)},prefilter:function(e,t){t?Cn.unshift(e):Cn.push(e)}});function Dn(e,t,n){var r,i,o,s,a,u,l,c,f,p=this,h=e.style,d={},g=[],m=e.nodeType&amp;&amp;At(e);n.queue||(c=x._queueHooks(e,&quot;fx&quot;),null==c.unqueued&amp;&amp;(c.unqueued=0,f=c.empty.fire,c.empty.fire=function(){c.unqueued||f()}),c.unqueued++,p.always(function(){p.always(function(){c.unqueued--,x.queue(e,&quot;fx&quot;).length||c.empty.fire()})})),1===e.nodeType&amp;&amp;(&quot;height&quot;in t||&quot;width&quot;in t)&amp;&amp;(n.overflow=[h.overflow,h.overflowX,h.overflowY],&quot;inline&quot;===x.css(e,&quot;display&quot;)&amp;&amp;&quot;none&quot;===x.css(e,&quot;float&quot;)&amp;&amp;(h.display=&quot;inline-block&quot;)),n.overflow&amp;&amp;(h.overflow=&quot;hidden&quot;,p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),a=q.get(e,&quot;fxshow&quot;);for(r in t)if(o=t[r],bn.exec(o)){if(delete t[r],u=u||&quot;toggle&quot;===o,o===(m?&quot;hide&quot;:&quot;show&quot;)){if(&quot;show&quot;!==o||a===undefined||a[r]===undefined)continue;m=!0}g.push(r)}if(s=g.length){a=q.get(e,&quot;fxshow&quot;)||q.access(e,&quot;fxshow&quot;,{}),&quot;hidden&quot;in a&amp;&amp;(m=a.hidden),u&amp;&amp;(a.hidden=!m),m?x(e).show():p.done(function(){x(e).hide()}),p.done(function(){var t;q.remove(e,&quot;fxshow&quot;);for(t in d)x.style(e,t,d[t])});for(r=0;s&gt;r;r++)i=g[r],l=p.createTween(i,m?a[i]:0),d[i]=a[i]||x.style(e,i),i in a||(a[i]=l.start,m&amp;&amp;(l.end=l.start,l.start=&quot;width&quot;===i||&quot;height&quot;===i?1:0))}}function An(e,t,n,r,i){return new An.prototype.init(e,t,n,r,i)}x.Tween=An,An.prototype={constructor:An,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||&quot;swing&quot;,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?&quot;&quot;:&quot;px&quot;)},cur:function(){var e=An.propHooks[this.prop];return e&amp;&amp;e.get?e.get(this):An.propHooks._default.get(this)},run:function(e){var t,n=An.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&amp;&amp;this.options.step.call(this.elem,this.now,this),n&amp;&amp;n.set?n.set(this):An.propHooks._default.set(this),this}},An.prototype.init.prototype=An.prototype,An.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&amp;&amp;null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,&quot;&quot;),t&amp;&amp;&quot;auto&quot;!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&amp;&amp;(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},An.propHooks.scrollTop=An.propHooks.scrollLeft={set:function(e){e.elem.nodeType&amp;&amp;e.elem.parentNode&amp;&amp;(e.elem[e.prop]=e.now)}},x.each([&quot;toggle&quot;,&quot;show&quot;,&quot;hide&quot;],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||&quot;boolean&quot;==typeof e?n.apply(this,arguments):this.animate(Ln(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(At).css(&quot;opacity&quot;,0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=Sn(this,x.extend({},e),o);s.finish=function(){t.stop(!0)},(i||q.get(this,&quot;finish&quot;))&amp;&amp;t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return&quot;string&quot;!=typeof e&amp;&amp;(n=t,t=e,e=undefined),t&amp;&amp;e!==!1&amp;&amp;this.queue(e||&quot;fx&quot;,[]),this.each(function(){var t=!0,i=null!=e&amp;&amp;e+&quot;queueHooks&quot;,o=x.timers,s=q.get(this);if(i)s[i]&amp;&amp;s[i].stop&amp;&amp;r(s[i]);else for(i in s)s[i]&amp;&amp;s[i].stop&amp;&amp;Tn.test(i)&amp;&amp;r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&amp;&amp;o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&amp;&amp;x.dequeue(this,e)})},finish:function(e){return e!==!1&amp;&amp;(e=e||&quot;fx&quot;),this.each(function(){var t,n=q.get(this),r=n[e+&quot;queue&quot;],i=n[e+&quot;queueHooks&quot;],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&amp;&amp;i.cur&amp;&amp;i.cur.finish&amp;&amp;i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&amp;&amp;o[t].queue===e&amp;&amp;(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s&gt;t;t++)r[t]&amp;&amp;r[t].finish&amp;&amp;r[t].finish.call(this);delete n.finish})}});function Ln(e,t){var n,r={height:e},i=0;for(t=t?1:0;4&gt;i;i+=2-t)n=St[i],r[&quot;margin&quot;+n]=r[&quot;padding&quot;+n]=e;return t&amp;&amp;(r.opacity=r.width=e),r}x.each({slideDown:Ln(&quot;show&quot;),slideUp:Ln(&quot;hide&quot;),slideToggle:Ln(&quot;toggle&quot;),fadeIn:{opacity:&quot;show&quot;},fadeOut:{opacity:&quot;hide&quot;},fadeToggle:{opacity:&quot;toggle&quot;}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&amp;&amp;&quot;object&quot;==typeof e?x.extend({},e):{complete:n||!n&amp;&amp;t||x.isFunction(e)&amp;&amp;e,duration:e,easing:n&amp;&amp;t||t&amp;&amp;!x.isFunction(t)&amp;&amp;t};return r.duration=x.fx.off?0:&quot;number&quot;==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&amp;&amp;(r.queue=&quot;fx&quot;),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&amp;&amp;r.old.call(this),r.queue&amp;&amp;x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=An.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(vn=x.now();t.length&gt;n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),vn=undefined},x.fx.timer=function(e){e()&amp;&amp;x.timers.push(e)&amp;&amp;x.fx.start()},x.fx.interval=13,x.fx.start=function(){xn||(xn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(xn),xn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&amp;&amp;x.expr.filters&amp;&amp;(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&amp;&amp;i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&amp;&amp;(o=i.getBoundingClientRect()),n=qn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,&quot;position&quot;),f=x(e),p={};&quot;static&quot;===c&amp;&amp;(e.style.position=&quot;relative&quot;),a=f.offset(),o=x.css(e,&quot;top&quot;),u=x.css(e,&quot;left&quot;),l=(&quot;absolute&quot;===c||&quot;fixed&quot;===c)&amp;&amp;(o+u).indexOf(&quot;auto&quot;)&gt;-1,l?(r=f.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&amp;&amp;(t=t.call(e,n,a)),null!=t.top&amp;&amp;(p.top=t.top-a.top+s),null!=t.left&amp;&amp;(p.left=t.left-a.left+i),&quot;using&quot;in t?t.using.call(e,p):f.css(p)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return&quot;fixed&quot;===x.css(n,&quot;position&quot;)?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],&quot;html&quot;)||(r=e.offset()),r.top+=x.css(e[0],&quot;borderTopWidth&quot;,!0),r.left+=x.css(e[0],&quot;borderLeftWidth&quot;,!0)),{top:t.top-r.top-x.css(n,&quot;marginTop&quot;,!0),left:t.left-r.left-x.css(n,&quot;marginLeft&quot;,!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&amp;&amp;!x.nodeName(e,&quot;html&quot;)&amp;&amp;&quot;static&quot;===x.css(e,&quot;position&quot;))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:&quot;pageXOffset&quot;,scrollTop:&quot;pageYOffset&quot;},function(t,n){var r=&quot;pageYOffset&quot;===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=qn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function qn(e){return x.isWindow(e)?e:9===e.nodeType&amp;&amp;e.defaultView}x.each({Height:&quot;height&quot;,Width:&quot;width&quot;},function(e,t){x.each({padding:&quot;inner&quot;+e,content:t,&quot;&quot;:&quot;outer&quot;+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&amp;&amp;(n||&quot;boolean&quot;!=typeof r),s=n||(r===!0||i===!0?&quot;margin&quot;:&quot;border&quot;);return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement[&quot;client&quot;+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body[&quot;scroll&quot;+e],i[&quot;scroll&quot;+e],t.body[&quot;offset&quot;+e],i[&quot;offset&quot;+e],i[&quot;client&quot;+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,&quot;object&quot;==typeof module&amp;&amp;&quot;object&quot;==typeof module.exports?module.exports=x:&quot;function&quot;==typeof define&amp;&amp;define.amd&amp;&amp;define(&quot;jquery&quot;,[],function(){return x}),&quot;object&quot;==typeof e&amp;&amp;&quot;object&quot;==typeof e.document&amp;&amp;(e.jQuery=e.$=x)})(window);</div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.06599s from github-fe118-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/composer/satis/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

