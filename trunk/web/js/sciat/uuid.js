  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>dmstech-vm/src/main/webapp/js/oac_js/uuid.js at master · DMSTech/dmstech-vm</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="zlXIpSnYKymSJNt9AI6fdMKM4rMJzza2V4UdHNmlVSA=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github-83f6d9de9d84b203707ab4ba8bdf0bd6478f0d5b.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github2-abb1ff53e1e45f192dcab3e295f2e2ee5eb90995.css" media="screen" rel="stylesheet" type="text/css" />
    
    


    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/frameworks-a450c7f907bdc1ee6b362ab1ecca811c761fd259.js" type="text/javascript"></script>
    
    <script defer="defer" src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/github-6794f2c277257830cc1fb49dbcb48c0932ca8a08.js" type="text/javascript"></script>
    
    

      <link rel='permalink' href='/DMSTech/dmstech-vm/blob/b1377918dc6790b0616c023520fe9a72f8fa7f72/src/main/webapp/js/oac_js/uuid.js'>
    <meta property="og:title" content="dmstech-vm"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/DMSTech/dmstech-vm"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png?1329921026"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="dmstech-vm - DMSTech web services implementation for packaging with DMSTech virtual machine."/>

    <meta name="description" content="dmstech-vm - DMSTech web services implementation for packaging with DMSTech virtual machine." />

  <link href="https://github.com/DMSTech/dmstech-vm/commits/master.atom?login=jdeerin1&token=5f47a27c8f5ff205ef56f400021e6399" rel="alternate" title="Recent Commits to dmstech-vm:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-private env-production " data-blob-contribs-enabled="yes">
    <div id="wrapper">

    
    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo" href="https://github.com/organizations/DMSTech">
            <!--[if IE]>
            <img alt="GitHub" class="github-logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7.png?1329921026" />
            <img alt="GitHub" class="github-logo-hover" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7-hover.png?1329921026" />
            <![endif]-->
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1337118071" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1337118071" />
          </a>

              
    <div class="topsearch  ">
        <form accept-charset="UTF-8" action="/search" id="top_search_form" method="get">
  <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search"><span class="mini-icon mini-icon-advanced-search"></span></a>
  <div class="search placeholder-field js-placeholder-field">
    <input type="text" class="search my_repos_autocompleter" id="global-search-field" name="q" results="5" spellcheck="false" autocomplete="off" data-autocomplete="my-repos-autocomplete" placeholder="Search&hellip;" data-hotkey="s" />
    <div id="my-repos-autocomplete" class="autocomplete-results">
      <ul class="js-navigation-container"></ul>
    </div>
    <input type="submit" value="Search" class="button">
    <span class="mini-icon mini-icon-search-input"></span>
  </div>
  <input type="hidden" name="type" value="Everything" />
  <input type="hidden" name="repo" value="" />
  <input type="hidden" name="langOverride" value="" />
  <input type="hidden" name="start_value" value="1" />
</form>

      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
          <li><a href="https://gist.github.com">Gist</a></li>
          <li><a href="/blog">Blog</a></li>
        <li><a href="http://help.github.com">Help</a></li>
      </ul>
    </div>


            


  <div id="userbox">
    <div id="user">
      <a href="https://github.com/jdeerin1"><img height="20" src="https://secure.gravatar.com/avatar/66dde7a591319d347f97e97359370ddc?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
      <a href="https://github.com/jdeerin1" class="name">jdeerin1</a>
    </div>
    <ul id="user-links">
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a New Repo"><span class="mini-icon mini-icon-create"></span></a>
      </li>
      <li>
        <a href="/inbox/notifications" id="notifications" class="tooltipped downwards" title="Notifications">
          <span class="mini-icon mini-icon-notifications"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="settings" class="tooltipped downwards" title="Account Settings">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Log Out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
      </li>
    </ul>
  </div>



          
        </div>
      </div>

      

            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="container hentry">
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          



              <ul class="pagehead-actions">


              <li class="nspr">
                <a href="/DMSTech/dmstech-vm/pull/new/master" class="minibutton btn-pull-request "><span class="icon"></span>Pull Request</a>
              </li>

          <li class="js-toggler-container js-social-container watch-button-container ">
            <span class="watch-button"><a href="/DMSTech/dmstech-vm/toggle_watch" class="minibutton btn-watch js-toggler-target lighter" data-remote="true" data-method="post" rel="nofollow"><span class="icon"></span> Watch</a><a class="social-count js-social-count" href="/DMSTech/dmstech-vm/watchers">1</a></span>
            <span class="unwatch-button"><a href="/DMSTech/dmstech-vm/toggle_watch" class="minibutton btn-unwatch js-toggler-target lighter" data-remote="true" data-method="post" rel="nofollow"><span class="icon"></span> Unwatch</a><a class="social-count js-social-count" href="/DMSTech/dmstech-vm/watchers">1</a></span>
          </li>

              <li>
                <a href="/DMSTech/dmstech-vm/fork_select" class="minibutton btn-fork js-toggler-target lighter" rel="facebox nofollow"><span class="icon"></span> Fork</a><a href="/DMSTech/dmstech-vm/network" class="social-count">1</a>
              </li>


    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title private">
            <span class="repo-label"><span>private</span></span>
            <span class="mega-icon mega-icon-private-repo"></span>
            <span class="author vcard">
<a href="/DMSTech" class="url fn" itemprop="url" rel="author">              <span itemprop="title">DMSTech</span>
              </a></span> /
            <strong><a href="/DMSTech/dmstech-vm" class="js-current-repository">dmstech-vm</a></strong>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/DMSTech/dmstech-vm" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/DMSTech/dmstech-vm/network" highlight="repo_network">Network</a>
    <li><a href="/DMSTech/dmstech-vm/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/DMSTech/dmstech-vm/issues" highlight="repo_issues">Issues <span class='counter'>0</span></a></li>

      <li><a href="/DMSTech/dmstech-vm/wiki" highlight="repo_wiki">Wiki</a></li>

    <li><a href="/DMSTech/dmstech-vm/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>

  </ul>
 
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/DMSTech/dmstech-vm/tree-list/b1377918dc6790b0616c023520fe9a72f8fa7f72"
      data-blob-url-prefix="/DMSTech/dmstech-vm/blob/b1377918dc6790b0616c023520fe9a72f8fa7f72"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/DMSTech/dmstech-vm">dmstech-vm</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/DMSTech/dmstech-vm/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        <span>Go</span>
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions subnav">
    <li><a href="/DMSTech/dmstech-vm/tags" class="blank" highlight="repo_tags">Tags <span class="counter">0</span></a></li>
    <li><a href="/DMSTech/dmstech-vm/downloads" class="blank downloads-blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
    
  <li class="search repo-search ">
<form accept-charset="UTF-8" action="/DMSTech/dmstech-vm/search" method="get">      <span class="fieldwrap">
        <input type="text" name="q" value=""
          placeholder="Search source code&hellip;" /><button type="submit" class="minibutton"><span class="mini-icon mini-icon-search-input"></span></button>
      </span>
      <input type="hidden" id="lang-value" name="langOverride" value="" />
      <input type="hidden" id="start-value" name="start" value="" />
</form>  </li>

  </ul>

  <ul class="scope">
    <li class="switcher">

      <div class="context-menu-container js-menu-container js-context-menu">
        <a href="#"
           class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
           data-hotkey="w"
           data-master-branch="master"
           data-ref="master">
           <span><span class="icon"></span><i>branch:</i> master</span>
        </a>

        <div class="context-pane commitish-context js-menu-content">
          <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
          <div class="context-title">Switch Branches/Tags</div>
          <div class="context-body pane-selector commitish-selector js-navigation-container">
            <div class="filterbar">
              <input type="text" id="context-commitish-filter-field" class="js-navigation-enable" placeholder="Filter branches/tags" data-filterable />

              <ul class="tabs">
                <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
              </ul>
            </div>

            <div class="js-filter-tab js-filter-branches" data-filterable-for="context-commitish-filter-field">
              <div class="no-results js-not-filterable">Nothing to show</div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target">
                  <h4>
                      <a href="/DMSTech/dmstech-vm/blob/master/src/main/webapp/js/oac_js/uuid.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                  </h4>
                </div>
            </div>

            <div class="js-filter-tab js-filter-tags" style="display:none" data-filterable-for="context-commitish-filter-field">
              <div class="no-results js-not-filterable">Nothing to show</div>
            </div>
          </div>
        </div><!-- /.commitish-context-context -->
      </div>

    </li>
  </ul>

  <ul class="subnav with-scope">

    <li><a href="/DMSTech/dmstech-vm" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/DMSTech/dmstech-vm/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/DMSTech/dmstech-vm/branches" class="" highlight="repo_branches" rel="nofollow">Branches <span class="counter">1</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        





<!-- block_view_fragment_key: views10/v8/blob:v21:9af2f18c4c42dd15cd4568aaaa880daf -->
  <div id="slider">

    <div class="breadcrumb" data-path="src/main/webapp/js/oac_js/uuid.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/DMSTech/dmstech-vm/tree/b1377918dc6790b0616c023520fe9a72f8fa7f72" class="js-rewrite-sha" itemprop="url"><span itemprop="title">dmstech-vm</span></a></b> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/DMSTech/dmstech-vm/tree/b1377918dc6790b0616c023520fe9a72f8fa7f72/src" class="js-rewrite-sha" itemscope="url"><span itemprop="title">src</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/DMSTech/dmstech-vm/tree/b1377918dc6790b0616c023520fe9a72f8fa7f72/src/main" class="js-rewrite-sha" itemscope="url"><span itemprop="title">main</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/DMSTech/dmstech-vm/tree/b1377918dc6790b0616c023520fe9a72f8fa7f72/src/main/webapp" class="js-rewrite-sha" itemscope="url"><span itemprop="title">webapp</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/DMSTech/dmstech-vm/tree/b1377918dc6790b0616c023520fe9a72f8fa7f72/src/main/webapp/js" class="js-rewrite-sha" itemscope="url"><span itemprop="title">js</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/DMSTech/dmstech-vm/tree/b1377918dc6790b0616c023520fe9a72f8fa7f72/src/main/webapp/js/oac_js" class="js-rewrite-sha" itemscope="url"><span itemprop="title">oac_js</span></a></span> / <strong class="final-path">uuid.js</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="src/main/webapp/js/oac_js/uuid.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>


      <div class="commit file-history-tease" data-path="src/main/webapp/js/oac_js/uuid.js/">
        <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/aa1b7664e4ecd13db742e0d90c14074d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
        <span class="author"><a href="/jchartrand">jchartrand</a></span>
        <time class="js-relative-date" datetime="2012-02-20T09:31:15-08:00" title="2012-02-20 09:31:15">February 20, 2012</time>
        <div class="commit-title">
            <a href="/DMSTech/dmstech-vm/commit/137a92575f907c3d52124d14805d620ee3500c9f" class="message">first commit of vm project</a>
        </div>

        <div class="participation">
          <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
          
        </div>
        <div id="blob_contributors_box" style="display:none">
          <h2>Users on GitHub who have contributed to this file</h2>
          <ul class="facebox-user-list">
            <li>
              <img height="24" src="https://secure.gravatar.com/avatar/aa1b7664e4ecd13db742e0d90c14074d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
              <a href="/jchartrand">jchartrand</a>
            </li>
          </ul>
        </div>
      </div>

    <div class="frames">
      <div class="frame frame-center" data-path="src/main/webapp/js/oac_js/uuid.js/" data-permalink-url="/DMSTech/dmstech-vm/blob/b1377918dc6790b0616c023520fe9a72f8fa7f72/src/main/webapp/js/oac_js/uuid.js" data-title="dmstech-vm/src/main/webapp/js/oac_js/uuid.js at master · DMSTech/dmstech-vm · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">100755</span>
                  <span>119 lines (97 sloc)</span>
                <span>4.219 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/DMSTech/dmstech-vm/edit/b1377918dc6790b0616c023520fe9a72f8fa7f72/src/main/webapp/js/oac_js/uuid.js" data-method="post" rel="nofollow" data-hotkey="e">Edit this file</a>
                  </li>

                <li>
                  <a href="/DMSTech/dmstech-vm/raw/master/src/main/webapp/js/oac_js/uuid.js" class="minibutton btn-raw grouped-button bigger lighter" id="raw-url"><span class="icon"></span>Raw</a>
                </li>
                  <li>
                    <a href="/DMSTech/dmstech-vm/blame/master/src/main/webapp/js/oac_js/uuid.js" class="minibutton btn-blame grouped-button bigger lighter"><span class="icon"></span>Blame</a>
                  </li>
                <li>
                  <a href="/DMSTech/dmstech-vm/commits/master/src/main/webapp/js/oac_js/uuid.js" class="minibutton btn-history grouped-button bigger lighter" rel="nofollow"><span class="icon"></span>History</a>
                </li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><br/></div><div class='line' id='LC3'><span class="cm">uuid.js - Version 0.3</span></div><div class='line' id='LC4'><span class="cm">JavaScript Class to create a UUID like identifier</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="cm">Copyright (C) 2006-2008, Erik Giberti (AF-Design), All rights reserved.</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="cm">This program is free software; you can redistribute it and/or modify it under </span></div><div class='line' id='LC9'><span class="cm">the terms of the GNU General Public License as published by the Free Software </span></div><div class='line' id='LC10'><span class="cm">Foundation; either version 2 of the License, or (at your option) any later </span></div><div class='line' id='LC11'><span class="cm">version.</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><span class="cm">This program is distributed in the hope that it will be useful, but WITHOUT ANY </span></div><div class='line' id='LC14'><span class="cm">WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A </span></div><div class='line' id='LC15'><span class="cm">PARTICULAR PURPOSE. See the GNU General Public License for more details.</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'><span class="cm">You should have received a copy of the GNU General Public License along with </span></div><div class='line' id='LC18'><span class="cm">this program; if not, write to the Free Software Foundation, Inc., 59 Temple </span></div><div class='line' id='LC19'><span class="cm">Place, Suite 330, Boston, MA 02111-1307 USA</span></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'><span class="cm">The latest version of this file can be downloaded from</span></div><div class='line' id='LC22'><span class="cm">http://www.af-design.com/resources/javascript_uuid.php</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'><span class="cm">HISTORY:</span></div><div class='line' id='LC25'><span class="cm">6/5/06 	- Initial Release</span></div><div class='line' id='LC26'><span class="cm">5/22/08 - Updated code to run faster, removed randrange(min,max) in favor of</span></div><div class='line' id='LC27'><span class="cm">          a simpler rand(max) function. Reduced overhead by using getTime() </span></div><div class='line' id='LC28'><span class="cm">          method of date class (suggestion by James Hall).</span></div><div class='line' id='LC29'><span class="cm">9/5/08	- Fixed a bug with rand(max) and additional efficiencies pointed out </span></div><div class='line' id='LC30'><span class="cm">	  by Robert Kieffer http://broofa.com/</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'><span class="cm">KNOWN ISSUES:</span></div><div class='line' id='LC33'><span class="cm">- Still no way to get MAC address in JavaScript</span></div><div class='line' id='LC34'><span class="cm">- Research into other versions of UUID show promising possibilities </span></div><div class='line' id='LC35'><span class="cm">  (more research needed)</span></div><div class='line' id='LC36'><span class="cm">- Documentation needs improvement</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'><span class="cm">*/</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'><span class="c1">// On creation of a UUID object, set it&#39;s initial value</span></div><div class='line' id='LC41'><span class="kd">function</span> <span class="nx">UUID</span><span class="p">(){</span></div><div class='line' id='LC42'>	<span class="k">this</span><span class="p">.</span><span class="nx">id</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">createUUID</span><span class="p">();</span></div><div class='line' id='LC43'><span class="p">}</span></div><div class='line' id='LC44'><br/></div><div class='line' id='LC45'><span class="c1">// When asked what this Object is, lie and return it&#39;s value</span></div><div class='line' id='LC46'><span class="nx">UUID</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">valueOf</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span> <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC47'><span class="nx">UUID</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span> <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'><span class="c1">//</span></div><div class='line' id='LC50'><span class="c1">// INSTANCE SPECIFIC METHODS</span></div><div class='line' id='LC51'><span class="c1">//</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'><span class="nx">UUID</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">createUUID</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC54'>	<span class="c1">//</span></div><div class='line' id='LC55'>	<span class="c1">// Loose interpretation of the specification DCE 1.1: Remote Procedure Call</span></div><div class='line' id='LC56'>	<span class="c1">// described at http://www.opengroup.org/onlinepubs/009629399/apdxa.htm#tagtcjh_37</span></div><div class='line' id='LC57'>	<span class="c1">// since JavaScript doesn&#39;t allow access to internal systems, the last 48 bits </span></div><div class='line' id='LC58'>	<span class="c1">// of the node section is made up using a series of random numbers (6 octets long).</span></div><div class='line' id='LC59'>	<span class="c1">//  </span></div><div class='line' id='LC60'>	<span class="kd">var</span> <span class="nx">dg</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="mi">1582</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC61'>	<span class="kd">var</span> <span class="nx">dc</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">();</span></div><div class='line' id='LC62'>	<span class="kd">var</span> <span class="nx">t</span> <span class="o">=</span> <span class="nx">dc</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">-</span> <span class="nx">dg</span><span class="p">.</span><span class="nx">getTime</span><span class="p">();</span></div><div class='line' id='LC63'>	<span class="kd">var</span> <span class="nx">h</span> <span class="o">=</span> <span class="s1">&#39;-&#39;</span><span class="p">;</span></div><div class='line' id='LC64'>	<span class="kd">var</span> <span class="nx">tl</span> <span class="o">=</span> <span class="nx">UUID</span><span class="p">.</span><span class="nx">getIntegerBits</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="mi">0</span><span class="p">,</span><span class="mi">31</span><span class="p">);</span></div><div class='line' id='LC65'>	<span class="kd">var</span> <span class="nx">tm</span> <span class="o">=</span> <span class="nx">UUID</span><span class="p">.</span><span class="nx">getIntegerBits</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="mi">32</span><span class="p">,</span><span class="mi">47</span><span class="p">);</span></div><div class='line' id='LC66'>	<span class="kd">var</span> <span class="nx">thv</span> <span class="o">=</span> <span class="nx">UUID</span><span class="p">.</span><span class="nx">getIntegerBits</span><span class="p">(</span><span class="nx">t</span><span class="p">,</span><span class="mi">48</span><span class="p">,</span><span class="mi">59</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;1&#39;</span><span class="p">;</span> <span class="c1">// version 1, security version is 2</span></div><div class='line' id='LC67'>	<span class="kd">var</span> <span class="nx">csar</span> <span class="o">=</span> <span class="nx">UUID</span><span class="p">.</span><span class="nx">getIntegerBits</span><span class="p">(</span><span class="nx">UUID</span><span class="p">.</span><span class="nx">rand</span><span class="p">(</span><span class="mi">4095</span><span class="p">),</span><span class="mi">0</span><span class="p">,</span><span class="mi">7</span><span class="p">);</span></div><div class='line' id='LC68'>	<span class="kd">var</span> <span class="nx">csl</span> <span class="o">=</span> <span class="nx">UUID</span><span class="p">.</span><span class="nx">getIntegerBits</span><span class="p">(</span><span class="nx">UUID</span><span class="p">.</span><span class="nx">rand</span><span class="p">(</span><span class="mi">4095</span><span class="p">),</span><span class="mi">0</span><span class="p">,</span><span class="mi">7</span><span class="p">);</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>	<span class="c1">// since detection of anything about the machine/browser is far to buggy, </span></div><div class='line' id='LC71'>	<span class="c1">// include some more random numbers here</span></div><div class='line' id='LC72'>	<span class="c1">// if NIC or an IP can be obtained reliably, that should be put in</span></div><div class='line' id='LC73'>	<span class="c1">// here instead.</span></div><div class='line' id='LC74'>	<span class="kd">var</span> <span class="nx">n</span> <span class="o">=</span> <span class="nx">UUID</span><span class="p">.</span><span class="nx">getIntegerBits</span><span class="p">(</span><span class="nx">UUID</span><span class="p">.</span><span class="nx">rand</span><span class="p">(</span><span class="mi">8191</span><span class="p">),</span><span class="mi">0</span><span class="p">,</span><span class="mi">7</span><span class="p">)</span> <span class="o">+</span> </div><div class='line' id='LC75'>			<span class="nx">UUID</span><span class="p">.</span><span class="nx">getIntegerBits</span><span class="p">(</span><span class="nx">UUID</span><span class="p">.</span><span class="nx">rand</span><span class="p">(</span><span class="mi">8191</span><span class="p">),</span><span class="mi">8</span><span class="p">,</span><span class="mi">15</span><span class="p">)</span> <span class="o">+</span> </div><div class='line' id='LC76'>			<span class="nx">UUID</span><span class="p">.</span><span class="nx">getIntegerBits</span><span class="p">(</span><span class="nx">UUID</span><span class="p">.</span><span class="nx">rand</span><span class="p">(</span><span class="mi">8191</span><span class="p">),</span><span class="mi">0</span><span class="p">,</span><span class="mi">7</span><span class="p">)</span> <span class="o">+</span> </div><div class='line' id='LC77'>			<span class="nx">UUID</span><span class="p">.</span><span class="nx">getIntegerBits</span><span class="p">(</span><span class="nx">UUID</span><span class="p">.</span><span class="nx">rand</span><span class="p">(</span><span class="mi">8191</span><span class="p">),</span><span class="mi">8</span><span class="p">,</span><span class="mi">15</span><span class="p">)</span> <span class="o">+</span> </div><div class='line' id='LC78'>			<span class="nx">UUID</span><span class="p">.</span><span class="nx">getIntegerBits</span><span class="p">(</span><span class="nx">UUID</span><span class="p">.</span><span class="nx">rand</span><span class="p">(</span><span class="mi">8191</span><span class="p">),</span><span class="mi">0</span><span class="p">,</span><span class="mi">15</span><span class="p">);</span> <span class="c1">// this last number is two octets long</span></div><div class='line' id='LC79'>	<span class="k">return</span> <span class="nx">tl</span> <span class="o">+</span> <span class="nx">h</span> <span class="o">+</span> <span class="nx">tm</span> <span class="o">+</span> <span class="nx">h</span> <span class="o">+</span> <span class="nx">thv</span> <span class="o">+</span> <span class="nx">h</span> <span class="o">+</span> <span class="nx">csar</span> <span class="o">+</span> <span class="nx">csl</span> <span class="o">+</span> <span class="nx">h</span> <span class="o">+</span> <span class="nx">n</span><span class="p">;</span> </div><div class='line' id='LC80'><span class="p">}</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'><span class="c1">//</span></div><div class='line' id='LC84'><span class="c1">// GENERAL METHODS (Not instance specific)</span></div><div class='line' id='LC85'><span class="c1">//</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'><span class="c1">// Pull out only certain bits from a very large integer, used to get the time</span></div><div class='line' id='LC89'><span class="c1">// code information for the first part of a UUID. Will return zero&#39;s if there </span></div><div class='line' id='LC90'><span class="c1">// aren&#39;t enough bits to shift where it needs to.</span></div><div class='line' id='LC91'><span class="nx">UUID</span><span class="p">.</span><span class="nx">getIntegerBits</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span><span class="nx">start</span><span class="p">,</span><span class="nx">end</span><span class="p">){</span></div><div class='line' id='LC92'>	<span class="kd">var</span> <span class="nx">base16</span> <span class="o">=</span> <span class="nx">UUID</span><span class="p">.</span><span class="nx">returnBase</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span><span class="mi">16</span><span class="p">);</span></div><div class='line' id='LC93'>	<span class="kd">var</span> <span class="nx">quadArray</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Array</span><span class="p">();</span></div><div class='line' id='LC94'>	<span class="kd">var</span> <span class="nx">quadString</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC95'>	<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC96'>	<span class="k">for</span><span class="p">(</span><span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;</span><span class="nx">base16</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">i</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC97'>		<span class="nx">quadArray</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">base16</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">i</span><span class="o">+</span><span class="mi">1</span><span class="p">));</span>	</div><div class='line' id='LC98'>	<span class="p">}</span></div><div class='line' id='LC99'>	<span class="k">for</span><span class="p">(</span><span class="nx">i</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">start</span><span class="o">/</span><span class="mi">4</span><span class="p">);</span><span class="nx">i</span><span class="o">&lt;=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">end</span><span class="o">/</span><span class="mi">4</span><span class="p">);</span><span class="nx">i</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC100'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">quadArray</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">||</span> <span class="nx">quadArray</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">==</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="nx">quadString</span> <span class="o">+=</span> <span class="s1">&#39;0&#39;</span><span class="p">;</span></div><div class='line' id='LC101'>		<span class="k">else</span> <span class="nx">quadString</span> <span class="o">+=</span> <span class="nx">quadArray</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC102'>	<span class="p">}</span></div><div class='line' id='LC103'>	<span class="k">return</span> <span class="nx">quadString</span><span class="p">;</span></div><div class='line' id='LC104'><span class="p">}</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'><span class="c1">// Replaced from the original function to leverage the built in methods in</span></div><div class='line' id='LC107'><span class="c1">// JavaScript. Thanks to Robert Kieffer for pointing this one out</span></div><div class='line' id='LC108'><span class="nx">UUID</span><span class="p">.</span><span class="nx">returnBase</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">number</span><span class="p">,</span> <span class="nx">base</span><span class="p">){</span></div><div class='line' id='LC109'>	<span class="k">return</span> <span class="p">(</span><span class="nx">number</span><span class="p">).</span><span class="nx">toString</span><span class="p">(</span><span class="nx">base</span><span class="p">).</span><span class="nx">toUpperCase</span><span class="p">();</span></div><div class='line' id='LC110'><span class="p">}</span></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'><span class="c1">// pick a random number within a range of numbers</span></div><div class='line' id='LC113'><span class="c1">// int b rand(int a); where 0 &lt;= b &lt;= a</span></div><div class='line' id='LC114'><span class="nx">UUID</span><span class="p">.</span><span class="nx">rand</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">max</span><span class="p">){</span></div><div class='line' id='LC115'>	<span class="k">return</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span> <span class="o">*</span> <span class="p">(</span><span class="nx">max</span> <span class="o">+</span> <span class="mi">1</span><span class="p">));</span></div><div class='line' id='LC116'><span class="p">}</span></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'><span class="c1">// end of UUID class file</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/DMSTech/dmstech-vm/tree-list/b1377918dc6790b0616c023520fe9a72f8fa7f72" data-blob-url-prefix="/DMSTech/dmstech-vm/blob/b1377918dc6790b0616c023520fe9a72f8fa7f72">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif?1329921026" height="64" width="64">
</div>

      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Analyze web traffic</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://windows.github.com/">GitHub for Windows</a></li>
         <li><a href="http://mobile.github.com/">Issues for iPhone</a></li>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Extras</h4>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.14262s from fe14.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspaces_logo.png?1329921026" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="ajax-error-dismiss">Dismiss</a>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1329921026" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton btn-download download"><span class="icon"></span>Download</a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1329921026" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton btn-download download"><span class="icon"></span>Download</a>
        </li>
      </ul>
    </div>

    
    
    
    <span id='server_response_time' data-time='0.14551' data-host='fe14'></span>
  </body>
</html>

