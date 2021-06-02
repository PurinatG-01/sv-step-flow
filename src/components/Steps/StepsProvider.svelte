<script>
	import { fade, fly } from 'svelte/transition';
	import TodoList from 'components/Todos/TodoList.svelte'
	let stepChanger = 0
	let steps = [1,2,3,4,5]
	let action = false
	
	let animation = {
		lr: { x: -200, duration: 500 },
		rl: { x: 200, duration: 500 },
	}
	
	const nextStep = ()=>{
		action = true
		if(stepChanger < steps.length-1 ){
			stepChanger++
		}else{
			stepChanger = 0
		}
	}
	const prevStep = ()=>{
		action = false
		if(stepChanger > 0){
			stepChanger--
		}else{
			stepChanger = steps.length-1
		}
	}
	
</script>

<div>
	<h1>
		<slot name="header"></slot>
	</h1>
	<button on:click={prevStep} >prev</button>
	<button on:click={nextStep} >next</button>
	{stepChanger}
</div>

{#each steps as step}
	{#if stepChanger == step-1}
		<div>
			<TodoList/>
		</div>
	{/if}
{/each}

<div>
	<slot name="footer"></slot>
</div>

<style>

</style>
