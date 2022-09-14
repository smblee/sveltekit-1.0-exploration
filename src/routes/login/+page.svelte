<script lang="ts">
	import { goto } from '$app/navigation';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

login page
{JSON.stringify(data)}

<button
	on:click={async () => {
		document.cookie = `session=${crypto.randomUUID()}`;
		await goto('/authed-home');
	}}>Login</button
>
