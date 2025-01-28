// import {auth} from '	next/auth';
import { redirect } from 'next/navigation';

import "@/styles/admin.css";
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';

const Layout = async ({ children }) => {
  // const session = await auth();

  // TOTO: Validar si la sesión es válida
  // if(!session?.user?.id) redirect('/login');

  return (
    <main className="flex min-h-screen w-full flex-row">
      {/* <Sidebar session={session} /> */}
      <Sidebar />

      <div className='admin-container'>
        {/* <Header session={session} /> */}
        <Header />
        {children}
      </div>

    </main>
  )
}

export default Layout