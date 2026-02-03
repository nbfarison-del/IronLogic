import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import RecoveryTracker from '../components/RecoveryTracker';
import WeightTracker from '../components/WeightTracker';
import GoalTracker from '../components/GoalTracker';

const Home = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1>Welcome back, {user?.name || 'User'}!</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem', fontStyle: 'italic' }}>
                Train like a Champion Today!
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                <RecoveryTracker />
                <WeightTracker />
            </div>
            <GoalTracker />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div className="card">
                    <h2>Start Workout</h2>
                    <p>Log your daily exercise and keep track of your sets.</p>
                    <Link to="/log">
                        <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Log Now</button>
                    </Link>
                </div>

                <div className="card">
                    <h2>View Progress</h2>
                    <p>See your stats and improvements over time.</p>
                    <Link to="/progress">
                        <button className="btn" style={{ marginTop: '1rem' }}>View Dashboard</button>
                    </Link>
                </div>

                <div className="card">
                    <h2>Recent Activity</h2>
                    <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>No recent activity to show.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
