<script>
  import { fade, fly } from "svelte/transition";
  import TodoList from "@/components/Todos/TodoList.svelte";
  import { generateFakeUserDatas } from "@/util/generateFakeUserDatas.js";
  import Step from "@/components/Steps/Step.svelte";

  let stepChanger = 1;
  let stepsLimit = 3;
  let action = false;

  let animation = {
    lr: { x: -200, duration: 500 },
    rl: { x: 200, duration: 500 },
  };

  const nextStep = () => {
    action = true;
    if (stepChanger < stepsLimit) {
      stepChanger++;
    } else {
      stepChanger = 1;
    }
  };
  const prevStep = () => {
    action = false;
    if (stepChanger > 1) {
      stepChanger--;
    } else {
      stepChanger = stepsLimit;
    }
  };
</script>

<div>
  <button on:click={prevStep}>prev</button>
  <button on:click={nextStep}>next</button>
  {stepChanger}
</div>
<div class="step-container">
  {#if stepChanger == 1}
    <div out:fade class="step-wrapper" in:fly={{x:-200, opacity: 0}}>
      <TodoList data={generateFakeUserDatas(10)}/>
    </div>
  {:else if stepChanger == 2}
    <div out:fade class="step-wrapper" in:fly={{x:-200, opacity: 0}}>
      <TodoList data={generateFakeUserDatas(5)}/>
    </div>
  {:else if stepChanger == 3}
    <div out:fade class="step-wrapper" in:fly={{x:-200, opacity: 0}}>
      <Step number={3} />
    </div>
  {/if}
</div>
<style>
  .step-wrapper {
    position: absolute;
    z-index: 1;
  }
  .step-container{
	  /* background:#f0f0f0; */
  }
</style>
