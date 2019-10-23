node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save --no-package-lock @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

build:
	node-sass main.scss dist/component.css --include-path bower_components
	postcss dist/component.css -u autoprefixer -r
	npm run transpile

build-demo:
	make build
	webpack --config demos/webpack.config.js
	node-sass demos/main.scss public/demo.css --include-path bower_components
	webpack -d --config demos/webpack.jsx.config.js
	@$(DONE)

run: build-demo
	@DEMO_MODE=true nodemon --ext html,css --watch public --watch views demos/app.js

a11y: build-demo
	@PA11Y=true node demos/app
	@$(DONE)

test: verify
	make jest
	make unit-test
	make a11y-demo

unit-test:
	mocha --recursive --reporter spec test

jest:
	jest

a11y-demo:
	export TEST_URL=http://localhost:5005; \
	make a11y

smoke:
	n-test smoke --host http://localhost:5005
