// import React from 'react'
// import axios from 'axios'
// import { useQuery,useMutation,useQueryClient } from '@tanstack/react-query'
// import { error } from 'console'

// const Todos = () => {
//     const queryClient = useQueryClient();
//     const mutation = useMutation({
//         mutationFn: (newTodo) => {
//           return axios.post('http://localhost:3001/todos', newTodo)
//         },
//         onMutate:(variables)=>{
//             console.log("A mutaion ia about to happen");
//         },
//         onError:(error,variables,context)=>{
//             console.log('Error',error.message);
//         },
//         onSuccess:(data,variables,context)=>{
//             console.log('success',data);
//             queryClient.invalidateQueries({queryKey:["todos"]})
//         }
//       })
    


//   return (
//     <div>
//          {mutation.isPending ? (
//         'Adding todo...'
//       ) : (
//         <>
//           {mutation.isError ? (
//             <div>An error occurred: {mutation.error.message}</div>
//           ) : null}

//           {mutation.isSuccess ? <div>Todo added!</div> : null}

//           <button
//             onClick={() => {
//               mutation.mutate({ id: new Date(), title: 'Do Laundry' })
//             }}
//           >
//             Create Todo
//           </button>
//         </>
//       )}
      
//     </div>
//   )
// }

// export default Todos
