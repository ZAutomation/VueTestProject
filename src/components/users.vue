<template>
    <div class="users">
        <h1>Users</h1>
        <form v-on:submit="addUser">
        <input type=text v-model="newUser.name" placeholder="enter name">
        <br/>
        <input type=text v-model="newUser.email" placeholder="enter email">
        <br/>
       <input type=submit value=submit>
        </form>
        <ul>
            <li v-for="user in users" :key="user.id">
                <input type="checkbox" class="toggle" v-model="user.contacted">
                <span :class="{contacted: user.contacted}">
        {{user.name}} : {{user.email}} <button v-on:click="deleteUser(user)">x</button>
      </span>
</li>
            </ul>
    </div>
</template>


<script>
export default {
   
    name:'users',
    data(){
        return {
             newUser:{},
            users:[
           {
             name:'Zee',
             contacted:false,
             email:'zee.bms@gmail.com'
            }, {
             name:'raj',
             contacted:false,
             email:'raj.bms@gmail.com'
            }, {
             name:'tom',
             contacted:false,
             email:'tom.bms@gmail.com'
            }, {
             name:'vee',
             contacted:false,
             email:'vee.bms@gmail.com'
            }
            ]
       
        }
    },
    methods:{
        addUser:function(e){
            e.preventDefault();
            this.users.push({
              name:this.newUser.name,
              email:this.newUser.email,
              contacted:false  
            })
            console.log('Submit');
            
            
        },
        deleteUser:function(user){
            console.log('deleted');
            this.users.splice(this.users.indexOf(user),1);
        }
      
    },
    created:function(){
    this.$http.get('https://jsonplaceholder.typicode.com/users').then(
        function(response){
            this.users=response.data;
        });
    }
}
</script>
<style scoped>
.contacted{
    text-decoration: line-through;
}

</style>


