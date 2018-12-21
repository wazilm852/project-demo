<template>
    <div>
        <h1>这是es6</h1>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    created () {
        this.xieru();
        this.show();
    },
    methods: {
        xieru () {
            
            {
                var a=10;
                let b=20;
            }
            console.log(a)
            console.log(b)
        },
        show () {
            // console.log(a)
            // console.log(b)
        }
    }
}
</script>
<style>

</style>
