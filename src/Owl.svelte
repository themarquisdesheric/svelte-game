<style>
  div {
		background-color: black;
		height: calc(100vw / 5);
    max-height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img { width: 70%; }
</style>

<script>
  import owlImage from '../public/favicon.png';

  let reveal = false;
  const setVisible = () => {
    reveal = true;

    if (owl.winningOwl) {
      alert('winning owl!!!');
    }
  };

  export let owl;
</script>

<div 
  on:click={setVisible} 
  style="background-color: {reveal ? owl.color : ''}"
>
  {#if reveal && owl.color !== 'transparent'}
    <img src={owlImage} alt="owl" />
  {/if}
</div>
