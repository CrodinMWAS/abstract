<template>
   <nav>
    <div id="logo"></div>
    <font-awesome-icon class="icon" icon="calendar" />
    <div id="line"></div>
    <font-awesome-icon class="icon" icon="location-dot" />
    <font-awesome-icon class="icon" icon="user" />
   </nav>
</template>
<script>
export default {
    
}
</script>
<style>
    :root{
        --size: 40px;
    }

    nav{
        padding: 1%;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
    }

    #logo{
        width: calc(var(--size) * 1.5);
        aspect-ratio: 1;
        border-radius: 10px;
        background-size: 110%;
        outline: 3px solid var(--purpleColor);
    }

    .icon{
        width: var(--size);
        height: var(--size);
        color: var(--blackColor);
    }

    #line{
        background-color: var(--purpleColor);
        width: 50%;
        height: 5px;
        border-radius: 50px;
        align-self: flex-start;
    }

</style>