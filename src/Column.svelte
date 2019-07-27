<style>
  .box {
    background: tomato;
    margin: 5px;
    color: white;
    font-weight: bold;
    flex: 1 0 auto;
    position: relative;
  }

  .box:after {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .box .inner {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img { width: 70%; }
</style>

<script>
  import src from '../public/favicon.png';
</script>

<div class="box">
  <div class="inner">
    <img src={src} alt="svelte logo for now" />
  </div>
</div>
