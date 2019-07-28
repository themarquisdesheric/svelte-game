<style>
  div {
		background-color: blueviolet;
		height: calc(100vw / 5);
    max-height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img { 
    width: 70%; 
  }
</style>

<script>
  import owl from '../public/favicon.png';

  let owlVisible = false;

  const toggleVisible = () => {
    owlVisible = !owlVisible;
  };
</script>

<div on:click={toggleVisible}>
  {#if owlVisible}
    <img src={owl} alt="owl" />
  {/if}
</div>
