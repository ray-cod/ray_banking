import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
    const loggedIn = { firstName: 'Raimi', lastName: 'Dikamona', email: 'raimilassissi8@gmail.com' }

    return (
        <section className="home">
          <div className="home-content">
            <header className="home-header">
              <HeaderBox 
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || 'Guest'}
                subtext="Access and manage your account and transactions efficiently."
              />

              <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={12500.35}
              />

              RECENT TRANSACTION
            </header>
          </div>

          <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{ currentBalance: 1250.50 }, { currentBalance: 250.50 }]}
          />
        </section>
    )
}

export default Home