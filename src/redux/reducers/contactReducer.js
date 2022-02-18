

 const initialState= [
     {
         id:0,
         name: 'raza',
         email: 'abc@gmail.com',
         number: 123456

     },
     {
         id:1,
         name:'hasnain',
         email: '123@gmail.com',
         number: 654321

     },
   
 ]

 export const contactReducer =(state= initialState, action)=>{
   switch (action.type) {
     case 'ADD_CONTACT':
         state =[...state ,action.payload]
                return state
      case 'UPDATE_SUCCESSFULL':
          const updateState= state.map(contact=>contact.id ===action.payload.id ? action.payload: contact)
          state=updateState
          return state
          case 'DELETE_SUCCESSFULL' :
              const filterContact = state.filter(contact=> contact.id!== action.payload && contact);
              state =filterContact
              return state
       default:
           return state;
   }
 }





// const initialState=[
//     {
// id:1,
// name: 'Hasnain Raza',
// number: 123456789
//     },
//     {
//         id:2,
//         name: 'Abdul Razzak ',
//         number: 987654321
//     }
// ]

// const contactReducer =(state =initialState, action)=>{
//     switch (action.type) {
//         default:
            
//         return state
            
          
//     }
// }

// export default contactReducer ;