
import { QueryClient } from '@tanstack/react-query'
import { Outlet, Link, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient;
}>()({
    component: () => (
        <>
            <h1 className="text-center text-2xl font-bold my-6">Welcome to the Pokemon World</h1>
            <div className="p-4 flex justify-center space-x-8 bg-gray-100">
                <Link to="/" className="text-blue-500 hover:text-blue-700 ">Home</Link>
                <Link to="/name" className="text-blue-500 hover:text-blue-700">Name</Link>
                <Link to="/abilities" className="text-blue-500 hover:text-blue-700">Abilities</Link>
                <Link to="/species" className="text-blue-500 hover:text-blue-700">Species</Link>
            </div>
            <hr className="my-4 border-gray-300" />
            <Outlet />

           
            <TanStackRouterDevtools />
        </>

    ),
})
