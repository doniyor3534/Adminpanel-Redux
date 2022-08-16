const initialData = {
    contacts:[
        {id:0,img:'',name:'Samantha William',title:'Marketing Manager',messege:false},
        {id:1,img:'',name:'Tony Soap',title:'Marketing Manager',messege:false},
        {id:2,img:'',name:'Nadila Adja',title:'Marketing Manager',messege:true},
        {id:3,img:'',name:'Karen Hope',title:'Marketing Manager',messege:false},
        {id:4,img:'',name:'Jordan Nico',title:'Marketing Manager',messege:true},
        {id:5,img:'',name:'Samantha William',title:'Marketing Manager',messege:false}
    ],
    comments:[
        {id:0,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:3,img:''
         },
        {id:1,name:'Rachel Happy',comment:' Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:5,img:''
         },
        {id:2,name:'Vita Delong',comment:'Facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:4,img:''
         },
        {id:3,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
    ],
    resentActiv:[
        {id:0,name:'Transaction Assets',title:'Ab architecto provident ex accusantium deserunt. ',rangi:'#5149E4'},
        {id:1,name:'New Email Register',title:'Ab architecto provident ex accusantium deserunt. ',rangi:'#FFB9CD'},
        {id:2,name:'Transaction Assets',title:'Ab architecto provident ex accusantium deserunt. ',rangi:'green'},
        {id:3,name:'New Email Register',title:'Ab architecto provident ex accusantium deserunt. ',rangi:'red'},
    ]
}
const todoRuducers = (state=initialData,action) =>{
        switch(action.type){
            case 'add_todo': 
            const {id ,data} = action.payload;

            return {
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
            case 'delete_todo': 
            const deleteList = state.list.filter((val)=> val.id !== action.id)
            return {
                ...state,
                list:deleteList 
            }
            case 'remove_todo': 
            return {
                ...state,
                list:[]
            }
            default :return state;
        }

}

export default todoRuducers;