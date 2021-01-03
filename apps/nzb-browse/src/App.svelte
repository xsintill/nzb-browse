<script lang="ts">
	// strict cors can be solved using chrome as "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
	// import nzbGet from 'nzb-api';

	export let name: string;
	import { ajax } from 'rxjs/ajax';
	import { pluck, startWith } from 'rxjs/operators';

	const url = `https://nzbfinder.ws/api/v1/api?t=caps`;
	let data;
	let reposObservable
	reposObservable = ajax(url).pipe(
		pluck("response"),
		startWith([]) 
	)
	// nzbApi.getCapabilities().then((result) => {
  	// 	console.log(result);
	// });
	function getNzbs() {
		// const response = await fetch(url)
		// const res = await fetch("https://api.quotable.io/random");
    	// return res.json()
    	// return response.json()
	}
	// function handleClick() {
	// 	return nzbs()
	// }
</script>

<main>
	<h1>Welcome to {name}!</h1>	
	<button on:click|once={getNzbs}>get nzbs</button>
	{#each $reposObservable as r}  
		<div>{r}</div>	
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
