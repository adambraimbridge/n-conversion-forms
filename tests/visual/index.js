const Differencify = require('differencify');
const differencify = new Differencify();


(async () => {
  await differencify
    .init()
    .launch({
		headless: false
	})
    .newPage()
    .setViewport({ width: 1600, height: 1200 })
    .goto('http://localhost:5005')
    .waitFor(1000)
    .screenshot()
    .toMatchSnapshot()
    .result((result) => {
      console.log(result); // Prints true or false
    })
    .close()
    .end();
})();
