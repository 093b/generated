const assert = require('assert');
const helper = require('../helper');

describe('Generated', () => {
  describe('isGenerated()', () => {
    it('should detect when files are generated', () => {
      // Xcode project files
      assert.ok(helper.generatedSampleWithoutLoadingData('Binary/MainMenu.nib'));
      assert.ok(helper.generatedSampleWithoutLoadingData('Dummy/foo.xcworkspacedata'));
      assert.ok(helper.generatedSampleWithoutLoadingData('Dummy/foo.xcuserstate'));

      // Gemfile.lock is NOT generated
      assert.ok(!helper.generatedSampleWithoutLoadingData('Gemfile.lock'));

      // Cocoapods
      assert.ok(helper.generatedSampleWithoutLoadingData('Pods/Pods.xcodeproj'));
      assert.ok(helper.generatedSampleWithoutLoadingData('Pods/SwiftDependency/foo.swift'));
      assert.ok(helper.generatedSampleWithoutLoadingData('Pods/ObjCDependency/foo.h'));
      assert.ok(helper.generatedSampleWithoutLoadingData('Pods/ObjCDependency/foo.m'));
      assert.ok(helper.generatedSampleWithoutLoadingData('Dummy/Pods/Pods.xcodeproj'));
      assert.ok(helper.generatedSampleWithoutLoadingData('Dummy/Pods/SwiftDependency/foo.swift'));
      assert.ok(helper.generatedSampleWithoutLoadingData('Dummy/Pods/ObjCDependency/foo.h'));
      assert.ok(helper.generatedSampleWithoutLoadingData('Dummy/Pods/ObjCDependency/foo.m'));

      // Carthage
      assert.ok(helper.generatedSampleWithoutLoadingData('Carthage/Build/.Dependency.version'));
      assert.ok(helper.generatedSampleWithoutLoadingData('Carthage/Build/iOS/Dependency.framework'));
      assert.ok(helper.generatedSampleWithoutLoadingData('Carthage/Build/Mac/Dependency.framework'));
      assert.ok(helper.generatedSampleWithoutLoadingData('src/Carthage/Build/.Dependency.version'));
      assert.ok(helper.generatedSampleWithoutLoadingData('src/Carthage/Build/iOS/Dependency.framework'));
      assert.ok(helper.generatedSampleWithoutLoadingData('src/Carthage/Build/Mac/Dependency.framework'));

      // Go-specific vendored paths
      assert.ok(helper.generatedSampleWithoutLoadingData('go/vendor/github.com/foo.go'));
      assert.ok(helper.generatedSampleWithoutLoadingData('go/vendor/golang.org/src/foo.c'));
      assert.ok(helper.generatedSampleWithoutLoadingData('go/vendor/gopkg.in/some/nested/path/foo.go'));

      // .NET designer file
      assert.ok(helper.generatedSampleWithoutLoadingData('Dummy/foo.designer.cs'));
      assert.ok(helper.generatedSampleWithoutLoadingData('Dummy/foo.Designer.cs'));
      assert.ok(helper.generatedSampleWithoutLoadingData('Dummy/foo.designer.vb'));
      assert.ok(helper.generatedSampleWithoutLoadingData('Dummy/foo.Designer.vb'));

      // Composer generated composer.lock file
      assert.ok(helper.generatedSampleWithoutLoadingData('JSON/composer.lock'));

      // Node modules
      assert.ok(helper.generatedSampleWithoutLoadingData('Dummy/node_modules/foo.js'));

      // npm shrinkwrap file
      assert.ok(helper.generatedSampleWithoutLoadingData('Dummy/npm-shrinkwrap.json'));
      assert.ok(helper.generatedSampleWithoutLoadingData('Dummy/package-lock.json'));

      // Yarn Plug'n'Play file
      assert.ok(helper.generatedSampleWithoutLoadingData('.pnp.js'));
      assert.ok(helper.generatedSampleWithoutLoadingData('.pnp.cjs'));
      assert.ok(helper.generatedSampleWithoutLoadingData('.pnp.mjs'));
      assert.ok(helper.generatedSampleWithoutLoadingData('.pnp.loader.mjs'));

      // Godep saved dependencies
      assert.ok(helper.generatedSampleWithoutLoadingData('Godeps/Godeps.json'));
      assert.ok(helper.generatedSampleWithoutLoadingData('Godeps/_workspace/src/github.com/kr/s3/sign.go'));

      // Generated by Zephir
      assert.ok(helper.generatedSampleWithoutLoadingData('C/exception.zep.c'));
      assert.ok(helper.generatedSampleWithoutLoadingData('C/exception.zep.h'));
      assert.ok(helper.generatedSampleWithoutLoadingData('PHP/exception.zep.php'));

      // Minified files
      assert.ok(helper.generatedSampleLoadingData('JavaScript/jquery-1.6.1.min.js'));

      // JavaScript with source-maps
      assert.ok(helper.generatedSampleLoadingData('JavaScript/namespace.js'));
      assert.ok(helper.generatedFixtureLoadingData('Generated/inline.js'));

      // CSS with source-maps
      assert.ok(helper.generatedFixtureLoadingData('Generated/linked.css'));
      assert.ok(helper.generatedFixtureLoadingData('Generated/inline.css'));

      // Source-map
      assert.ok(helper.generatedFixtureWithoutLoadingData('Data/bootstrap.css.map'));
      assert.ok(helper.generatedFixtureWithoutLoadingData('Generated/linked.css.map'));
      assert.ok(helper.generatedFixtureLoadingData('Data/sourcemap.v3.map'));
      assert.ok(helper.generatedFixtureLoadingData('Data/sourcemap.v1.map'));

      // Specflow
      assert.ok(helper.generatedFixtureWithoutLoadingData('Features/BindingCulture.feature.cs'));

      // JFlex
      assert.ok(helper.generatedSampleLoadingData('Java/JFlexLexer.java'));

      // GrammarKit
      assert.ok(helper.generatedSampleLoadingData('Java/GrammarKit.java'));

      // roxygen2
      assert.ok(helper.generatedSampleLoadingData('R/import.Rd'));

      // PostScript
      assert.ok(helper.generatedSampleLoadingData('PostScript/lambda.pfa'));

      // Perl ppport.h
      assert.ok(helper.generatedFixtureLoadingData('Generated/ppport.h'));

      // Graphql Relay
      assert.ok(helper.generatedSampleWithoutLoadingData('Javascript/__generated__/App_user.graphql.js'));

      // Game Maker Studio 2
      assert.ok(helper.generatedSampleLoadingData('JSON/GMS2_Project.yyp'));
      assert.ok(helper.generatedSampleLoadingData('JSON/2ea73365-b6f1-4bd1-a454-d57a67e50684.yy'));
      assert.ok(helper.generatedFixtureLoadingData('Generated/options_main.inherited.yy'));

      // Pipenv
      assert.ok(helper.generatedSampleWithoutLoadingData('Dummy/Pipfile.lock'));

      // HTML
      assert.ok(helper.generatedFixtureLoadingData('HTML/mandoc.html'));
      assert.ok(helper.generatedSampleLoadingData('HTML/pages.html'));

      // GIMP
      assert.ok(helper.generatedFixtureLoadingData('C/image.c'));
      assert.ok(helper.generatedFixtureLoadingData('C/image.h'));

      // Haxe
      assert.ok(helper.generatedFixtureLoadingData('Generated/Haxe/main.js'));
      assert.ok(helper.generatedFixtureLoadingData('Generated/Haxe/main.py'));
      assert.ok(helper.generatedFixtureLoadingData('Generated/Haxe/main.lua'));
      assert.ok(helper.generatedFixtureLoadingData('Generated/Haxe/Main.cpp'));
      assert.ok(helper.generatedFixtureLoadingData('Generated/Haxe/Main.h'));
      assert.ok(helper.generatedFixtureLoadingData('Generated/Haxe/Main.java'));
      assert.ok(helper.generatedFixtureLoadingData('Generated/Haxe/Main.cs'));
      assert.ok(helper.generatedFixtureLoadingData('Generated/Haxe/Main.php'));

      // jOOQ
      assert.ok(helper.generatedSampleLoadingData('Java/generated-jooq-table.java'));

      // poetry
      assert.ok(helper.generatedSampleWithoutLoadingData('TOML/filenames/poetry.lock'));
    });
  });
});
