module.exports = function(grunt) {
  grunt.initConfig({
	// get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here


	
    // configure jshint to validate js files -----------------------------------
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Gruntfile.js', 'js/**/*.js']
    },

    // configure uglify to minify js files -------------------------------------
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/js/plugins.min.js': [
		  'assets/global/plugins/ocLazyLoad/dist/ocLazyLoad.js',
		  'assets/global/plugins/jquery/jquery-1.11.1.min.js',
		  'assets/global/plugins/jquery-ui/jquery-ui-1.11.2.min.js',
		  'assets/global/plugins/gsap/main-gsap.min.js',	  
		  'assets/global/plugins/bootstrap/js/bootstrap.min.js',
		  'assets/global/plugins/jquery-cookies/jquery.cookies.min.js',
		  'assets/global/plugins/mcustom-scrollbar/jquery.mCustomScrollbar.concat.min.js',
		  'assets/global/plugins/bootstrap-dropdown/bootstrap-hover-dropdown.min.js',
		  'assets/global/js/widgets/notes.js',
		  'assets/global/plugins/timepicker/jquery-ui-timepicker-addon.js',
		  'assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
		  'assets/global/plugins/jquery-validation/jquery.validate.js',
		  'assets/global/plugins/jquery-validation/additional-methods.js',
		  'assets/global/plugins/bootstrap-slider/bootstrap-slider.js',
		  'assets/global/plugins/isotope/isotope.pkgd.min.js',
		  'assets/global/plugins/magnific/jquery.magnific-popup.js',
		  'assets/global/plugins/moment/moment.min.js',		  
		  'assets/global/plugins/fullcalendar/fullcalendar.min.js',
		  'assets/global/js/pages/fullcalendar.js',
		  'assets/global/plugins/bootstrap-loading/lada.min.js',
		  'assets/global/plugins/idle-timeout/jquery.idletimer.min.js',
		  'assets/global/plugins/noty/jquery.noty.packaged.min.js',
		  'assets/global/plugins/bootstrap-editable/js/bootstrap-editable.min.js',
		  'assets/global/plugins/multidatepicker/multidatespicker.min.js',
		  'assets/global/plugins/charts-highstock/js/highstock.min.js',
		  'assets/global/plugins/skycons/skycons.min.js',	 
		  'assets/global/plugins/angular-base64-master/angular-base64.min.js',
		  'assets/global/plugins/select2/select2.min.js',
		  'assets/global/plugins/ui-select/dist/select.js',
		  'assets/global/plugins/voice/recorder.js',
		  'assets/global/plugins/voice/Fr.voice.js',
		  'assets/global/plugins/backstretch/backstretch.min.js',
		  'plugins/json3/lib/json3.js',
		  'plugins/angular-moment/angular-moment.js',
		   'plugins/angular-dragdrop/angular-dragdrop.min.js'
		  ],
		  'dist/js/angular-utility.min.js':[
		  'plugins/angular/angular.js',
		  'plugins/angular-resource/angular-resource.js',
		  'plugins/angular-cookies/angular-cookies.js',
		  'plugins/angular-sanitize/angular-sanitize.js',
		  'plugins/angular-animate/angular-animate.js',
		  'plugins/angular-touch/angular-touch.js',
		  'plugins/angular-route/angular-route.js'	  
		  ],
		  'dist/js/services.min.js':[
		  'app/services/UserService.js',
		  'app/services/authservice.js',
		  'app/services/responseCodeService.js',
		  'app/services/HeartRateConfigService.js',
		  'app/services/AmbientTemperatureConfigService.js',
		  'app/services/BodyTemperatureConfigService.js',
		  'app/services/RoleService.js',
		  'app/services/ViewService.js',
		  'app/services/catViewservice.js',
		  'app/services/statService.js',
		  'app/services/contentSearchService.js',
		  'app/services/reminderService.js',
		  'app/services/userManagementService.js',
		  'app/services/notificationService.js',
		  'app/services/GrampaInfoService.js',
		  'app/services/MedicineCabinetService.js',
		  'app/services/socketService.js',
		  'app/services/grampaManagementService.js',
		  'app/services/commonService.js',
		  'app/services/customizedmessages.js'		  
		  ],
		  'dist/js/theme-utility.min.js':[
		  'js/plugins.js',
		  'js/quickview.js',
		  'js/xeditable.js',
		  'js/toaster.js',
		  'js/pages/layouts_api.js'
		  ],
		  'dist/js/theme-config.min.js':[
		  'app/scripts/settings/setting.js'
		  ],
		  'dist/js/derecives-factories.min.js':[
		  'app/factory/weatherDetails.js',
		  'app/factory/loginValidation.js'
		  //'app/directives/directives.js'
		 // 'directives/ngViewClass.js'
		  ]
		  
        }
      }
    },
	
	  processhtml: {
			dev: {
			  options: {
				data: {
				  message: 'This is development environment'
				}
			  },
			  files: {
				'index.html': ['dev/index.html']
			  }
			},
			prod: {
			  options: {
				data: {
				  message: 'This is production environment'
				}
			  },
			  files: {
				'index.html': ['prod/index.html']
			  }
			}
		  },

    less: {
     build: {
       files: {
         'css/l-custom.css': 'css/l-custom.less'
       }
     }
   },
	versioning: {
		options: {
		  grepFiles: [
			'index.html',
		  ]
		},
		css: {
		  src: [
			'dist/css/l-custom.css'
		  ]
		},
	},
	cssmin: {
		  options: {
			mergeIntoShorthands: false,
			roundingPrecision: -1
		  },
		  target: {
			files: {
			  'dist/css/plugins.css': [
			  
			  'assets/global/css/theme.css',
			  'assets/global/css/ui.css', 
			  'assets/global/plugins/icheck/skins/all.css',
			  'assets/global/plugins/bootstrap-tags-input/bootstrap-tagsinput.css',
			  'assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker.css',
			  'assets/global/plugins/rateit/rateit.css',
			  'assets/global/plugins/ion-slider/ion.rangeSlider.css',
			  'assets/global/plugins/ion-slider/style.css',
			  'assets/global/plugins/magnific/magnific-popup.css',
			  'assets/global/plugins/hover-effects/hover-effects.css',
			  'assets/global/plugins/fullcalendar/fullcalendar.min.css',
			  'assets/global/plugins/prettify/prettify.css',
			  'assets/global/plugins/jstree/dist/themes/default/style.css',
			  'css/toaster.css',
			  'assets/global/plugins/datatables/dataTables.css',
			  'assets/global/plugins/dropzone/dropzone.css',
			  'assets/global/plugins/input-text/style.css',
			  'assets/global/plugins/ui-select/dist/select.css',
			  //'assets/global/plugins/font-awesome-animation/font-awesome-animation.min.css',
			  'css/angular-theme.css',
			  'assets/admin/layout2/css/layout.css',
			  'css/horizontalTimeline.css',
			  'css/circle.css',
			  'css/xeditable.css'
			  ],
			  'dist/css/kraydel-custom.css':[
			  'css/custom.css',
			  'css/custom-general.css'
			  //'css/l-custom.css'
			  ],
			  'dist/css/l-custom.css':[
			  'css/l-custom.css'
			  ]
			}
		  }
		},
		watch: { //watch for any updats in the less file. If any update detected the new css will be generated automatically.
            files: "css/*.less",
            tasks: ['less', 'cssmin', 'processhtml:dev', 'versioning']
        }
		

  });

	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-sonar-runner');
	grunt.loadNpmTasks('grunt-war');
	grunt.loadNpmTasks('grunt-karma-sonar');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-version-assets');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.registerTask('dev', ['less', 'cssmin', 'uglify', 'processhtml:dev', 'versioning']);
	grunt.registerTask('prod', ['less', 'cssmin', 'uglify', 'processhtml:prod', 'versioning']);
	


};