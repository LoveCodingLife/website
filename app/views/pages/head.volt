
<link href="{{ cdn_url }}css/src/styles.css" rel='stylesheet' type='text/css'>
<link href="{{ cdn_url }}css/phalconPage.css" rel='stylesheet' type='text/css'>

<header class="page-header">
    <nav class="navbar" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu-container">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand phalcon-logo" href="{{ url() }}">
                    <span itemprop="name" class="sr-only">Phalcon Framework</span>
                </a>
            </div>

            <div class="collapse navbar-collapse navbar-right" id="main-menu-container">
                {% include 'partials/topmenu.volt' %}
            </div>
        </div>
    </nav>
</header>
