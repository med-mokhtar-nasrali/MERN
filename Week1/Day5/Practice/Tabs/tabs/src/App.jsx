import './App.css'
import Tabs from './components/Tabs';

function App() {
  const tabItems = [
    { 
      name: 'Home', 
      content: 'Welcome to the Home tab. Here you will find an overview of the latest updates and features.' 
    },
    { 
      name: 'Profile', 
      content: 'This is the Profile tab. Manage your personal information, update your bio, and view your activity.' 
    },
    { 
      name: 'Settings', 
      content: 'In the Settings tab, you can customize your preferences, manage notifications, and adjust privacy options.' 
    },
    { 
      name: 'Help', 
      content: 'Visit the Help tab for FAQs, user guides, and contact information for customer support.' 
    },
  ];
  
  return (
    <>
      <Tabs tabs={tabItems} />
    </>
  )
}

export default App
