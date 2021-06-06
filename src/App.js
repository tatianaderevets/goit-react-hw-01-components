import React from "react";

// data
import friends from "./data/friends.json";
import userData from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import transactions from "./data/transactions.json";

// Components
import Container from "./components/Container/Container";
import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <Container>

      <h1>First homework</h1>
      <Profile data={userData} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      
    </Container>
      
      
    
  );
}

export default App;
