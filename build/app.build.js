({
	appDir: '../src/',
	baseUrl: './scripts/',
	dir: '../dist',
	mainConfigFile: '../src/scripts/main.js',
	optimizeCss: 'none',
	paths: {
		requireLib: '../scripts/vendors/requirejs/require'
	},
	modules: [
        {
            name: 'main',
            include: ['requireLib', 'main', 'app'],
        },
        {
            name: 'bundles/todos/main',
            exclude: ['main']
        }
    ]
})
