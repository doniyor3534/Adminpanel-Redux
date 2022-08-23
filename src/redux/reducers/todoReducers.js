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
        {id:3,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:4,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:5,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:6,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:7,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:8,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:9,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:10,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:11,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:12,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:13,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:14,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:15,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:16,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:17,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:18,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:19,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:20,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:21,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:22,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:23,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:24,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:25,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:26,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:27,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:28,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:29,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:30,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:31,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:32,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:33,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:34,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:35,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:36,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:37,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:38,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:39,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:40,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:41,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
        {id:42,name:'Christian Jornald',comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:''
         },
    ],
    resentActiv:[
        {id:0,name:'Transaction Assets',title:'Ab architecto provident ex accusantium deserunt. ',rangi:'#5149E4'},
        {id:1,name:'New Email Register',title:'Ab architecto provident ex accusantium deserunt. ',rangi:'#FFB9CD'},
        {id:2,name:'Transaction Assets',title:'Ab architecto provident ex accusantium deserunt. ',rangi:'green'},
        {id:3,name:'New Email Register',title:'Ab architecto provident ex accusantium deserunt. ',rangi:'red'},
    ],
    cryptocardmass:[
      {id:0,name:'Bitcoin',sena:'$25,741',foiz:'15%'},
      {id:1,name:'Litecoin',sena:'$45,741',foiz:'25%'},
      {id:2,name:'Ethereum',sena:'$45,741',foiz:'25%'},
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