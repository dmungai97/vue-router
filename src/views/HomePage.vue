<template>
        <div class="container">

          <h1>Our cars</h1>
          <select @change="handleChange"  v-model="make">
            <option value="ALL">ALL</option>
            <option value="Chevrolet">Chevy</option>
            <option value="Porshe">Porshe</option>
            <option value="Audi">Audi</option>
          </select>
          <div class="cards">
            <div v-for="car in cars" :key="car.id" class="card"
            @click="router.push(`/car/${car.id}`)">
              <h1>{{car.make}}</h1>
              <p>${{ car.price }}</p>
            </div>
          </div>
          <button @click="router.back()">Back</button>
        </div>
</template>

<script setup>
import carsData from '../data.json'
import {ref,watch,onMounted} from "vue"
import {useRouter} from 'vue-router'


const router=useRouter()//resest ,change path
const route=useRouter()//information about path


const cars = ref(carsData)
const make=ref("")

// onMounted(()=>{
//   if(route.query.make){
//     make.value=route.query.make
//   }
// })


watch(make,()=>{
    if(make.value){
        if(make.value==="ALL") cars.value=carsData
        else{
            cars.value=carsData.filter(c=>c.make===make.value)
        }
    }
})

const handleChange=()=>{
  router.push({query:{make:make.value}})
}
</script>

<style scoped>
.cards{
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
}
.card{
  box-shadow: 1px 1px 10px rgba(0,0,0,0.207);
  padding: 15px;
  width: 150px;
  margin-right: 15px;
  cursor: pointer;
  margin-bottom: 20px;
}

</style>