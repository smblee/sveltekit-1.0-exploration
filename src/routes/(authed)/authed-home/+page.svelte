<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Welcome to authed home page</h1>
{JSON.stringify(data)}
