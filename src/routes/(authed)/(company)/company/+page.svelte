<script lang="ts">
	import { invalidate, invalidateAll } from '$app/navigation';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Welcome to Company page</h1>
{JSON.stringify(data)}

<button on:click={() => invalidate('authed:root')}>Invalidate</button>
<button on:click={() => invalidateAll()}>Invalidate All</button>
