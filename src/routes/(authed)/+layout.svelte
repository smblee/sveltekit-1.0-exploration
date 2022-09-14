<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

AUTHED LAYOUT

{JSON.stringify(data)}

<a href="/company">Company</a>
<a href="/investor">Investor</a>

<main>
	<slot />
</main>
