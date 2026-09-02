<script lang="ts">
  import { onMount } from 'svelte';
  import { upcomingLoops, type ScheduledLoop } from '$lib/services/adminService';
  import { formatDayKey } from '$lib/utils/gameDate';
  import { Alert } from 'flowbite-svelte';
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

  let loops: ScheduledLoop[] = [];
  let errorMessage = '';
  let loading = true;

  $: lastScheduledDate = loops.length > 0 ? formatDayKey(loops[loops.length - 1].dayKey) : '';

  onMount(async () => {
    try {
      loops = await upcomingLoops();
    } catch (error) {
      errorMessage = error instanceof Error ? error.message : 'Could not load loops.';
    } finally {
      loading = false;
    }
  });
</script>

<div class="container">
  {#if errorMessage}
    <Alert color="red">
      <i class="fa-solid fa-circle-exclamation"></i>
      {errorMessage}
    </Alert>
  {:else}
    <Alert>
      <i class="fa-solid fa-circle-exclamation"></i>
      {#if loops.length > 0}
        Loops run out on <b>{lastScheduledDate}</b>
      {:else}
        No loops are scheduled.
      {/if}
    </Alert>
  {/if}

  <br>

  {#if loading}
    <p>Loading loops...</p>
  {:else if loops.length > 0}
    <div class="border border-slate-300 rounded-lg overflow-hidden mb-5">
      <Table class="w-full">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Upcoming Loops
          <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">There are currently {loops.length} loops set for the future.</p>
        </caption>
        <TableHead>
          <TableHeadCell>Date</TableHeadCell>
          <TableHeadCell>Word 1</TableHeadCell>
          <TableHeadCell>Word 2</TableHeadCell>
        </TableHead>
        <TableBody tableBodyClass="divide-y">
          {#each loops as loop (loop.dayKey)}
            <TableBodyRow>
              <TableBodyCell>{formatDayKey(loop.dayKey)}</TableBodyCell>
              <TableBodyCell>{loop.primary}</TableBodyCell>
              <TableBodyCell>{loop.secondary}</TableBodyCell>
            </TableBodyRow>
          {/each}
        </TableBody>
      </Table>
    </div>
  {:else}
    <p>No upcoming loops available.</p>
  {/if}
</div>