function main ({title}) {
	return `
<!DOCTYPE html>
<html>
	<head>
		<title>${title}</title>
		<link rel="stylesheet" href="/public/demo.css">
		<link rel="stylesheet" href="/public/main.css">
	</head>

	<body style="background-color:#fff1e5;" id="demo-page">
		<div class="ncf" id="demoContent" />
	</body>

	<script type="text/javascript" src="/public/demo-jsx.js"></script>
</html>
`;
}

module.exports = main;
