module.exports = (plop) => {
	plop.setGenerator('component', {
		description: 'Create a component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is your component name?'
			}
		],
		actions: [
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/index.js',
				templateFile: 'templates/Component.js.hbs'
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/styles.js',
				templateFile: 'templates/styles.js.hbs'
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.js',
				templateFile: 'templates/test.js.hbs'
			}
		]
	})
}