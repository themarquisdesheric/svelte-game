<style>
  div {
    position: relative;
    background: linear-gradient(to right, #FFFFFF, #ECE9E6);
		height: calc(100vw / 5);
    max-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img { 
    position: absolute;
    bottom: 0;
    width: 70%; 
  }
</style>

<script>
  import { fly } from 'svelte/transition';
  import { getRandomCoordinate, getRandomPolarity } from './utils';
  import owlImage from '../public/owl.png';

  let reveal = false;
  const setVisible = () => {
    reveal = true;

    if (owl.winningOwl) {
      const losingOwls = document.querySelectorAll('.losing-owl');
      
      losingOwls.forEach(owlNode => {
        owlNode.style.visibility = 'hidden';
      });
    }
  };

  const transitionOptions = {
    [getRandomCoordinate()]: getRandomPolarity(75), 
    duration: 250
  };

  export let owl;
</script>

<div 
  on:click={setVisible} 
  class:losing-owl="{!owl.winningOwl}"
  style="background: {reveal ? owl.color : ''}"
>
  {#if reveal && owl.color !== 'transparent'}
    <img transition:fly={transitionOptions} src={owlImage} alt="owl" />
  {/if}
</div>
