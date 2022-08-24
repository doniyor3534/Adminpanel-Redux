const initialData = {
    contacts:[
        {id:0,img:'./img/imgcontact.png',name:'Samantha William',title:'Marketing Manager',messege:false},
        {id:1,img:'./img/imgcontact.png',name:'Tony Soap',title:'Marketing Manager',messege:false},
        {id:2,img:'./img/imgcontact.png',name:'Nadila Adja',title:'Marketing Manager',messege:true},
        {id:3,img:'./img/imgcontact.png',name:'Karen Hope',title:'Marketing Manager',messege:false},
        {id:4,img:'./img/imgcontact.png',name:'Jordan Nico',title:'Marketing Manager',messege:true},
        {id:5,img:'./img/imgcontact.png',name:'Samantha William',title:'Marketing Manager',messege:false}
    ],
    comments:[
        {id:0,name:'Christian Jornald',foiz:30,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:3,img:'./img/imgcontact.png'
         },
        {id:1,name:'Rachel Happy',foiz:70,comment:' Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:5,img:'./img/imgcontact.png'
         },
        {id:2,name:'Vita Delong',foiz:10,comment:'Facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:4,img:'./img/imgcontact.png'
         },
        {id:3,name:'Christian Jornald',foiz:90,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:3,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:4,name:'Christian Jornald',foiz:80,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:5,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:6,name:'Christian Jornald',foiz:20,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:7,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:8,name:'Christian Jornald',foiz:50,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:9,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:10,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:11,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:12,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:13,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:14,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:15,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:16,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:17,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:18,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:19,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:20,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:21,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:22,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:23,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:24,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:25,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:26,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:27,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:28,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:29,name:'Christian Jornald',foiz:20,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:30,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:31,name:'Christian Jornald',foiz:20,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:32,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:33,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:34,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:35,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:36,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:37,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:38,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:39,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:40,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:41,name:'Christian Jornald',foiz:40,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
         },
        {id:42,name:'Christian Jornald',foiz:70,comment:'Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.',
          reyting:1,img:'./img/imgcontact.png'
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