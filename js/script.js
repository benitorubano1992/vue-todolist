const{createApp}=Vue;
createApp({
    data(){
        return {
            list:[
                {
                    text:"Fare la spesa",
                    done:false
                },
                {
                    text:"fare esercizi Boolean",
                    done:false
                },
                {
                    text:"mettere in ordine la camera",
                    done:false
                }
            ],
            userInput:"",
            isUserValid:true,
            activityAlreadyPresent:false,
            errorMessagge:"",
          
        }
    },
    methods:{
        enterNewActivity:function(){
           this.userInput=this.userInput.trim();
           const textActivity=this.list.map(item=> item.text.toLowerCase());

           if(this.userInput.length>5&&!textActivity.includes(this.userInput.toLowerCase())){
                this.list.push({
                    text:this.userInput,
                    done:false
                })
                this.userInput="";
                this.isUserValid=true;    
            }
              else if(this.userInput.length < 5){
              this.isUserValid=false;  
              this.errorMessagge="Non hai inserito un numero adeguato di caratteri"
            }
            else if(textActivity.includes(this.userInput.toLowerCase())){
                this.isUserValid=false;  
                this.errorMessagge="Attivita gia presente"
                this.userInput="";
            }            
        
        
        },
        deleteActivity:function(index){
        this.list.splice(index,1);
        },
        secondDeleteActivity:function(contentText){
             this.list=this.list.filter(item=> item.text!==contentText);//primo modo possibile per eliminare un elemento
        },
        checkElement:function(index){
            this.list[index].done=!this.list[index].done;
        }
        
        
    
    
    }
}).mount("#app");