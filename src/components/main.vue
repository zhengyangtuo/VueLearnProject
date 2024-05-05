<template>
    <div>
    <button @click="selectAll">查询全部</button>
    <table v-if="userList !== null">
        <tr v-for="row in userList" :key="row">
            <td v-for="(v,k) in row" :key="k">{{v}}</td>
        </tr>
    </table>
    <button @click="selectUserById(userId)">查询单个</button>
    <button @click="deleteUserById(userId)">删除特定用户</button>
    <input type="text" v-model="userId">
    <br>
    <p v-for="(v,k,i) in user" :key="k">{{ k }}-{{ v }}-{{ i }}</p>
    <br>    
    <button @click="addUserBy">添加用户</button>
    <button @click="updateUserById">更新用户</button>
    <form>
        <label for="userId">用户id</label>
        <input type="text" id="userId" v-model="userId" required>
        <br>
        <label for="name">用户名</label>
        <input type="text" id="name" v-model="userName" required>
        <br>
        <label for="age">年龄</label>
        <input type="text" id="age" v-model="age" required>
        <br>
        <label for="phone">手机号</label>
        <input type="text" id="phone" v-model="phone" required>
        <br>    
        <label for="email">邮箱</label>
        <input type="text" id="email" v-model="email" required>
    </form>
    </div>
</template>
<script>
import {getAllUser,selectById,deleteUser,updateById,addUser} from '../api/user'
export default {
    data() {
        return{
            userList:[],
            user:{},
            userId:null,
            userName:"",
            age:null,
            phone:"",
            email:""
        } 
    },
    methods:{
        selectAll(){
            getAllUser().then(res=>{
                this.userList = res;
                console.log("请求成功=>",res);
            }).catch(err=>{
                console.log("请求失败=>",err);
            })
        },
        selectUserById(id){
            console.log("selectById ",id);
            selectById(id).then(res=>{
                this.user = res;
                console.log("请求成功=>",res);
            }).catch(err=>{
                console.log("请求失败=>",err);
            })
        },
        deleteUserById(id){
            deleteUser(id).then(res=>{
                console.log("请求成功=>",res);
            }).catch(err=>{
                console.log("请求失败=>",err);
            })
        },
        updateUserById(){
            var user = {
                name:this.userName,
                age:this.age,
                phone:this.phone,
                email:this.email,
                userId:this.userId
            };
            updateById(user).then(res=>{
                console.log("请求成功=>",res);
            }).catch(err=>{
                console.log("请求失败=>",err);
            })
        },
        addUserBy(){
            var user = {
                name:this.userName,
                age:this.age,
                phone:this.phone,
                email:this.email,
                userId:this.userId
            };
            addUser(user).then(res=>{
                console.log("请求成功=>",res);
            }).catch(err=>{
                console.log("请求失败=>",err);
            })
        }
    }
}
</script>
<style scoped>

</style>