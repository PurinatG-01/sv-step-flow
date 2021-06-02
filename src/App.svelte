<script>
  import StepsProvider from "components/Steps/StepsProvider.svelte"

</script>

<main>
  <!-- <TodoList /> -->
  <StepsProvider>
    <h2 slot="header">
        Test header slot
    </h2>
    <h3 slot="footer">
      Test footer slot
  </h3>
    </StepsProvider>
</main>

<style>
  main {
    margin: 0;
    padding: 4px 8px;
  }

  *{
    color: #232323;
  }
</style>
