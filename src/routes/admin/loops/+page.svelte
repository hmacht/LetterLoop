<script lang="ts">
  import { onMount } from 'svelte';
  import { getSolutions } from '$lib/repos/solutionRepo'
  import { parseLoop } from '$lib/utils/loop'
  import { Alert } from 'flowbite-svelte';
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

  let solutions: any[] = [];
  let lastSolutionDate: string;

  onMount(async () => {
    solutions = await getSolutions(new Date());
    lastSolutionDate = formatDate(solutions[solutions.length - 1].date)
  });

  function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const formattedDate: string = date.toLocaleDateString(undefined, options);

    return formattedDate;
  }

</script>

<div class="container">
  <Alert>
    <i class="fa-solid fa-circle-exclamation"></i>
    {#if solutions.length > 0}
      Solutions run out on <b>{lastSolutionDate}</b>
    {/if}
  </Alert>

  <br>

  {#if solutions.length > 0}
    <Table class="border border-slate-600 rounded-lg overflow-hidden">
      <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Upcoming Loops
        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">There are currently {solutions.length} loops set for the future.</p>
      </caption>
      <TableHead>
        <TableHeadCell>Date</TableHeadCell>
        <TableHeadCell>Word 1</TableHeadCell>
        <TableHeadCell>Word 2</TableHeadCell>
      </TableHead>
      <TableBody tableBodyClass="divide-y">
        {#each solutions as solution}
          {@const [word1, word2] = parseLoop(solution.solutions[0])}
          <TableBodyRow>
            <TableBodyCell>{new Date(solution.date).toLocaleDateString()}</TableBodyCell>
            <TableBodyCell>{word1}</TableBodyCell>
            <TableBodyCell>{word2}</TableBodyCell>
          </TableBodyRow>
        {/each}
      </TableBody>
    </Table>
  {:else}
    <p>No upcoming loops available.</p>
  {/if}
</div>