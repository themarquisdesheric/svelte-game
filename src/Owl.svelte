<style>
  div {
    position: relative;
    background: linear-gradient(to right, #FFFFFF, #ECE9E6);
		height: calc(100vw / 5);
    max-height: 170px;
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
  import owlImage from '../public/owl.png';

  let reveal = true;
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
  style="background: {reveal ? owl.color : ''}"
>
  {#if reveal && owl.color !== 'transparent'}
    <img src={owlImage} alt="owl" />
  {/if}
</div>
