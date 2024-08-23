// "use client"
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// const TanstackProvider = ({ children }) => {
//   const queryClient = new QueryClient();

//   return (
//     <QueryClientProvider client={queryClient}>
//       {children}
//     <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// export default TanstackProvider;

// i am importing here page.js file
// "use client"
// import { useQuery } from "@tanstack/react-query"


// export default function Home() {
   
  // const{data:todosData,isLoading,isError,isSuccess,error} = useQuery({
  //   queryKey:["todos"],
  //   queryFn:()=>fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>res.json(),
  // ),
  // select: (todos)=>todos.map((todo)=>({id:todo.id,title:todo.title})),
  // })
  // if(isLoading){
  //   return(
  //     <div>
  //       it is Loading
  //     </div>
  //   )
  // }
  // if(isError){
  //   return(
  //     <div>
  //       it is Loading
  //     </div>
  //   )
  // }
  // console.log(todosData);

    
//   const{data:todosData,isLoading,isError,isSuccess,error} = useQuery({
//     queryKey:["todos"],
//     queryFn:()=>fetch("http://localhost:3001/todos").then((res)=>res.json(),
//   ),
//   })
//   if(isLoading){
//     return(
//       <div>
//         it is Loading
//       </div>
//     )
//   }
//   if(isError){
//     return(
//       <div>
//         it is Loading
//       </div>
//     )
//   }

//   return (
//     <div>
//       <h1>Todos</h1>
//       {
//         todosData?.map((todo)=>(
//           <div className="flex" key={todo.id}>
//           <h2>{" "+todo.title}</h2>
//           </div>

//         ) 

//       )
//       }
//     </div>

//   );
// }

