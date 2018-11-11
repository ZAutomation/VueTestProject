<template>
    <div class="test">
        <input type=text v-model="mytitle" placeholder="Write Name">
        <h1>{{mytitle}}</h1>
        <p v-if="showName">{{user.fname}}</p>
        <p v-text="user.lname"></p>
        <ul>
            <li v-for="item in items" :key="item.id" >{{item.title}}</li>
        </ul>
        <button v-on:click="greet(mytitle)" class="btn btn-primary">SayGreeting  </button>
        <input type="text" v-on:keyup=pressKey v-on:keyup.enter=EnterHit><br>
    
   <label>First Name </label>
   <input type=text v-model="user.fname">
   <br/>
    <label>Last Name </label>
   <input type=text v-model="user.lname">
   <br/>
 <h3>
{{fullName}}
     </h3>
     <h3>{{msg}}</h3>
    </div> 
</template>


<script>
export default {
    name:'test',
    props:{
        msg:{
            type:String,
            dafault:'Foobar'
        }
    },
    data(){
        return {
           mytitle:'',
            title:'Hello World',
            user: {
                fname :'Zeeshan',
                lname:'Akhtar'
            },
            showName:false,
            items: [{
                title:'Item One'},
                {title:'Item Two '},
                {title:'Item Three'},
                {title:'Item four',
            }]
        }
    },
    methods:{
        greet:function(title){
             console.log('test');
            alert('Hello' + title);
        },
        pressKey: function(e){
            console.log('mymy');
            console.log(e.target.value);
        },
        EnterHit:function(){
            console.log('You hit enter');
        }
    },
    computed:{
    fullName:function(){
        return this.user.fname + ' ' +this.user.lname; 
    }
    }
  
}
</script>
<style scoped>

</style>


