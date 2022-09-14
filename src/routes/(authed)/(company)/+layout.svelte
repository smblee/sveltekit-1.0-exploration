<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

COMPANY LAYOUT {JSON.stringify(data)}
<main>
	<slot />
</main>
