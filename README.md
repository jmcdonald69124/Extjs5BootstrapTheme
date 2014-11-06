<!DOCTYPE HTML>
      <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css">
        <link href="docs.min.css" rel="stylesheet">
        <title>Theme Instructions</title>
        <style>
            .bs-glyphicons li{
                height:200px;
            }

            .glyphicon-class{
                height:50px;
            }
        </style>
      </head>
      <body>

        <div class="container">
        <div class="row">
        <div class="col-md-9" role="main">
        <div class="bs-docs-section">
        <h1 id="glyphicons" class="page-header">Getting Started - <small>Setting up a custom theme</small></h1>

        <P>If you do not know how to set up a custom theme then please read the tutorial at <a href="http://docs.sencha.com/extjs/5.0/core_concepts/theming.html" target="_blank" accesskey="">http://docs.sencha.com/extjs/5.0/core_concepts/theming.html</a> before
        attempting to utilize this theme. <strong>The important parts required for getting this theme running are below for your convienence.</strong></p>


        <h3 >Set up the Workspace</h3>

        <p>The first step in building a custom theme is to set up your workspace using Sencha Cmd.</p>


        <pre><code class="html">sencha generate workspace -ext my-workspace</code></pre>

        <p>If you want to use an existing local copy of the SDK, run the following from the command line. Simply replace "~/sencha-5.0.0/" with the path where you unzipped the Ext JS SDK.</p>


        <pre><code class="html">sencha -sdk ~/sencha-5.0.0 generate workspace my-workspace</code></pre>

        <p>The 'generate workspace' will create the scaffolding for a Sencha workspace in the target directory "my-workspace".
            This workspace will be location in which you create your custom theme package. You will also create an application
            here that uses the new custom theme. This command copies the Ext JS SDK and packages into your workspace so that the
            theme and application can find their required dependencies. The commands for generating the theme and application must
            be executed from inside the workspace directory. So, at this time, you should change your working directory to the new "my-workspace" directory:</p>


        <pre><code class="html">cd my-workspace</code></pre>
        <p>You should now see two directories inside your workspace</p>

        <li>"ext" - contains the Ext JS SDK</li>
        <li>"packages" - contains the Ext JS locale and theme packages</li>

        <h3>Generating the Custom Theme Package and File Structure</h3>

        <p>Sencha Cmd simplifies the process of creating a custom theme by generating a theme package containing all the necessary files required for your custom theme.
        Run the following command from the theme-demo-app directory:</p>


        <pre><code class="html">sencha generate theme my-custom-theme</code></pre>

        <p>This tells Sencha Cmd to generate a theme package named "my-custom-theme" in the current workspace. You should
            see a newly created directory named "my-custom-theme" in the "packages" directory of your workspace. This is the theme package. Lets take a look at the main content:</p>

        <li>"package.json" - This is the package properties file. It tells Sencha Cmd certain things about the package like its name, version, and dependencies (other packages that it requires).</li>
        <li>"sass/" - This directory contains all of your theme's SASS files. The sass files are divided into 3 main sections:</li>
        <li>"sass/etc/" - contains additional utility functions or mixins</li>
        <li>"sass/src/" - contains SASS rules and UI mixin calls that can use the variables defined in "sass/var/"</li>
        <li>"sass/var/" - contains SASS variables</li>
        <li>The files in "sass/var/" and "sass/src" should be structured to match the class path of the component you are styling. For example, variables that change the appearance of Ext.panel.Panel should be placed in a file named "sass/var/panel/Panel.scss".</li>
        <li>"resources/" - contains images and other static resources that your theme requires.</li>
        <li>"overrides/" - contains any JavaScript overrides to Ext JS component classes that may be required for theming those components.</li>

        <h3 class="bg-primary"> !important; - Copy the sass, resources, and package.json file to your new theme directory</h3>
        
        <p>Copy the folders from the repo to your new theme folder, replace the contents of the existing folders that were auto created.</p>
        
        <h3 >In your app.json file reference the theme.</h3>

        <pre><code class="html">
            /**
            * The name of the theme for this application.
            */
            "theme": "my-custom-theme",
        </code></pre>

        <h3 >Building the Package</h3>

        <p>Now that you've modified the base color to your theme, you need to build an updated version of the theme css file
            containing all the style rules for your theme. From the "packages/my-custom-theme/" 
            directory run the following command:</p>


        <pre><code class="html">sencha package build</code></pre>
        <p>Building the package creates a "build" directory in your theme package directory. Inside "my-custom-theme/build/resources"
            you will find a file named my-custom-theme-all.css. This file contains all
            the style rules for all Ext JS components for your theme. You can link directly to
            this file from your app but this is not recommended because the "all" file contains
            all styles for every Ext JS component and most apps only use a subset of Ext JS components.
            Sencha Cmd has the ability to filter out unused CSS style rules when you build an app,
            but first we need to configure the test app to use the custom theme.</p>

        <h1 id="glyphicons" class="page-header">Glyphicons</h1>

        <h2 id="glyphicons-glyphs">Available glyphs</h2>
        <p>Includes 200 glyphs in font format from the Glyphicon Halflings set. <a href="http://glyphicons.com/">Glyphicons</a> Halflings are normally not available for free, but their creator has made them available for Bootstrap free of cost. As a thank you, we only ask that you include a link back to <a href="http://glyphicons.com/">Glyphicons</a> whenever possible.</p>
        <div class="bs-glyphicons">
        <ul class="bs-glyphicons-list">

        <li>
            <span class="glyphicon glyphicon-asterisk"></span>
            <span class="glyphicon-class">glyphicon-asterisk</span><hr>
            <span class="glyphicon-class-ext">glyph: 'x2a@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-plus"></span>
            <span class="glyphicon-class">glyphicon-plus</span><hr>
            <span class="glyphicon-class-ext">glyph: 'x2b@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-euro"></span>
            <span class="glyphicon-class">glyphicon-euro</span><hr>
            <span class="glyphicon-class-ext">glyph: 'x20ac@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-minus"></span>
            <span class="glyphicon-class">glyphicon-minus</span><hr>
            <span class="glyphicon-class-ext">glyph: 'x2212@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-cloud"></span>
            <span class="glyphicon-class">glyphicon-cloud</span><hr>
            <span class="glyphicon-class-ext">glyph: 'x2601@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-envelope"></span>
            <span class="glyphicon-class">glyphicon-envelope</span><hr>
            <span class="glyphicon-class-ext">glyph: 'x2709@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-pencil"></span>
            <span class="glyphicon-class">glyphicon-pencil</span><hr>
            <span class="glyphicon-class-ext">glyph: 'x270f@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-glass"></span>
            <span class="glyphicon-class">glyphicon-glass</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe001@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-music"></span>
            <span class="glyphicon-class">glyphicon-music</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe002@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-search"></span>
            <span class="glyphicon-class">glyphicon-search</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe003@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-heart"></span>
            <span class="glyphicon-class">glyphicon-heart</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe005@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-star"></span>
            <span class="glyphicon-class">glyphicon-star</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe006@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-star-empty"></span>
            <span class="glyphicon-class">glyphicon-star-empty</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe007@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-user"></span>
            <span class="glyphicon-class">glyphicon-user</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe008@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-film"></span>
            <span class="glyphicon-class">glyphicon-film</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe009@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-th-large"></span>
            <span class="glyphicon-class">glyphicon-th-large</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe010@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-th"></span>
            <span class="glyphicon-class">glyphicon-th</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe011@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-th-list"></span>
            <span class="glyphicon-class">glyphicon-th-list</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe012@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-ok"></span>
            <span class="glyphicon-class">glyphicon-ok</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe013@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-remove"></span>
            <span class="glyphicon-class">glyphicon-remove</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe014@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-zoom-in"></span>
            <span class="glyphicon-class">glyphicon-zoom-in</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe015@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-zoom-out"></span>
            <span class="glyphicon-class">glyphicon-zoom-out</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe016@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-off"></span>
            <span class="glyphicon-class">glyphicon-off</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe017@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-signal"></span>
            <span class="glyphicon-class">glyphicon-signal</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe018@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-cog"></span>
            <span class="glyphicon-class">glyphicon-cog</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe019@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-trash"></span>
            <span class="glyphicon-class">glyphicon-trash</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe020@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-home"></span>
            <span class="glyphicon-class">glyphicon-home</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe021@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-file"></span>
            <span class="glyphicon-class">glyphicon-file</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe022@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-time"></span>
            <span class="glyphicon-class">glyphicon-time</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe023@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-road"></span>
            <span class="glyphicon-class">glyphicon-road</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe024@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-download-alt"></span>
            <span class="glyphicon-class">glyphicon-download-alt</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe025@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-download"></span>
            <span class="glyphicon-class">glyphicon-download</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe026@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-upload"></span>
            <span class="glyphicon-class">glyphicon-upload</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe027@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-inbox"></span>
            <span class="glyphicon-class">glyphicon-inbox</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe028@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-play-circle"></span>
            <span class="glyphicon-class">glyphicon-play-circle</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe029@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-repeat"></span>
            <span class="glyphicon-class">glyphicon-repeat</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe030@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-refresh"></span>
            <span class="glyphicon-class">glyphicon-refresh</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe031@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-list-alt"></span>
            <span class="glyphicon-class">glyphicon-list-alt</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe032@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-lock"></span>
            <span class="glyphicon-class">glyphicon-lock</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe033@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-flag"></span>
            <span class="glyphicon-class">glyphicon-flag</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe034@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-headphones"></span>
            <span class="glyphicon-class">glyphicon-headphones</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe035@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-volume-off"></span>
            <span class="glyphicon-class">glyphicon-volume-off</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe036@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-volume-down"></span>
            <span class="glyphicon-class">glyphicon-volume-down</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe037@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-volume-up"></span>
            <span class="glyphicon-class">glyphicon-volume-up</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe038@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-qrcode"></span>
            <span class="glyphicon-class">glyphicon-qrcode</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe039@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-barcode"></span>
            <span class="glyphicon-class">glyphicon-barcode</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe040@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-tag"></span>
            <span class="glyphicon-class">glyphicon-tag</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe041@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-tags"></span>
            <span class="glyphicon-class">glyphicon-tags</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe042@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-book"></span>
            <span class="glyphicon-class">glyphicon-book</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe043@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-bookmark"></span>
            <span class="glyphicon-class">glyphicon-bookmark</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe044@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-print"></span>
            <span class="glyphicon-class">glyphicon-print</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe045@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-camera"></span>
            <span class="glyphicon-class">glyphicon-camera</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe046@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-font"></span>
            <span class="glyphicon-class">glyphicon-font</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe047@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-bold"></span>
            <span class="glyphicon-class">glyphicon-bold</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe048@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-italic"></span>
            <span class="glyphicon-class">glyphicon-italic</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe049@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-text-height"></span>
            <span class="glyphicon-class">glyphicon-text-height</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe050@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-text-width"></span>
            <span class="glyphicon-class">glyphicon-text-width</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe051@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-align-left"></span>
            <span class="glyphicon-class">glyphicon-align-left</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe052@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-align-center"></span>
            <span class="glyphicon-class">glyphicon-align-center</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe053@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-align-right"></span>
            <span class="glyphicon-class">glyphicon-align-right</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe054@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-align-justify"></span>
            <span class="glyphicon-class">glyphicon-align-justify</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe055@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-list"></span>
            <span class="glyphicon-class">glyphicon-list</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe056@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-indent-left"></span>
            <span class="glyphicon-class">glyphicon-indent-left</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe057@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-indent-right"></span>
            <span class="glyphicon-class">glyphicon-indent-right</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe058@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-facetime-video"></span>
            <span class="glyphicon-class">glyphicon-facetime-video</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe059@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-picture"></span>
            <span class="glyphicon-class">glyphicon-picture</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe060@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-map-marker"></span>
            <span class="glyphicon-class">glyphicon-map-marker</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe062@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-adjust"></span>
            <span class="glyphicon-class">glyphicon-adjust</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe063@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-tint"></span>
            <span class="glyphicon-class">glyphicon-tint</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe064@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-edit"></span>
            <span class="glyphicon-class">glyphicon-edit</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe065@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-share"></span>
            <span class="glyphicon-class">glyphicon-share</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe066@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-check"></span>
            <span class="glyphicon-class">glyphicon-check</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe067@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-move"></span>
            <span class="glyphicon-class">glyphicon-move</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe068@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-step-backward"></span>
            <span class="glyphicon-class">glyphicon-step-backward</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe069@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-fast-backward"></span>
            <span class="glyphicon-class">glyphicon-fast-backward</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe070@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-backward"></span>
            <span class="glyphicon-class">glyphicon-backward</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe071@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-play"></span>
            <span class="glyphicon-class">glyphicon-play</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe072@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-pause"></span>
            <span class="glyphicon-class">glyphicon-pause</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe073@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-stop"></span>
            <span class="glyphicon-class">glyphicon-stop</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe074@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-forward"></span>
            <span class="glyphicon-class">glyphicon-forward</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe075@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-fast-forward"></span>
            <span class="glyphicon-class">glyphicon-fast-forward</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe076@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-step-forward"></span>
            <span class="glyphicon-class">glyphicon-step-forward</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe077@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-eject"></span>
            <span class="glyphicon-class">glyphicon-eject</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe078@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="glyphicon-class">glyphicon-chevron-left</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe079@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="glyphicon-class">glyphicon-chevron-right</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe080@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-plus-sign"></span>
            <span class="glyphicon-class">glyphicon-plus-sign</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe081@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-minus-sign"></span>
            <span class="glyphicon-class">glyphicon-minus-sign</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe082@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-remove-sign"></span>
            <span class="glyphicon-class">glyphicon-remove-sign</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe083@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-ok-sign"></span>
            <span class="glyphicon-class">glyphicon-ok-sign</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe084@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-question-sign"></span>
            <span class="glyphicon-class">glyphicon-question-sign</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe085@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-info-sign"></span>
            <span class="glyphicon-class">glyphicon-info-sign</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe086@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-screenshot"></span>
            <span class="glyphicon-class">glyphicon-screenshot</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe087@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-remove-circle"></span>
            <span class="glyphicon-class">glyphicon-remove-circle</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe088@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-ok-circle"></span>
            <span class="glyphicon-class">glyphicon-ok-circle</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe089@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-ban-circle"></span>
            <span class="glyphicon-class">glyphicon-ban-circle</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe090@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-arrow-left"></span>
            <span class="glyphicon-class">glyphicon-arrow-left</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe091@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-arrow-right"></span>
            <span class="glyphicon-class">glyphicon-arrow-right</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe092@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-arrow-up"></span>
            <span class="glyphicon-class">glyphicon-arrow-up</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe093@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-arrow-down"></span>
            <span class="glyphicon-class">glyphicon-arrow-down</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe094@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-share-alt"></span>
            <span class="glyphicon-class">glyphicon-share-alt</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe095@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-resize-full"></span>
            <span class="glyphicon-class">glyphicon-resize-full</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe096@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-resize-small"></span>
            <span class="glyphicon-class">glyphicon-resize-small</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe097@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-exclamation-sign"></span>
            <span class="glyphicon-class">glyphicon-exclamation-sign</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe101@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-gift"></span>
            <span class="glyphicon-class">glyphicon-gift</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe102@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-leaf"></span>
            <span class="glyphicon-class">glyphicon-leaf</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe103@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-fire"></span>
            <span class="glyphicon-class">glyphicon-fire</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe104@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-eye-open"></span>
            <span class="glyphicon-class">glyphicon-eye-open</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe105@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-eye-close"></span>
            <span class="glyphicon-class">glyphicon-eye-close</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe106@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-warning-sign"></span>
            <span class="glyphicon-class">glyphicon-warning-sign</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe107@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-plane"></span>
            <span class="glyphicon-class">glyphicon-plane</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe108@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-calendar"></span>
            <span class="glyphicon-class">glyphicon-calendar</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe109@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-random"></span>
            <span class="glyphicon-class">glyphicon-random</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe110@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-comment"></span>
            <span class="glyphicon-class">glyphicon-comment</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe111@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-magnet"></span>
            <span class="glyphicon-class">glyphicon-magnet</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe112@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-chevron-up"></span>
            <span class="glyphicon-class">glyphicon-chevron-up</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe113@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-chevron-down"></span>
            <span class="glyphicon-class">glyphicon-chevron-down</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe114@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-retweet"></span>
            <span class="glyphicon-class">glyphicon-retweet</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe115@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-shopping-cart"></span>
            <span class="glyphicon-class">glyphicon-shopping-cart</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe116@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-folder-close"></span>
            <span class="glyphicon-class">glyphicon-folder-close</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe117@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-folder-open"></span>
            <span class="glyphicon-class">glyphicon-folder-open</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe118@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-resize-vertical"></span>
            <span class="glyphicon-class">glyphicon-resize-vertical</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe119@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-resize-horizontal"></span>
            <span class="glyphicon-class">glyphicon-resize-horizontal</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe120@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-hdd"></span>
            <span class="glyphicon-class">glyphicon-hdd</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe121@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-bullhorn"></span>
            <span class="glyphicon-class">glyphicon-bullhorn</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe122@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-bell"></span>
            <span class="glyphicon-class">glyphicon-bell</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe123@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-certificate"></span>
            <span class="glyphicon-class">glyphicon-certificate</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe124@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-thumbs-up"></span>
            <span class="glyphicon-class">glyphicon-thumbs-up</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe125@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-thumbs-down"></span>
            <span class="glyphicon-class">glyphicon-thumbs-down</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe126@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-hand-right"></span>
            <span class="glyphicon-class">glyphicon-hand-right</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe127@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-hand-left"></span>
            <span class="glyphicon-class">glyphicon-hand-left</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe128@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-hand-up"></span>
            <span class="glyphicon-class">glyphicon-hand-up</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe129@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-hand-down"></span>
            <span class="glyphicon-class">glyphicon-hand-down</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe130@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-circle-arrow-right"></span>
            <span class="glyphicon-class">glyphicon-circle-arrow-right</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe131@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-circle-arrow-left"></span>
            <span class="glyphicon-class">glyphicon-circle-arrow-left</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe132@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-circle-arrow-up"></span>
            <span class="glyphicon-class">glyphicon-circle-arrow-up</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe133@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-circle-arrow-down"></span>
            <span class="glyphicon-class">glyphicon-circle-arrow-down</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe134@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-globe"></span>
            <span class="glyphicon-class">glyphicon-globe</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe135@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-wrench"></span>
            <span class="glyphicon-class">glyphicon-wrench</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe136@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-tasks"></span>
            <span class="glyphicon-class">glyphicon-tasks</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe137@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-filter"></span>
            <span class="glyphicon-class">glyphicon-filter</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe138@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-briefcase"></span>
            <span class="glyphicon-class">glyphicon-briefcase</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe139@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-fullscreen"></span>
            <span class="glyphicon-class">glyphicon-fullscreen</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe140@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-dashboard"></span>
            <span class="glyphicon-class">glyphicon-dashboard</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe141@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-paperclip"></span>
            <span class="glyphicon-class">glyphicon-paperclip</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe142@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-heart-empty"></span>
            <span class="glyphicon-class">glyphicon-heart-empty</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe143@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-link"></span>
            <span class="glyphicon-class">glyphicon-link</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe144@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-phone"></span>
            <span class="glyphicon-class">glyphicon-phone</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe145@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-pushpin"></span>
            <span class="glyphicon-class">glyphicon-pushpin</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe146@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-usd"></span>
            <span class="glyphicon-class">glyphicon-usd</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe148@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-gbp"></span>
            <span class="glyphicon-class">glyphicon-gbp</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe149@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-sort"></span>
            <span class="glyphicon-class">glyphicon-sort</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe150@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-sort-by-alphabet"></span>
            <span class="glyphicon-class">glyphicon-sort-by-alphabet</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe151@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-sort-by-alphabet-alt"></span>
            <span class="glyphicon-class">glyphicon-sort-by-alphabet-alt</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe152@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-sort-by-order"></span>
            <span class="glyphicon-class">glyphicon-sort-by-order</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe153@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-sort-by-order-alt"></span>
            <span class="glyphicon-class">glyphicon-sort-by-order-alt</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe154@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-sort-by-attributes"></span>
            <span class="glyphicon-class">glyphicon-sort-by-attributes</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe155@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-sort-by-attributes-alt"></span>
            <span class="glyphicon-class">glyphicon-sort-by-attributes-alt</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe156@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-unchecked"></span>
            <span class="glyphicon-class">glyphicon-unchecked</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe157@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-expand"></span>
            <span class="glyphicon-class">glyphicon-expand</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe158@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-collapse-down"></span>
            <span class="glyphicon-class">glyphicon-collapse-down</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe159@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-collapse-up"></span>
            <span class="glyphicon-class">glyphicon-collapse-up</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe160@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-log-in"></span>
            <span class="glyphicon-class">glyphicon-log-in</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe161@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-flash"></span>
            <span class="glyphicon-class">glyphicon-flash</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe162@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-log-out"></span>
            <span class="glyphicon-class">glyphicon-log-out</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe163@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-new-window"></span>
            <span class="glyphicon-class">glyphicon-new-window</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe164@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-record"></span>
            <span class="glyphicon-class">glyphicon-record</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe165@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-save"></span>
            <span class="glyphicon-class">glyphicon-save</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe166@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-open"></span>
            <span class="glyphicon-class">glyphicon-open</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe167@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-saved"></span>
            <span class="glyphicon-class">glyphicon-saved</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe168@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-import"></span>
            <span class="glyphicon-class">glyphicon-import</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe169@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-export"></span>
            <span class="glyphicon-class">glyphicon-export</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe170@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-send"></span>
            <span class="glyphicon-class">glyphicon-send</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe171@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-floppy-disk"></span>
            <span class="glyphicon-class">glyphicon-floppy-disk</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe172@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-floppy-saved"></span>
            <span class="glyphicon-class">glyphicon-floppy-saved</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe173@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-floppy-remove"></span>
            <span class="glyphicon-class">glyphicon-floppy-remove</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe174@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-floppy-save"></span>
            <span class="glyphicon-class">glyphicon-floppy-save</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe175@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-floppy-open"></span>
            <span class="glyphicon-class">glyphicon-floppy-open</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe176@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-credit-card"></span>
            <span class="glyphicon-class">glyphicon-credit-card</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe177@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-transfer"></span>
            <span class="glyphicon-class">glyphicon-transfer</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe178@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-cutlery"></span>
            <span class="glyphicon-class">glyphicon-cutlery</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe179@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-header"></span>
            <span class="glyphicon-class">glyphicon-header</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe180@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-compressed"></span>
            <span class="glyphicon-class">glyphicon-compressed</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe181@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-earphone"></span>
            <span class="glyphicon-class">glyphicon-earphone</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe182@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-phone-alt"></span>
            <span class="glyphicon-class">glyphicon-phone-alt</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe183@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-tower"></span>
            <span class="glyphicon-class">glyphicon-tower</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe184@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-stats"></span>
            <span class="glyphicon-class">glyphicon-stats</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe185@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-sd-video"></span>
            <span class="glyphicon-class">glyphicon-sd-video</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe186@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-hd-video"></span>
            <span class="glyphicon-class">glyphicon-hd-video</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe187@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-subtitles"></span>
            <span class="glyphicon-class">glyphicon-subtitles</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe188@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-sound-stereo"></span>
            <span class="glyphicon-class">glyphicon-sound-stereo</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe189@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-sound-dolby"></span>
            <span class="glyphicon-class">glyphicon-sound-dolby</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe190@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-sound-5-1"></span>
            <span class="glyphicon-class">glyphicon-sound-5-1</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe191@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-sound-6-1"></span>
            <span class="glyphicon-class">glyphicon-sound-6-1</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe192@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-sound-7-1"></span>
            <span class="glyphicon-class">glyphicon-sound-7-1</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe193@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-copyright-mark"></span>
            <span class="glyphicon-class">glyphicon-copyright-mark</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe194@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-registration-mark"></span>
            <span class="glyphicon-class">glyphicon-registration-mark</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe195@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-cloud-download"></span>
            <span class="glyphicon-class">glyphicon-cloud-download</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe197@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-cloud-upload"></span>
            <span class="glyphicon-class">glyphicon-cloud-upload</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe198@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-tree-conifer"></span>
            <span class="glyphicon-class">glyphicon-tree-conifer</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe199@Glyphicons Halflings'</span>
        </li>

        <li>
            <span class="glyphicon glyphicon-tree-deciduous"></span>
            <span class="glyphicon-class">glyphicon-tree-deciduous</span><hr>
            <span class="glyphicon-class-ext">glyph: 'xe200@Glyphicons Halflings'</span>
        </li>

        </ul>
        </div>


        <h2 id="glyphicons-how-to-use">How to use</h2>

        <h4 >Add them to existing elements that allow html to be included and rendered in a config option</h4>

        <p>Add them into xtemplates or text / html, and title configs via spans such as the one below. For this option use the class name directly under the icon above and prepend it with the class <strong>glyphicon</strong></p>

        <pre><code class="html"><span class="nt">&lt;span</span> <span class="na">class=</span><span class="s">"<strong>glyphicon</strong> glyphicon-search"</span><span class="nt">&gt;&lt;/span&gt;</span></code></pre>

        <h4>Add them via the glyph config option on the following elements in Extjs.</h4>
        <ul>
            <li>Button - <a href="http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.button.Button-cfg-glyph" target="_blank">http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.button.Button-cfg-glyph</a></li>
            <li>Menu Item - <a href="http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.menu.Item-cfg-glyph" target="_blank">http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.menu.Item-cfg-glyph</a></li>
            <li>Panel Title - <a href="http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.panel.Title-cfg-glyph" target="_blank">http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.panel.Title-cfg-glyph</a></li>
            <li>Panel Header - <a href="http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.panel.Title-cfg-glyph" target="_blank">http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.panel.Title-cfg-glyph</a></li>
        </ul>

        <pre><code class="js">
            {
                xtype           : 'button',
                enableToggle    : true,
                glyph           : 'x2b@Glyphicons Halflings',
                ui              : 'bootstrap-btn-default',
                text            : 'Add'
            }
        </code></pre>

        <h4>Add them to triggers by using the following format in the trigger cls congif option.</h4>
        <p>The extjs combobox and textfield allows for multiple triggers to be added by simply adding them in the <a href="http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.form.field.Text-cfg-triggers" target="_blank">
            triggers configuration object.</a> To use the icons above prefix them with the class <strong>glyphicon-trigger</strong> opposed to glyphicon.</p>

         <pre><code class="js">
             Ext.create('Ext.form.field.Text', {
                 renderTo: Ext.getBody(),
                 fieldLabel: 'My Custom Field',
                 triggers: {
                     foo: {
                         cls: 'glyphicon-trigger glyphicon-earphone',
                         handler: function() {
                         console.log('foo trigger clicked');
                     }
                 },
                 bar: {
                     cls: 'glyphicon-trigger glyphicon-cloud-upload',
                         handler: function() {
                         console.log('bar trigger clicked');
                         }
                     }
                 }
             });
         </code></pre>

    </div>

        <div class="bs-docs-section">
            <h1 id="buttons" class="page-header"><a href="http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.button.Button" target="_blank">Buttons</a> </h1>

            <h2 id="buttons-options">Options</h2>
            <p>Use any of the available button classes to quickly create a styled button.</p>
            <div class="zero-clipboard"><span class="btn-clipboard with-example">Copy</span></div><div class="bs-example">
            <button type="button" class="btn btn-default">Default</button>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-danger">Danger</button>

        </div>
            <div class="highlight"><pre><code class="js">
                <span class="c">&lt;!-- Standard button --&gt;</span>
                {
                    xtype           : 'button',
                    ui              : 'bootstrap-btn-default',
                    text            : 'Default'
                }
                <span class="c">&lt;!-- Provides extra visual weight and identifies the primary action in a set of buttons --&gt;</span>
                {
                    xtype           : 'button',
                    ui              : 'bootstrap-btn-primary',
                    text            : 'Primary'
                }
                <span class="c">&lt;!-- Indicates a successful or positive action --&gt;</span>
                {
                    xtype           : 'button',
                    ui              : 'bootstrap-btn-success',
                    text            : 'Success'
                }
                <span class="c">&lt;!-- Contextual button for informational alert messages --&gt;</span>
                {
                    xtype           : 'button',
                    ui              : 'bootstrap-btn-info',
                    text            : 'Info'
                }
                <span class="c">&lt;!-- Indicates caution should be taken with this action --&gt;</span>
                {
                    xtype           : 'button',
                    ui              : 'bootstrap-btn-warning',
                    text            : 'Warning'
                }
                <span class="c">&lt;!-- Indicates a dangerous or potentially negative action --&gt;</span>
                {
                    xtype           : 'button',
                    ui              : 'bootstrap-btn-danger',
                    text            : 'Danger'
                }
                </code></pre></div>
        </div>

        <div class="bs-docs-section">
        <h1 id="forms" class="page-header"><a href="http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.form.Panel" target="_blank">Forms</a></h1>

        <h2 id="forms-example">Basic example</h2>
        <p>Individual form controls automatically receive some global styling; an example is below. Padding has been increased to 6px and 12px, font sizes have increased to 14px and the
        input control height itself is now 34px.</p>

        <p>Examples of standard form controls supported in an example form layout.</p>

        <div class="zero-clipboard"><span class="btn-clipboard with-example">Copy</span></div><div class="bs-example">
            <form role="form">
                <input type="text" class="form-control" placeholder="Text input">
            </form>

        </div><!-- /.bs-example -->

            <h2 id="forms-how-to-use">How to use</h2>

            <p>Add them by setting the ui config option to <code>ui: 'bootstrap-text-field'</code>. This config works for all combo boxes as well as text fields.
            Taking advantage of the defaults config as in teh example below allows you to style them all at once.</p>

            <div class="highlight"><pre><code class="js">
                <span class="c">&lt;!-- Use the defaults config option to change all fields at once --&gt;</span>
                {
                    xtype         : 'form',
                    flex          : 1,
                    bodyPadding   : '15 15 15 15',
                    // Fields will be arranged vertically, stretched to full width
                    layout: 'anchor',

                    defaults: {
                        anchor      : '100%',
                        xtype       : 'textfield',
                        ui          : 'bootstrap-text-field',
                        labelWidth  : 150
                    },
                    // The fields
                    items: [
                            .....
                    ]
                }

            </code></pre></div>
      </div>

      <div class="bs-docs-section">
            <h1 id="grids" class="page-header"><a href="http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.grid.Panel" target="_blank">Grids</a></h1>

            <p>Grids receive some global styling; an example is below. Padding has been increased to 4px and font sizes have increased to 14px.</p>

              <div class="bs-example">
                  <table class="table table-striped">
                      <thead>
                      <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>Lisa</td>
                          <td>lisa@simpsons.com</td>
                          <td>555-111-1224</td>
                      </tr>
                      <tr>
                          <td>Bart</td>
                          <td>bart@simpsons.com</td>
                          <td>555-222-1234</td>
                      </tr>
                      <tr>
                          <td>Homer</td>
                          <td>homer@simpsons.com</td>
                          <td>555-222-1235</td>
                      </tr>
                      <tr>
                          <td>Marge</td>
                          <td>marge@simpsons.com</td>
                          <td>555-222-1236</td>
                      </tr>
                      </tbody>
                  </table>
              </div>
          <div class="highlight"><pre><code class="js">
              <span class="c">&lt;!-- Add the class bootstrap-table to the grid itself --&gt;</span>
              Ext.create('Ext.grid.Panel', {
                title: 'Simpsons',
                cls         : 'bootstrap-table',
                store: Ext.data.StoreManager.lookup('simpsonsStore'),
                columns: [
                    { text: 'Name',  dataIndex: 'name' },
                    { text: 'Email', dataIndex: 'email', flex: 1 },
                    { text: 'Phone', dataIndex: 'phone' }
                ],
                height: 200,
                width: 400,
                renderTo: Ext.getBody()
              });
          </code></pre></div>

          <h2 id="tables-contextual-classes">Contextual classes</h2>
          <p>Use contextual classes to color table rows. All contextual classes hover </p>

          <div class="table-responsive">
              <table class="table table-bordered table-striped">
                  <colgroup>
                      <col class="col-xs-1">
                      <col class="col-xs-7">
                  </colgroup>
                  <thead>
                  <tr>
                      <th>Class</th>
                      <th>Description</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td>
                          <code>.success</code>
                      </td>
                      <td>Indicates a successful or positive action</td>
                  </tr>
                  <tr>
                      <td>
                          <code>.info</code>
                      </td>
                      <td>Indicates a neutral informative change or action</td>
                  </tr>
                  <tr>
                      <td>
                          <code>.warning</code>
                      </td>
                      <td>Indicates a warning that might need attention</td>
                  </tr>
                  <tr>
                      <td>
                          <code>.danger</code>
                      </td>
                      <td>Indicates a dangerous or potentially negative action</td>
                  </tr>
                  </tbody>
              </table>
          </div>

          <h2 id="ct-how-to-use">How to use contextual classes</h2>

          <p>Add them by using the <code>getRowClass</code> method in your grids <code>viewConfig</code>. The exampel below assumes that you have a field named class in your model and the data in that
              field corresponds to a valid class name in the table above.</p>

          <ul>
            <li>getRowClass - <a href="http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.view.Table-method-getRowClass" target="_blank">http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.view.Table-method-getRowClass</a></li>
            <li>viewConfig - <a href="http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.panel.Table-cfg-viewConfig" target="_blank">http://docs.sencha.com/extjs/5.0/apidocs/#!/api/Ext.panel.Table-cfg-viewConfig</a></li>
          </ul>

          <div class="highlight"><pre><code class="js">
              <span class="c">&lt;!-- Add the class bootstrap-table to the grid itself --&gt;</span>
              viewConfig: {
                getRowClass: function(record, rowIndex, rowParams, store){
                    return record.get("contextual_class_name");
                }
              },
          </code></pre></div>
          <div class="bs-example">
              <table class="table">
                  <thead>
                  <tr>

                      <th>Column heading</th>
                      <th>Column heading</th>
                      <th>Column heading</th>
                  </tr>
                  </thead>
                  <tbody>

                  <tr>

                      <td>Column content</td>
                      <td>Column content</td>
                      <td>Column content</td>
                  </tr>
                  <tr class="success">

                      <td>Column content</td>
                      <td>Column content</td>
                      <td>Column content</td>
                  </tr>
                  <tr>

                      <td>Column content</td>
                      <td>Column content</td>
                      <td>Column content</td>
                  </tr>
                  <tr class="info">

                      <td>Column content</td>
                      <td>Column content</td>
                      <td>Column content</td>
                  </tr>
                  <tr>

                      <td>Column content</td>
                      <td>Column content</td>
                      <td>Column content</td>
                  </tr>
                  <tr class="warning">

                      <td>Column content</td>
                      <td>Column content</td>
                      <td>Column content</td>
                  </tr>
                  <tr>

                      <td>Column content</td>
                      <td>Column content</td>
                      <td>Column content</td>
                  </tr>
                  <tr class="danger">

                      <td>Column content</td>
                      <td>Column content</td>
                      <td>Column content</td>
                  </tr>
                  </tbody>
              </table>
          </div>
      </div>

      </div>
      </div>
      </body>
</html>
