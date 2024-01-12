<script>
export default {
    name: 'AppHeader'
}
</script>
<template lang="">
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-6 d-flex align-items-center py-4">
                    <h1>Boolflix</h1>
                </div>
                <div class="col-6">
                    
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

    h1{
        font-size: 50px;
        color: #E50815;
        padding: 5px 0;
    }
</style>