import User from './User'
import OnlineUserList from './OnlineUserList'
import OfflineUserList from './OfflineUserList'

export default function Sidebar() {
    return (     
      <div class="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <User />
        <OnlineUserList />
        <OfflineUserList />
      </div>
      
    )
}
