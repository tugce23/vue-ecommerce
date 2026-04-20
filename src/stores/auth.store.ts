import {defineStore} from 'pinia'

export const useAuthStore =defineStore('auth',{
    state:()=>({
        user:null as null | {email:string},
        token:null as string |null

    }),
    actions:{
        login(email:string, password:string){
            if(email && password){
                this.user={email}
                this.token='fake-jwt-token'
                localStorage.setItem('token',this.token)
                localStorage.setItem('user', JSON.stringify(this.user))
            }
        },
        register(email:string, password:string){
            console.log('registered',email,password)
        },
        logout(){
            this.user=null,
            this.token=null,
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        },
        loadUser(){
            const token=localStorage.getItem('token')
            const user=localStorage.getItem('user')
            if(token && user){
                this.token=token,
                this.user=JSON.parse(user)
            }
        }
    }
})