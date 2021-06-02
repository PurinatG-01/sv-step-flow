<script>
  import storeTodos from "stores/todos.js";
  import { fade } from 'svelte/transition';

  export let data;

  const editData = (data) => {
    console.log(`> data : `, data);
  };

  $: console.log(`> data : `,data)
  


</script>

{#if $storeTodos.length == 0}
  <div class="empty-todos-wrapper">No todos</div>
{:else}
  <table transition:fade class="todo-list-wrapper">
    <tr>
      <th>Name</th>
      <th>Timestamp</th>
      <th>Edit</th>
    </tr>
    {#each data as todo}
      <tr>
        <td>{todo.name}</td>
        <td>{todo.timestamp}</td>
        <td>
          <button class="btn edit-btn" on:click|once={editData}> 🖋 </button>
        </td>
      </tr>
    {/each}
  </table>
{/if}

<style>
  /* your styles go here */
  .btn {
    padding: 4px 8px;
    border: none;
  }

  .edit-btn {
    color: #6da8ec;
  }

  .todo-list-wrapper {
    border: 1px solid #eaeaea;
    border-radius: 4px;
    padding: 4px 4px;
    width: 100%;
    height: 100%;
    max-width: 640px;
    max-height: 640px;
  }

  th,
  td {
    border: 1px solid #eaeaea;
    border-radius: 4px;
    padding: 4px 8px;
  }

  .empty-todos-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 320px;
    background-color: #e4e4e4;
    border-radius: 8px;
  }
</style>
